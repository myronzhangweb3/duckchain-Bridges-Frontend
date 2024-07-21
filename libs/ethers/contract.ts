import { ethers, BigNumber } from 'ethers'
import Decimal from 'decimal.js'
import Erc20Abi from '../abi/erc20.abi.json'
import { BASE_TOKEN_CONTRACT_URL } from '@/constants'
import { Multicall, ContractCallContext } from 'ethereum-multicall'

export class Erc20Contract {
  contract: ethers.Contract
  jsonRpcProvider: any

  constructor(contractAddress: string, rpcUrl: string, chainId: number, signer?: any) {
    if (chainId) {
      this.jsonRpcProvider = new ethers.providers.StaticJsonRpcProvider(rpcUrl, { name: '', chainId })
    }
    this.contract = new ethers.Contract(
      contractAddress,
      Erc20Abi,
      signer || this.jsonRpcProvider
    )
  }

  async getBalance(account: string, decimals: number) {
    try {
      let balance = 0
      if (
        this.contract.address === BASE_TOKEN_CONTRACT_URL
      ) {
        balance = await this.jsonRpcProvider.getBalance(account)
      } else {
        balance = await this.contract.balanceOf(account)
      }
      balance =
        Math.floor(Number(ethers.utils.formatUnits(balance, decimals)) * 10000) / 10000
      return Number(Number(balance).toFixed(8))
    } catch(e) {
      return 0
    }
  }

  async allowance(account: string, spenderContractAddress: string) {
    return ethers.utils.formatUnits(
      await this.contract.allowance(account, spenderContractAddress),
      await this.contract.decimals()
    )
  }

  async approve(spenderContractAddress: string) {
    const max = 100000000
    return await this.contract.approve(
      spenderContractAddress,
      ethers.utils.parseUnits(max.toString(), await this.contract.decimals())
    )
  }
}

export const getBalancesByAddresses = async(network: any, account: string, erc20Addresses: string[]) => {
  const provider = new ethers.providers.StaticJsonRpcProvider(network.rpcUrl, { name: '', chainId:network.chainId })
  const multicall = new Multicall({
    ethersProvider: provider,
    tryAggregate: true,
    multicallCustomContractAddress: network.multicallContractAddress
  })
  const contexts: ContractCallContext[] = []
  for (const i in erc20Addresses) {
    if (erc20Addresses[i] !== BASE_TOKEN_CONTRACT_URL) {
      contexts.push({
        reference: erc20Addresses[i],
        contractAddress: erc20Addresses[i],
        abi: Erc20Abi,
        calls: [{ reference: 'balanceOf', methodName: 'balanceOf', methodParameters: [account] }]
      })
    }
  }
  let data:any[]
  if (contexts.length) {
    data = await Promise.all([provider.getBalance(account), multicall.call(contexts)])
  } else {
    data = await Promise.all([provider.getBalance(account)])
  }
  
  let list = []
  list.push({
    address: BASE_TOKEN_CONTRACT_URL,
    balance: data[0]
  })
  if (!data[1]) {
    return list
  }
  for (let i in data[1].results) {
    try {
      list.push({
        address: i,
        balance: data[1].results[i].callsReturnContext[0].returnValues[0]
      })
    } catch {
      list.push({
        address: i,
        balance: new BigNumber({}, '0x0')
      })
    }
  }
  return list
}

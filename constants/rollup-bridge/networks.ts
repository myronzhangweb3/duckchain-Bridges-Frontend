import MATR1X from '@/assets/img/network/matr1x.jpg'
import ETH from '@/assets/img/network/eth.svg'
import { NETWORK } from '../../env'
import { ethers } from 'ethers'

const getLayer1 = (network: string) => {
  switch (network) {
    case 'testnet':
      return {
          layer1: 'Sepolia',
          name: 'Sepolia',
          chainId: 11155111,
          symbol: 'ETH',
          decimals: 18,
          rpcUrl: 'https://rpc.ankr.com/eth_sepolia',
          explorerUrl: 'https://sepolia.etherscan.io/',
          img: ETH,
          multicallContractAddress: '0x2a1888ed64ba4ced5b21ff691f30b337504ec34c'
        }
    case 'mainnet':
      return {
          // merlin chain info
          // layer1: 'Ethereum',
          // name: 'Ethereum',
          // chainId: 1,
          // symbol: 'ETH',
          // decimals: 18,
          // rpcUrl: 'https://ethereum.publicnode.com',
          // explorerUrl: 'https://eth.blockscout.com',
          // img: ETH_IMG,
          // multicallContractAddress: '0x9695FA23b27022c7DD752B7d64bB5900677ECC21'
        }
    
  }
}


const getRollup = (network: string) => {
  switch (network) {
    case 'testnet':
      return {
        layer1: 'Sepolia',
        name: 'Matr1x',
        chainId: 240708,
        customizeGasName: 'ETH',
        customizeGasSymbol: 'ETH',
        customizeGasDecimals: 18,
        customizeGasAddress: '0x0000000000000000000000000000000000000000',
        img: MATR1X,
        rpcUrl: 'https://alpha-zkrollup-rpc.lumoz.org/matr1x',
        explorerUrl: 'https://matr1x.zkevm.lumoz.info',
        zkBridgeServerUrl: 'https://alpha-zkrollup-service.lumoz.org/matr1x/',
        isGasFree: false,
        nativeTokenName: "ETH",
        nativeTokenSymbol: "ETH",
        nativeTokenDecimals: 18,
        multicallContractAddress: '0x30a89c9cb8e20f6154cebde925d8c2369301364f'
      }
    case 'mainnet':
      return {
        // zkevmType: 'Polygon zkEVM',
        // layer1: 'Ethereum',
        // name: 'ZKFair',
        // chainId: 42766,
        // customizeGasName: 'USD Coin',
        // customizeGasSymbol: 'USDC',
        // customizeGasDecimals: 6,
        // customizeGasAddress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
        // img: ZKFAIR_IMG,
        // rpcUrl: 'https://rpc.zkfair.io',
        // explorerUrl: 'https://scan.zkfair.io',
        // zkBridgeServerUrl: 'https://bridge-service.zkfair.io',
        // isGasFree: false,
        // nativeTokenName: "ETH",
        // nativeTokenSymbol: "ETH",
        // nativeTokenDecimals: 18,
        // multicallContractAddress: '0x1CbC08bf0D48b18F9f97796c61352b192d1850A5'
      }
  }
}


const getTokens = (network: string) => {
  switch (network) {
    case 'testnet':
      return [
        {
          name: 'ETH',
          symbol: 'ETH',
          layer1Address: '0x0000000000000000000000000000000000000000',
          rollupAddress: '0x0000000000000000000000000000000000000000',
          rollupDecimals: 18,
          layer1Decimals: 18
        },
        {
          name: 'Matr1x',
          symbol: 'M1',
          layer1Address: '0x44cDE76f09F0Bb81d16d1D9a7762A159D4F39FB7',
          rollupAddress: '0xaFaFe9a2D6629bFE796c1ab56F31CF8504B33191',
          rollupDecimals: 18,
          layer1Decimals: 18
        }
      ]
    case 'mainnet':
      return []
  }
}

const getL2Config = (network: string) => {
  switch (network) {
    case 'testnet':
      return {
        AddressManager: '0x50A505ddB359f90B475B7E4Fb659Ab43246fc953',
        L1CrossDomainMessenger: '0xd4ceEe20a0b05c3C15A474708e4C9D26664270e8',
        L1StandardBridge: '0xDAa301A3abeFF04CBC560109DA63b5B30F0F73E9',
        OptimismPortal: '0x172256616CBEbB37f53E449412D22e0A731682bf',
        L2OutputOracle: '0x917ce42E207cB3873F3B467Bffa95386544a2e5b',
        StateCommitmentChain: ethers.constants.AddressZero,
        CanonicalTransactionChain: ethers.constants.AddressZero,
        BondManager: ethers.constants.AddressZero
      }
    case 'mainnet':
      return {
        AddressManager: '0x50A505ddB359f90B475B7E4Fb659Ab43246fc953',
        L1CrossDomainMessenger: '0xd4ceEe20a0b05c3C15A474708e4C9D26664270e8',
        L1StandardBridge: '0xDAa301A3abeFF04CBC560109DA63b5B30F0F73E9',
        OptimismPortal: '0x172256616CBEbB37f53E449412D22e0A731682bf',
        L2OutputOracle: '0x917ce42E207cB3873F3B467Bffa95386544a2e5b',
        StateCommitmentChain: ethers.constants.AddressZero,
        CanonicalTransactionChain: ethers.constants.AddressZero,
        BondManager: ethers.constants.AddressZero
      }
  }
}




export const LAYER1 = getLayer1(NETWORK)
export const ROLLUP = getRollup(NETWORK)
export const TOKENS = getTokens(NETWORK)
export const L2Config = getL2Config(NETWORK)

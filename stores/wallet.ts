import { defineStore } from 'pinia'
import { ethers } from 'ethers'
import { LAYER1 } from '~~/constants/rollup-bridge/networks'


export type Bridge = {
  provider: any
  web3Provider: any
  signer: any
}

let bridge: Bridge = {
  provider: null,
  web3Provider: null,
  signer: null
}

export function getBridge() {
  return bridge
}

export const useWalletStore = defineStore('wallet', {
  state: () => ({
    account: ''
  }),
  actions: {
    async connectWallet(provider: any, account: string) {
      if (!account) {
        this.disconnectWallet()
        return
      }
      try {
        bridge.provider = provider
        this.account = account
        if (bridge.provider) {
          bridge.web3Provider = new ethers.providers.Web3Provider(provider, { name: provider.name, chainId: LAYER1.chainId })
          bridge.signer = bridge.web3Provider.getSigner()
        }
      } catch (error) {
        this.disconnectWallet()
      }
    },
    disconnectWallet() {
      this.account = ''
      bridge = {
        provider: null,
        web3Provider: null,
        signer: null
      }
    },
    async signature(message: any) {
      message.message.timestamp = Number(new Date())
      message.message.nonce = Math.floor(Math.random() * 100000)
      message = JSON.stringify(message)
      const signature = await bridge.provider.request({
        method: 'eth_signTypedData_v4',
        params: [this.account, message]
      })
      return {
        payload: message,
        signature
      }
    },
    async simpleSign(params: any[]) {
      const signature = await bridge.provider.request({
        method: 'personal_sign',
        params: [params.join(''), this.account]
      })
      return signature
    },
    async addNetwork(network: any) {
      try {
        await bridge.provider.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: network.idHex,
              chainName: network.name,
              nativeCurrency: {
                name: network.symbol,
                symbol: network.symbol,
                decimals: network.decimals
              },
              rpcUrls: [network.rpcUrl],
              blockExplorerUrls: [network.explorer]
            }
          ]
        })
      } catch (e) {
        return false
      }
    },
    setNetwork(name:string, chainId: number) {
      bridge.web3Provider = new ethers.providers.Web3Provider(bridge.provider, { name, chainId })
    },
    async checkAndSwitchNetwork(network: any) {
      const chainIdHex = `0x${network.chainId.toString(16)}`
      await this.setNetwork(network?.name, network?.chainId)
      try {
        const chainId = await bridge.provider.request({ method: 'eth_chainId' })
        if (chainId === chainIdHex) {
          return true
        }
        await bridge.provider.request({
          method: 'wallet_switchEthereumChain',
          params: [
            {
              chainId: chainIdHex
            }
          ]
        })
        return true
      } catch (e) {
        if (e.code === 4902) {
          try {
            await bridge.provider.request({
              method: 'wallet_addEthereumChain',
              params: [
                {
                  chainId: chainIdHex,
                  chainName: network.name,
                  nativeCurrency: {
                    name: network.symbol,
                    symbol: network.symbol,
                    decimals: network.decimals || 18
                  },
                  rpcUrls: [network.rpcUrl],
                  blockExplorerUrls: [network.explorerUrl || network.explorer]
                }
              ]
            })
            return true
          } catch (e) {
            if (e && e.code === 4001) {
              return false
            }
          }
        }
      }
    }
  }
})

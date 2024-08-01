import MATR1X from '@/assets/img/network/matr1x.jpg'
import TON from '@/assets/img/network/ton.svg'
import { NETWORK } from '../../env'

const getLayer1 = (network: string) => {
  switch (network) {
    case 'testnet':
      return {
          layer1: 'TON Testnet',
          name: 'TON Testnet',
          chainId: -1,
          symbol: 'TON',
          decimals: 9,
          rpc: '',
          bridgeContractAddress: 'EQApi2TaBLKseMi9ifC45cGG-zexU4_d4Y8KSnikZRq23f_I',
          rpcUrl: 'https://testnet.toncenter.com/api/v2/jsonRPC',
          jettonUrl: 'https://testnet.toncenter.com/api/v3/jetton/wallets',
          bridgeUrl: 'https://alpha-zkrollup-service.lumoz.org/ton-layer2',
          explorerUrl: 'https://testnet.tonviewer.com/',
          img: TON
        }
    case 'mainnet':
      return {
        
        }
    
  }
}


const getRollup = (network: string) => {
  switch (network) {
    case 'testnet':
      return {
        layer1: 'TON Testnet',
        name: 'TON Layer2',
        chainId: 66432,
        customizeGasName: 'TON',
        customizeGasSymbol: 'TON',
        customizeGasDecimals: 18,
        customizeGasAddress: '0x0000000000000000000000000000000000000000',
        img: TON,
        rpcUrl: 'https://alpha-zkrollup-rpc.lumoz.org/ton-layer2',
        explorerUrl: 'http://103.231.86.33:10572',
        isGasFree: false,
        nativeTokenName: "TON",
        nativeTokenSymbol: "TON",
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
          name: 'TON',
          symbol: 'TON',
          layer1Address: '0x0000000000000000000000000000000000000000',
          rollupAddress: '0x0000000000000000000000000000000000000000',
          rollupDecimals: 18,
          layer1Decimals: 9
        },
        {
          name: 'USDC',
          symbol: 'USDC',
          layer1Address: '0:4BAA6766156E14A8044C1651AFC2CA5B95A9100AC8C2BE5FAA448E4B63B6AEFF',
          rollupAddress: '0x2346b9587a0ac0b9df6b97802d303a4052645879',
          rollupDecimals: 18,
          layer1Decimals: 18
        }
      ]
    case 'mainnet':
      return []
  }
}

export const LAYER1 = getLayer1(NETWORK)
export const ROLLUP = getRollup(NETWORK)
export const TOKENS = getTokens(NETWORK)

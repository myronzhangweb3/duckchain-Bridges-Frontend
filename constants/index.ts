import { NETWORK } from '../env'

export const BASE_TOKEN_CONTRACT_URL = '0x0000000000000000000000000000000000000000'
export const BRIDGE_LIST_UPDATE_TIME = 10 * 1000

const getConfig = (network: string) => {
  switch (network) {
    case 'testnet':
      return {
        BRIDGE_SERVICE_API: 'https://alpha-zkrollup-service.lumoz.org/matr1x/transactions/'
      }
    case 'mainnet':
      return {
         BRIDGE_SERVICE_API: 'https://alpha-zkrollup-service.lumoz.org/matr1x/transactions/'
      }
  }
}

export const NODE_NETWORKS = []

export const CONFIG = getConfig(NETWORK)


import { NETWORK } from '../env'

export const BASE_TOKEN_CONTRACT_URL = '0x0000000000000000000000000000000000000000'
export const BRIDGE_LIST_UPDATE_TIME = 10 * 1000

const getConfig = (network: string) => {
  switch (network) {
    case 'testnet':
      return {}
    case 'mainnet':
      return {}
  }
}

export const NODE_NETWORKS = []

export const { } = getConfig(NETWORK)


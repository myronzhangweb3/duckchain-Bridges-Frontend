import request from './request.utils'
import { CONFIG } from '@/constants'
import { LAYER1 } from '~/constants/rollup-bridge/networks'
import axios from 'axios'

const getBridgeStatusUrl = (url: string) => {
  return `${CONFIG?.BRIDGE_SERVICE_API}${url}`
}

const getJettonUrl = (url: string) => {
  return `${LAYER1?.jettonUrl}${url}`
}

const getBridgeUrl = (url: string) => {
  return `${LAYER1?.bridgeUrl}/${url}`
}

export async function getBridgeStatus(tx: string) {
  try {
    return (await request.get(getBridgeStatusUrl(tx)))
  } catch {
    return []
  }
}

export async function getJettonWalletAddress(owner: string, jettonAddress: string) {
  try {
    const data = (await request.get(getJettonUrl(`?owner_address=${owner}&jetton_address=${jettonAddress}`)))
    const item = data.jetton_wallets.find(item => item.jetton === jettonAddress)
    for (let i in data.address_book) {
      if (i.toLowerCase() === owner.toLowerCase()) {
        item.user_friendly_address = data.address_book[i].user_friendly
        break
      }
    }
    return item
  } catch {
    return null
  }
}

export async function getBridgeRecords(address: string) {
  try {
    const { data } = await axios.get(getBridgeUrl(`deposit?sourceAddress=${address}`))
    return data.result
  } catch(e) {
    return []
  }
}

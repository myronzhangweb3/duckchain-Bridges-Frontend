import request from './request.utils'
import { CONFIG } from '@/constants'

const getBridgeStatusUrl = (url: string) => {
  return `${CONFIG?.BRIDGE_SERVICE_API}${url}`
}


export async function getBridgeStatus(tx: string) {
  try {
    return (await request.get(getBridgeStatusUrl(tx)))
  } catch {
    return []
  }
}


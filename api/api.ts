import request from './request.utils'

export async function getBridges(server: string, address: string): Promise<any> {
  try {
    return await request.get(`${server}/bridges/${address}?limit=10000&offset=0`)
  } catch {
    return {
      deposits: [],
      total_cnt: 0
    }
  }
}

// eslint-disable-next-line camelcase
export async function getMerkleProof(
  server: string,
  net_id: number,
  deposit_cnt: string
): Promise<any> {
  return await request.get(
    // eslint-disable-next-line camelcase
    `${server}/merkle-proof?net_id=${net_id}&deposit_cnt=${deposit_cnt}`
  )
}

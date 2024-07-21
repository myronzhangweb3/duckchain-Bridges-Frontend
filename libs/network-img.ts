import ETHEREUM from '@/assets/img/network/eth.svg'
import POLYGON from '@/assets/img/network/polygon.svg'
import POLYGONLIGHT from '@/assets/img/network/polygon-light.svg'

export const getNetworkImg = (name: string, light?: boolean) => {
  if (!name) {
    return ''
  }
  const _name = name.toLowerCase().trim().replace(/ +/g, '')
  if (includes(_name, ['ethereum', 'goerli'])) {
    return ETHEREUM
  }
  if (includes(_name, ['polygon', 'mumbai'])) {
    return light ? POLYGONLIGHT : POLYGON
  }
}

const includes = (name: string, area: string[]) => {
  for (const i in area) {
    if (name.includes(area[i])) {
      return true
    }
  }
  return false
}

/**
 * 本地存储信息
 * 数据会存储在本地
 */
import { SystemName } from '@utils/config'
/**
 * @prams LOGIN 用户主动存储的登录信息 | TOKEN 分发的签名
 */
export enum LocalKey {
  LOGIN = 'LOGIN',
  TOKEN = 'TOKEN',
  MENU = 'MENU',
}

export function weblocal() {
  const getLocalStorage = (keyName: LocalKey) => {
    return localStorage.getItem(`${SystemName}_${keyName}`)
  }
  const setLocalStorage = (keyName: LocalKey, value: string) => {
    localStorage.setItem(`${SystemName}_${keyName}`, value)
  }
  const removeLocalStorage = (keyName: LocalKey) => {
    return localStorage.removeItem(`${SystemName}_${keyName}`)
  }
  return { getLocalStorage, setLocalStorage, removeLocalStorage }
}

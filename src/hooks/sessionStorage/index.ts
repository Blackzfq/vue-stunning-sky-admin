/**
 * 会话存储信息
 * 数据会在页面会话结束时被清除
 */

import { SystemName } from '@utils/config'
/**
 * @prams USERINFO 用户信息
 */
export enum SessionKey {
  USERINFO = 'USERINFO',
}

export function websession() {
  const getSession = (keyName: SessionKey) => {
    return sessionStorage.getItem(`${SystemName}_${keyName}`)
  }
  const setSession = (keyName: SessionKey, value: string) => {
    sessionStorage.setItem(`${SystemName}_${keyName}`, value)
  }
  const removeSession = (keyName: SessionKey) => {
    return sessionStorage.removeItem(`${SystemName}_${keyName}`)
  }
  return { getSession, setSession, removeSession }
}

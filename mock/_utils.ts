// 成功的返回
export function resultSuccess<T>(data: T, { msg = 'success' } = {}) {
  return {
    code: 200,
    msg,
    data,
  }
}

// 失败的返回
export function resultError(msg = '请求失败') {
  return {
    code: 0,
    msg,
  }
}

export interface requestParams {
  method: string
  body: any
  headers?: { Authorization?: string }
  query: any
}
/**
 * @description 本函数用于从request数据中获取token，请根据项目的实际情况修改
 *
 */
export function getRequestToken({ headers }: requestParams): string | undefined {
  return headers?.Authorization?.split(' ')[1]
}

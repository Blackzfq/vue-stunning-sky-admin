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

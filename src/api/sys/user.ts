import Request from '@/utils/request'

const request = new Request({})

/**
 * @description 用户登录
 */
export function userLogin<T>(params: T) {
  return request.GET({
    url: '/basic-api/login',
    params,
  })
}

/**
 * @description 用户登出
 */
export function userLogOut() {
  return request.GET({
    url: '/basic-api/logout',
  })
}

/**
 * @description 用户详情
 */
export function userInfo() {
  return request.GET({
    url: '/basic-api/getUserInfo',
  })
}

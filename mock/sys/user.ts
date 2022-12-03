import { MockMethod } from 'vite-plugin-mock'
import { resultSuccess, resultError, requestParams, getRequestToken } from '../_utils'

function creatFakeUserList() {
  return [
    {
      userId: '1',
      username: 'admin@test.com',
      realName: 'TuSky Admin',
      avatar: 'https://q1.qlogo.cn/g?b=qq&nk=190848757&s=640',
      desc: 'manager',
      password: '123456',
      token: 'fakeToken1',
      homePath: '/dashboard/analysis',
      roles: [
        {
          roleName: 'Super Admin',
          value: 'super',
        },
      ],
    },
    {
      userId: '2',
      username: 'test@test.com',
      realName: 'Test User',
      avatar: 'https://q1.qlogo.cn/g?b=qq&nk=339449197&s=640',
      desc: 'tester',
      password: '123456',
      token: 'fakeToken2',
      homePath: '/dashboard/analysis',
      roles: [
        {
          roleName: 'Tester',
          value: 'test',
        },
      ],
    },
  ]
}
export default [
  {
    url: '/basic-api/login',
    method: 'get',
    response: ({ query }) => {
      const { username, password } = query
      const checkUser = creatFakeUserList().find(
        (userInfo) => userInfo.username === username && userInfo.password === password
      )
      if (!checkUser) return resultError('Please check the user information')
      const { userId, username: _username, realName, avatar, desc, token } = checkUser
      return resultSuccess({
        userId,
        username: _username,
        realName,
        avatar,
        desc,
        token,
      })
    },
  },
  {
    url: '/basic-api/getUserInfo',
    method: 'get',
    response: (request: requestParams) => {
      const token = getRequestToken(request)
      if (!token) return resultError('Invalid token')
      const checkUser = creatFakeUserList().find((userInfo) => userInfo.token === token)
      if (!checkUser) return resultError('The corresponding user information was not obtained!')
      return resultSuccess({ ...checkUser })
    },
  },
  {
    url: '/basic-api/logout',
    method: 'get',
    response: (request: requestParams) => {
      const token = getRequestToken(request)
      if (!token) return resultError('Invalid token')
      const checkUser = creatFakeUserList().find((userInfo) => userInfo.token === token)
      if (!checkUser) return resultError('Invalid token')
      return resultSuccess(undefined, { msg: 'Token has been destroyed' })
    },
  },
] as MockMethod[]

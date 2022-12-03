import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/layouts/PageLayout.vue'

/**
 * required
 * @params path 路径
 * @params sensitive 不匹配尾部斜线
 * @params name 路由名称
 * @params component 组件引用地址
 * @params meta 元信息
 *
 * optional
 * meta
 * {
 * @params title 页面标题
 * @params requiresAuth 是否需要鉴权
 * @params hidden 是否显示在用户权限菜单
 * @params transition 过渡效果
 * }
 */

const basisRouters: Array<RouteRecordRaw> = [
  {
    path: '/login',
    sensitive: true,
    name: 'login',
    component: () => import('../../views/login/LoginPage.vue'),
    meta: { title: '登录', requiresAuth: false, hidden: true, transition: 'fade' },
  },
  {
    path: '/permission',
    sensitive: true,
    name: 'permission',
    component: Layout,
    redirect: '/permission/role',
    children: [
      {
        path: 'role',
        sensitive: true,
        name: 'role',
        component: () => import('@/views/system/role/roleManage.vue'),
        meta: { title: '角色管理', requiresAuth: false, hidden: true, transition: 'fade' },
      },
    ],
  },
]

const rootRouter: RouteRecordRaw = {
  path: '/',
  sensitive: true,
  name: 'root',
  redirect: '/login',
  meta: { title: '', requiresAuth: false, hidden: true, transition: 'fade' },
}

const errorRouters: RouteRecordRaw = {
  path: '/:pathMatch(.*)',
  name: 'NotFound',
  component: () => import('../../views/notFound/NotFound.vue'),
  meta: { title: '页面丢失', requiresAuth: false, hidden: true, transition: 'fade' },
}

export { basisRouters, rootRouter, errorRouters }

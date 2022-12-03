import { reactive, computed, ref, unref } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/layouts/PageLayout.vue'
import auth from './auth'
import { weblocal, LocalKey } from '@/hooks/localStorage'
import router from '../index'
import { basisRouters, rootRouter, errorRouters } from './basis'

export enum Role {
  Admin,
  User,
}

interface Path {
  type: number
  id: number
  label: string
  icon: string
  name: string
  code: string
  parentId: number
  path: string
  url: string
  orderNum: number
  isHome?: number | string
  children?: Array<Path>
  [propName: string]: string | number | Array<Path> | void
}

const load = ref<boolean>(true)
const menu = reactive<Array<RouteRecordRaw>>([])
const { getLocalStorage } = weblocal()

export function settleRouters() {
  /**
   * 返回用户可操作的权限路由表
   */
  const autoRouters = computed(() => {
    return unref(menu)
  })

  /**
   * 是否已初始化
   */

  const isLoad = computed(() => {
    return unref(load)
  })

  /**
   * 生成路由表
   */
  const handleMenu = (list: Array<Path>, parentUrl = '') => {
    return list
      .sort((a, b) => {
        return a.orderNum - b.orderNum
      })
      .reduce((pre: Array<RouteRecordRaw>, cut: Path) => {
        if (cut.type !== 0 && cut.type !== 1) {
          return pre
        }
        const currentItem: any = {
          path: cut.path,
          name: cut.name,
          sensitive: true,
          component: cut.parentId ? auth[cut.name] || auth.notFind : Layout,
          meta: {
            title: cut.label,
            icon: cut.icon,
            requiresAuth: true,
            hidden: !cut.isHome,
          },
        }
        if (cut.children && cut.children.some((item) => (item.type === 0 || item.type === 1) && item.isHome === 1)) {
          currentItem.children = handleMenu(cut.children, cut.path)
          currentItem.redirect = parentUrl
            ? `${parentUrl}${cut.path}/${cut.children[0].path}`
            : `${cut.path}/${cut.children[0].path}`
        }
        return [...pre, currentItem]
      }, [])
  }

  /**
   * 权限菜单
   */
  const handleRouter = (list: Array<RouteRecordRaw>, url = '') => {
    return list.reduce((pre: Array<RouteRecordRaw>, cut: RouteRecordRaw) => {
      if (!cut.meta?.hidden) {
        const routerItem = url ? { ...cut, path: `${url}/${cut.path}` } : { ...cut }
        if (cut.children) {
          routerItem.children = handleRouter(cut.children, cut.path)
        }
        return [...pre, routerItem]
      }
      return pre
    }, [])
  }

  /**
   * 添加动态路由
   */
  const setRoute = (list: Array<RouteRecordRaw>) => {
    list.forEach((item) => {
      router.addRoute(item)
    })
    load.value = false
  }

  /**
   * 生成用户路由菜单
   */
  const createUserMenu = (list: Array<RouteRecordRaw>) => {
    menu.length = 0
    handleRouter([...list, ...basisRouters]).forEach((item) => menu.push(item))
  }

  /**
   * 设置路由表
   */
  const setAutoRoute = (list: Array<Path>) => {
    const pathMenu: Array<Path> = list.filter((item) => (item.type === 0 || item.type === 1) && item.parentId === 0)
    const routers: Array<RouteRecordRaw> = handleMenu(pathMenu)
    setRoute(routers)
    createUserMenu(routers)
  }

  /**
   * 读取本地存储路由表
   */
  const getLocalRouter = () => {
    if (load.value) {
      const meunList = JSON.parse(getLocalStorage(LocalKey.MENU) ?? '[]')
      setAutoRoute(meunList)
      router.addRoute(errorRouters)
      router.addRoute({
        ...rootRouter,
        redirect:
          getLocalStorage(LocalKey.TOKEN) && router.getRoutes().length > 2 ? router.getRoutes()[1].path : '/login',
      } as RouteRecordRaw)
    }
  }

  /**
   * 读取用户路由
   */

  return { autoRouters, isLoad, setAutoRoute, handleRouter, getLocalRouter }
}

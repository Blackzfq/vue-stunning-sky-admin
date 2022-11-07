import { createVNode, render } from 'vue'
import { Router } from 'vue-router'
import LoadingBar from '@components/LoadingBar.vue'
import { settleRouters } from '@router/routers/authority'
import { weblocal, LocalKey } from '@/hooks/localStorage'

const { getLocalStorage } = weblocal()
const { getLocalRouter, isLoad } = settleRouters()

const Vnode = createVNode(LoadingBar)
render(Vnode, document.body)

export default function setupRouterGuard(router: Router) {
  router.beforeEach((to, from, next) => {
    Vnode.component?.exposed?.startLoading()
    if (isLoad) getLocalRouter()
    if (to.meta.requiresAuth && !getLocalStorage(LocalKey.TOKEN)) {
      next('/login')
    } else if (typeof to.meta.requiresAuth === 'undefined') {
      next(to.path)
    } else {
      next()
    }
  })

  // 导航执行后执行
  router.afterEach((to, from) => {
    Vnode.component?.exposed?.endLoading()
    // console.log('执行后', to, from)
  })
}

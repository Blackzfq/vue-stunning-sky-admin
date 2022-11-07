import { createRouter, createWebHistory } from 'vue-router'
import { basisRouters } from './routers/basis'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: basisRouters,
})

export default router

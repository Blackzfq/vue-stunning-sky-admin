import type { RouteComponent } from 'vue-router'

interface component {
  [propName: string]: RouteComponent
}

const autoComponent: component = {
  site: () => import('../../views/notFound/NotFound.vue'),
  manage: () => import('../../views/notFound/NotFound.vue'),
}

export default autoComponent

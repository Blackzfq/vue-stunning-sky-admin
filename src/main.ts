import { createApp } from 'vue'
import { createPinia } from 'pinia'

// 引入Tailwind样式文件
import './design/Tailwind/index.less'

// 引入全局样式文件
import './design/index.less'

// 引入antdesign样式
import './design/antdesign/custom-default.css'
import './design/antdesign/custom-dark.css'

// 引入antIcons
import * as AntDesignIconsVue from '@ant-design/icons-vue'

// 引入iconfont
import SvgIcon from './components/IconComponent.vue'
import './design/iconfont'

// 引入路由
import router from './router'
import setupRouterGuard from './router/routers/guards'

import App from './App.vue'

// 路由守卫
setupRouterGuard(router)

const app = createApp(App)

// 注册图标组件
const antIconsList: any = AntDesignIconsVue
Object.keys(antIconsList).forEach((key) => {
  app.component(key, antIconsList[key])
})

// 注册pinia
app.use(createPinia())

// 注册路由
app.use(router)

// 注册自定义iconfont组件
app.component('SvgIcon', SvgIcon)

app.mount('#app')

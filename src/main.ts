import { createApp } from 'vue'
import { createPinia } from 'pinia'

// 引入Tailwind样式文件
import './design/Tailwind/index.less'

// 引入全局样式文件
import './design/index.less'

// 引入elementPlus样式
import 'element-plus/dist/index.css'

// 引入eleIcons
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 引入iconfont
import SvgIcon from './components/IconComponent.vue'
import './design/iconfont'

// 引入iconfont

import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

// 注册图标组件
const antIconsList: any = ElementPlusIconsVue
Object.keys(antIconsList).forEach((key) => {
  app.component(key, antIconsList[key])
})

app.component('SvgIcon', SvgIcon)

app.mount('#app')

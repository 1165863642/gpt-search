import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import i18n from './i18n'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 下载Element Plus包
// npm install element - plus--save
// 安装自动导入ElementPlus的两款插件
// npm install - D unplugin - vue - components unplugin - auto -import
// 使用上面自动导入，替换现有
// import ElementPlus from 'element-plus'
// import 'element-plus/theme-chalk/index.css'

import './assets/main.css'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(createPinia())
app.use(router)
app.use(i18n)
// app.use(ElementPlus)
app.mount('#app')

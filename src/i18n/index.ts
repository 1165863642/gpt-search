// ./src/i18n/index.ts
import { createI18n } from 'vue-i18n'

// 自定义的语言配置
import zh from './lang/zh-cn'
import en from './lang/en'

// 定义语言国际化内容 zh-cn en
const messages = {
  zh,
  en
}

const language = (navigator.language || 'en').toLocaleLowerCase() // 这是获取浏览器的语言
// 判断是否是Android
// console.log(/Mobi|Android|iPhone/i.test(navigator.userAgent))
// alert(/Mobi|Android|iPhone/i.test(navigator.userAgent))
const i18n = createI18n({
  locale: localStorage.getItem('lang') || language.split('-')[0] || 'en', // 首先从缓存里拿，没有的话就用浏览器语言，
  fallbackLocale: 'en', // 设置备用语言
  legacy: false,
  messages
})

export default i18n

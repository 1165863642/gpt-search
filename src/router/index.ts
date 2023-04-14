import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

let routerPc = [
  {
    path: '/',
    name: 'home',
    redirect: '/index'
    // component: HomeView
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/pc/search/Index.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/pc/search/SearchContent.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  }
]
let routerM = [
  {
    path: '/',
    name: 'home',
    redirect: '/index'
    // component: HomeView
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/mobile/search/Index.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/mobile/search/SearchContent.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  }
]

let routes = []

let Adaptive = /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
if (navigator.userAgent.match(Adaptive)) {
  routes = routerM
} else {
  routes = routerPc
}


const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router

import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/index'
      // component: HomeView
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('../views/search/Index.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/search/SearchContent.vue')
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
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/callback/:id',
    name: 'Callback',
    component: () => import('@/views/Callback.vue')
  },
  {
    path: '/calculation/:id',
    name: 'Calculation',
    component: () => import('@/views/Calculation.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthLogin from '../views/auth/AuthLogin.vue'
import AuthRegister from '../views/auth/AuthRegister.vue'
import AppHome from '../views/home/AppHome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'AuthLogin',
    component: AuthLogin
  },
  {
    path: '/register',
    name: 'AuthRegister',
    component: AuthRegister
  },
  {
    path: '/home',
    name: 'AppHome',
    component: AppHome
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

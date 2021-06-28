import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login'
import Register from '@/views/Register'
import NavBar from '@/components/NavBar'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/sign-up',
    name: 'register',
    component: Register
  },
  {
    path: '/',
    name: 'navbar',
    component: NavBar
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

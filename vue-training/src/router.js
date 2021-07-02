import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import('@/views/Login')
const Register = () => import('@/views/Register')
const Books = () => import('@/views/Books')
const BookDetail = () => import('@/views/BookDetail')

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
    name: 'books',
    component: Books
  },
  {
    path: '/books/:id',
    name: 'bookDetail',
    component: BookDetail,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

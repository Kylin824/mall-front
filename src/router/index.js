import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from "nprogress";
import MallLogin from '@/views/login/index'
import MallHome from '@/views/home/index'

Vue.use(VueRouter)

//创建并暴露一个路由器
const routes = [
  {
    path: '/login',
    name: 'login',
    component: MallLogin
  },
  {
    path: '/home',
    name: 'home',
    component: MallHome
  }
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router

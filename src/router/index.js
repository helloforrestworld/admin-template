import Vue from 'vue'
import Router from 'vue-router'

import BasicLayout from '@/layout/BasicLayout'

export let routeModuleMap = {}
const context = require.context('./modules', false, /\.js$/)
context.keys().forEach(path => {
  const key = path.replace(/\.\/(.*)\.js/, '$1')
  routeModuleMap[key] = context(path).default
})
console.log('routeModuleMap: ', routeModuleMap)

Vue.use(Router)

export const constantRoutes = [
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/basic',
    component: BasicLayout,
    redirect: '/basic/index',
    children: [
      {
        path: '/basic/index',
        component: () => import('@/views/basic/index')
      }
    ]
  },
  {
    path: '/',
    redirect: '/home'
  }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router

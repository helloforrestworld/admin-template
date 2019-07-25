import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/layout/index.vue'

import nestedRouter from './modules/nested'

Vue.use(Router)

export const constantRoutes = []
export const asyncRoutes = [
  {
    path: '/',
    component: layout,
    redirect: '/home1',
    meta: {
      title: '导航一',
      icon: 'email'
    },
    children: [
      {
        path: 'home1',
        name: 'Home',
        component: () => import('@/views/Home/index'),
        meta: {
          title: 'HOME1',
          icon: 'email'
        }
      },
      {
        path: 'home2',
        name: 'Home',
        component: () => import('@/views/Home/index'),
        meta: {
          title: 'HOME2',
          icon: 'email'
        }
      }
    ]
  },

  {
    path: '/about',
    component: layout,
    redirect: '/about/index',
    children: [
      {
        path: 'index',
        name: 'About',
        component: () => import('@/views/About/index'),
        meta: {
          title: 'ABOUT',
          icon: 'excel'
        }
      }
    ]
  },

  {
    path: '/about1',
    component: layout,
    redirect: '/about1/index',
    alwaysShowRoot: true,
    meta: {
      title: 'AlwaysShow',
      icon: 'excel'
    },
    children: [
      {
        path: 'index',
        name: 'About',
        component: () => import('@/views/About/index'),
        meta: {
          title: 'ABOUT',
          icon: 'excel'
        }
      }
    ]
  },

  nestedRouter
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes.concat(asyncRoutes)
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router

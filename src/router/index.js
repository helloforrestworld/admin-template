import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout/index.vue'

import nestedRouter from './modules/nested'
import NProgress from 'nprogress'

Vue.use(Router)

export const constantRoutes = [
  {
    path: '/404',
    component: () => import('@/views/ErrorPage/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/ErrorPage/401'),
    hidden: true
  }
]
export const asyncRoutes = [
  {
    path: '/',
    component: Layout,
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
    component: Layout,
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
    component: Layout,
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

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://www.baidu.com',
        meta: { 'title': '外链', 'icon': 'link' }
      }
    ]
  },

  {
    path: '/error',
    component: Layout,
    name: 'ErrorPages',
    meta: {
      title: 'Error Pages',
      icon: '404'
    },
    children: [
      {
        path: '401',
        component: () => import('@/views/ErrorPage/401'),
        name: 'Page401',
        meta: {
          title: '401'
        }
      },
      {
        path: '404',
        component: () => import('@/views/ErrorPage/404'),
        name: 'Page404',
        meta: {
          title: '404'
        }
      }
    ]
  },

  nestedRouter,

  { path: '*', redirect: '/404', hidden: true }
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

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router

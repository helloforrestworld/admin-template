import router from './router'
import store from './store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getPageTitle } from '@/helpers/utils'
import { getToken } from '@/helpers/auth'

NProgress.configure({ showSpinner: true })

const whiteList = ['/login', '/404', '/401']

router.beforeEach(async(to, from, next) => {
  NProgress.start()

  document.title = getPageTitle(to.meta.title)

  const hasToken = getToken()

  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      if (store.getters.roles.length === 0) {
        const { roles } = await store.dispatch('user/getInfo')

        const accessRoutes = await store.dispatch('permission/generateRoutes', roles)

        Object.keys(accessRoutes).forEach(key => {
          console.log('accessRoutes[key]: ', accessRoutes[key])
          router.addRoutes(accessRoutes[key])
        })

        router.addRoutes([{ path: '*', redirect: '/404', hidden: true }])

        next({ ...to, replace: true })
      } else {
        next()
      }
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})

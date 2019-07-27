import router from './router'
import store from './store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getPageTitle } from '@/helpers/utils'

NProgress.configure({ showSpinner: true })

router.beforeEach(async(to, from, next) => {
  NProgress.start()

  document.title = getPageTitle(to.meta.title)

  if (store.getters.roles.length === 0) {
    const { roles } = await store.dispatch('user/getInfo')

    const accessRoutes = await store.dispatch('permission/generateRoutes', roles)

    router.addRoutes(accessRoutes)

    next({ ...to, replace: true })
  } else {
    next()
  }
})

router.afterEach(() => {
  NProgress.done()
})

import { routeModuleMap } from '@/router'

const state = {
  permissionRoutes: {}
}

const mutations = {
  SET_ROUTES: (state, accessedRoutes) => {
    state.permissionRoutes = accessedRoutes
  }
}

const actions = {
  generateRoutes({ commit }, roles) {
    return new Promise(resolve => {
      let accessedRoutes = {}

      Object.keys(routeModuleMap).forEach(moduleKey => {
        let routes = routeModuleMap[moduleKey]

        if (roles.includes('admin')) {
          accessedRoutes[moduleKey] = routes || []
        } else {
          accessedRoutes[moduleKey] = filterAsyncRoutes(routes, roles)
        }
      })

      commit('SET_ROUTES', accessedRoutes)

      resolve(accessedRoutes)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

// 根据权限筛选路由
export function filterAsyncRoutes(routes, roles) {
  const res = []

  routes.forEach(route => {
    const routeTemplate = { ...route }
    if (hasPermission(roles, routeTemplate)) {
      if (routeTemplate.children) {
        routeTemplate.children = filterAsyncRoutes(routeTemplate.children, roles)
      }
      res.push(routeTemplate)
    }
  })

  return res
}

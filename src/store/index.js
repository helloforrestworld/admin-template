import Vue from 'vue'
import Vuex from 'vuex'
import { asyncRoutes } from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  getters: {
    asyncRoutes() {
      return asyncRoutes
    }
  },
  actions: {

  }
})

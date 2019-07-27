const state = {
  roles: []
}

const mutations = {
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
  getInfo({ commit }) {
    return new Promise((resolve) => {
      const roles = ['editor']
      commit('SET_ROLES', roles)
      resolve({ roles })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userProfile: null,
    loading: false
  },
  mutations: {
    setUserProfile (state, payload) {
      state.userProfile = payload
    },
    
    setLoading (state, payload) {
      state.loading = payload
    }
  },
  actions: {
    updateUserProfile ({ commit }, payload) {
      return new Promise(resolve => {
        commit('setUserProfile', payload)
        resolve()
      })
    }
  }
})

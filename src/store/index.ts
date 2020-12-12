import { createStore } from 'vuex'

export default createStore({
  state: {
    test:'',
    router: ''
  },
  getters: {
    getC(state) {
      return state.test
    }
  },
  mutations: {
    setC(state, test) {
      state.test = test;
    },
    setR(state, router) {
      state.router = router;
    },
  },
  actions: {
    setTest({commit},name){
      commit('setC',name)
    },
    setrouTer({commit},router) {
      commit('setR',router)
    }
  },
  modules: {
  }
})

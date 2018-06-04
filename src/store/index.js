import Vue from 'vue'
import Vuex from 'vuex'

// import modules start
import pairs from './modules/pairs'
// import models end

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    pairs
  },
  state: {
  },
  mutations: {
  },
  actions: {
  }
})

export default store

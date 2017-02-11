import Vue from 'vue'
import Vuex from 'vuex'
import invoice from './modules/invoice'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    invoice
  },
  plugins: [createPersistedState()]
})

import Vue from 'vue'
import Vuex from 'vuex'
import invoice from './modules/invoice'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    invoice
  }
})

import Vue from 'vue'
import Vuex from 'vuex'
// import invoicesList from './modules/invoices'
import invoiceTemplate from './modules/invoiceTemplate'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    // invoicesList,
    invoiceTemplate
  },
  plugins: [createPersistedState()]
})

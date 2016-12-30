import Vue from 'vue'
import Vuex from 'vuex'
import invoices from './modules/invoices'
import invoiceTemplate from './modules/invoiceTemplate'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    invoices,
    invoiceTemplate
  }
})

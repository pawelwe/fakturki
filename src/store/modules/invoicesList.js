import invoicesList from '../../data/invoicesList'

const state = {
  invoicesList: invoicesList
}

const mutations = {
  'LOAD_INVOICES' (state) {
    state.activeTemplate = JSON.parse(JSON.stringify(state.savedTemplate))
  },
  'SAVE_INVOICE' (state) {
    state.savedTemplate = JSON.parse(JSON.stringify(state.activeTemplate))
  }
}

// ASYNC
const actions = {
  // loadInvoiceTemplate: ({commit}) => {
  //   commit('LOAD_INVOICE_TEMPLATE')
  // },
  // saveInvoiceTemplate: ({commit}) => {
  //   commit('SAVE_INVOICE_TEMPLATE')
  // }
  // asyncLoadTemplate: ({commit}) => {
  //   setTimeout(() => {
  //     commit('LOAD_INVOICE_TEMPLATE', invoiceTemplate)
  //   }, 1000)
  // }
}

// const getters = {
//   getInvoicesList: state => {
//     return state.invoicesList
//   }
// }

export default {
  state,
  mutations,
  actions
  // getters
}

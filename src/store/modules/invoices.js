import invoices from '../../data/invoices'

const state = {
  invoices: []
}

const mutations = {
  'SET_INVOICES' (state, invoice) {
    state.invoices = invoice
  }
}

const actions = {
  initInvoices: ({commit}) => {
    commit('SET_INVOICES', invoices)
  }
}

const getters = {
  invoices: state => {
    return state.invoices
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}

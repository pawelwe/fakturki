import invoiceTemplate from '../../data/invoiceTemplate'
import invoicesList from '../../data/invoicesList'

const state = {
  activeInvoice: JSON.parse(JSON.stringify(invoiceTemplate)),
  savedTemplate: JSON.parse(JSON.stringify(invoiceTemplate)),
  invoicesList: invoicesList
}

const mutations = {
  'LOAD_INVOICE_TEMPLATE' (state) {
    state.activeInvoice = JSON.parse(JSON.stringify(state.savedTemplate))
  },
  'SAVE_INVOICE_TEMPLATE' (state) {
    state.savedTemplate = JSON.parse(JSON.stringify(state.activeInvoice))
  },
  'LOAD_INVOICE' (state, index) {
    state.activeInvoice = JSON.parse(JSON.stringify(state.invoicesList[index]))
  },
  'SAVE_INVOICE' (state, id) {
    let activeInvoice = JSON.parse(JSON.stringify(state.activeInvoice))
    if (!id && id !== 0) {
      activeInvoice.creationDate = new Date()
      activeInvoice.id = parseInt(state.invoicesList.length + 1)
      state.invoicesList.push(activeInvoice)
    } else {
      activeInvoice.modyficationDate = new Date()
      state.invoicesList[parseInt(id)] = activeInvoice
    }
  },
  'DELETE_INVOICE' (state, id) {
    if (id != null) {
      state.invoicesList.splice(id, 1)
    }
  }
}

// ASYNC
const actions = {
  loadInvoiceTemplate: ({commit}) => {
    commit('LOAD_INVOICE_TEMPLATE')
  },
  saveInvoiceTemplate: ({commit}) => {
    commit('SAVE_INVOICE_TEMPLATE')
  },
  loadInvoice: ({commit}, id) => {
    commit('LOAD_INVOICE', id)
  },
  saveInvoice: ({commit}, id) => {
    commit('SAVE_INVOICE', id)
  },
  deleteInvoice: ({commit}, id) => {
    commit('DELETE_INVOICE', id)
  }
}

const getters = {
  activeInvoice: state => {
    return state.activeInvoice
  },
  servicesLength: state => {
    return state.activeInvoice.services.length
  },
  nettoValue: state => {
    let fullNettoValue = 0
    for (let i = 0; i < state.activeInvoice.services.length; i++) {
      fullNettoValue += state.activeInvoice.services[i].priceNetto * state.activeInvoice.services[i].amount
    }
    return !isNaN(fullNettoValue) ? parseFloat(fullNettoValue).toFixed(2) : 0
  },
  vatValue: state => {
    let fullVatValue = 0
    for (let i = 0; i < state.activeInvoice.services.length; i++) {
      fullVatValue += (state.activeInvoice.services[i].priceNetto / 100) * state.activeInvoice.services[i].vat.replace(/%/g, '')
    }
    return !isNaN(fullVatValue) ? parseFloat(fullVatValue).toFixed(2) : 0
  },
  bruttoValue: (state, getters) => {
    return (parseFloat(getters.nettoValue) + parseFloat(getters.vatValue)).toFixed(2)
  },
  invoicesList: state => {
    return state.invoicesList
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}

import invoiceTemplate from '../../data/invoiceTemplate'
import invoicesList from '../../data/invoicesList'

const state = {
  activeTemplate: JSON.parse(JSON.stringify(invoiceTemplate)),
  savedTemplate: JSON.parse(JSON.stringify(invoiceTemplate)),
  invoicesList: invoicesList
}

const mutations = {
  'LOAD_INVOICE_TEMPLATE' (state) {
    state.activeTemplate = JSON.parse(JSON.stringify(state.savedTemplate))
  },
  'SAVE_INVOICE_TEMPLATE' (state) {
    state.savedTemplate = JSON.parse(JSON.stringify(state.activeTemplate))
  },
  'LOAD_INVOICE' (state, index) {
    state.activeTemplate = JSON.parse(JSON.stringify(state.invoicesList[index]))
  },
  'DEL_INVOICE' (state, id) {
    if (id != null) {
      state.invoicesList.splice(id, 1)
    }
  },
  'SAVE_INVOICE' (state, id) {
    let savedTemplate = JSON.parse(JSON.stringify(state.activeTemplate))
    if (id != null) {
      id = parseInt(id)
      state.invoicesList[id] = savedTemplate
    } else {
      state.invoicesList.push(savedTemplate)
    }
  }
}

// ASYNC
const actions = {
  loadInvoice: ({commit, index}) => {
    commit('LOAD_INVOICE')
  },
  saveInvoice: ({commit}) => {
    commit('SAVE_INVOICE')
  },
  loadInvoiceTemplate: ({commit}) => {
    commit('LOAD_INVOICE_TEMPLATE')
  },
  saveInvoiceTemplate: ({commit}) => {
    commit('SAVE_INVOICE_TEMPLATE')
  },
  asyncLoadTemplate: ({commit}) => {
    setTimeout(() => {
      commit('LOAD_INVOICE_TEMPLATE', invoiceTemplate)
    }, 1000)
  }
}

const getters = {
  getActiveTemplate: state => {
    return state.activeTemplate
  },
  servicesLength: state => {
    return state.activeTemplate.services.length
  },
  nettoValue: state => {
    let fullNettoValue = 0
    for (let i = 0; i < state.activeTemplate.services.length; i++) {
      fullNettoValue += state.activeTemplate.services[i].priceNetto * state.activeTemplate.services[i].ammount
    }
    return parseFloat(fullNettoValue).toFixed(2)
  },
  vatValue: state => {
    let fullVatValue = 0
    for (let i = 0; i < state.activeTemplate.services.length; i++) {
      fullVatValue += state.activeTemplate.services[i].priceNetto * (0 + '.' + state.activeTemplate.services[i].vat.replace(/%/g, ''))
    }
    return parseFloat(fullVatValue).toFixed(2)
  },
  bruttoValue: (state, getters) => {
    return (parseFloat(getters.nettoValue) + parseFloat(getters.vatValue)).toFixed(2)
  },
  getInvoicesList: state => {
    return state.invoicesList
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}

const state = {
  activeInvoice: null,
  savedTemplate: null,
  invoicesList: [],
  fireBaseUrl: '',
  fireBaseVerified: false
}

const mutations = {
  'SET_INVOICES_LIST' (state, fetchedInvoicesList) {
    state.invoicesList = fetchedInvoicesList
  },
  'SET_INVOICE_TEMPLATE' (state, fetchedInvoiceTemplate) {
    state.activeInvoice = fetchedInvoiceTemplate
  },
  'RESET_INVOICE_TEMPLATE' (state) {
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
  },
  'ADD_INVOICE_ROW' (state, {id, name, amount, priceNetto, vat}) {
    state.activeInvoice.services.push({
      id,
      name,
      amount,
      priceNetto,
      vat
    }
    )
  },
  'REMOVE_INVOICE_ROW' (state, index) {
    state.activeInvoice.services.splice(index, 1)
  },
  'CHECK_FIRABASE_CONNECTION' (state, check) {
    state.fireBaseVerified = check
  },
  'SET_FIRABASE_URL' (state, url) {
    state.fireBaseUrl = url
  }
}

// ASYNC
const actions = {
  setInvoicesList: ({commit}, fetchedInvoicesList) => {
    commit('SET_INVOICES_LIST', fetchedInvoicesList)
  },
  setInvoiceTemplate: ({commit}, fetchedInvoiceTemplate) => {
    commit('SET_INVOICE_TEMPLATE', fetchedInvoiceTemplate)
  },
  saveInvoiceTemplate: ({commit}) => {
    commit('SAVE_INVOICE_TEMPLATE')
  },
  resetInvoiceTemplate: ({commit}) => {
    commit('RESET_INVOICE_TEMPLATE')
  },
  loadInvoice: ({commit}, id) => {
    commit('LOAD_INVOICE', id)
  },
  saveInvoice: ({commit}, id) => {
    commit('SAVE_INVOICE', id)
  },
  deleteInvoice: ({commit}, id) => {
    commit('DELETE_INVOICE', id)
  },
  addInvoiceRow: ({commit}, row) => {
    commit('ADD_INVOICE_ROW', row)
  },
  removeInvoiceRow: ({commit}, row) => {
    commit('REMOVE_INVOICE_ROW', row)
  },
  checkFirebaseConnection: ({commit}, check) => {
    commit('CHECK_FIRABASE_CONNECTION', check)
  },
  setFirebaseUrl: ({commit}, url) => {
    commit('SET_FIRABASE_URL', url)
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
    let servicesList = state.activeInvoice.services
    for (var i = 0; i < servicesList.length; i++) {
      fullNettoValue += servicesList[i].priceNetto * servicesList[i].amount
    }
    return !isNaN(fullNettoValue) ? parseFloat(fullNettoValue).toFixed(2) : 0
  },
  vatValue: state => {
    let fullVatValue = 0
    let servicesList = state.activeInvoice.services
    for (var i = 0; i < servicesList.length; i++) {
      fullVatValue += ((servicesList[i].priceNetto / 100) * servicesList[i].vat.replace(/%/g, ''))
    }
    return !isNaN(fullVatValue) ? parseFloat(fullVatValue).toFixed(2) : 0
  },
  bruttoValue: (state, getters) => {
    return (parseFloat(getters.nettoValue) + parseFloat(getters.vatValue)).toFixed(2)
  },
  invoicesList: state => {
    return state.invoicesList
  },
  fireBaseVerified: state => {
    return state.fireBaseVerified
  },
  fireBaseUrl: state => {
    return state.fireBaseUrl
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}

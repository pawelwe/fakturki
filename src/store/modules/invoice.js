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
  'SET_ACTIVE_INVOICE' (state, activeInvoice) {
    state.activeInvoice = activeInvoice
  },
  'SET_INVOICE_TEMPLATE' (state, fetchedInvoiceTemplate) {
    state.savedTemplate = Object.assign({}, fetchedInvoiceTemplate)
  },
  'RESET_INVOICE_TEMPLATE' (state) {
    state.activeInvoice = Object.assign({}, state.savedTemplate)
  },
  'SAVE_INVOICE_TEMPLATE' (state) {
    state.savedTemplate = Object.assign({}, state.activeInvoice)
  },
  'LOAD_INVOICE' (state, index) {
    state.activeInvoice = Object.assign({}, state.invoicesList[index])
  },
  'SAVE_INVOICE' (state, id) {
    let activeInvoice = Object.assign({}, state.activeInvoice)
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
  setActiveInvoice: ({commit}, activeInvoice) => {
    commit('SET_ACTIVE_INVOICE', activeInvoice)
  },
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
  savedTemplate: state => {
    return state.savedTemplate
  },
  activeInvoice: state => {
    return state.activeInvoice
  },
  invoicesList: state => {
    return state.invoicesList
  },
  servicesLength: state => {
    return state.activeInvoice.services.length
  },
  nettoValue: state => {
    let servicesList = state.activeInvoice.services || []
    var totalNettoValue = servicesList.reduce((totalNettoValue, service) => {
      let serviceTotalAmount = service.priceNetto * service.amount
      return totalNettoValue + serviceTotalAmount
    }, 0)
    return !isNaN(totalNettoValue) ? parseFloat(totalNettoValue).toFixed(2) : 0
  },
  vatValue: state => {
    let servicesList = state.activeInvoice.services || []
    var totalVatValue = servicesList.reduce((totalVatValue, service) => {
      let serviceTotalAmount = ((service.priceNetto / 100) * service.vat.replace(/%/g, '')) * service.amount
      return totalVatValue + serviceTotalAmount
    }, 0)
    return !isNaN(totalVatValue) ? parseFloat(totalVatValue).toFixed(2) : 0
  },
  bruttoValue: (state, getters) => {
    return (parseFloat(getters.nettoValue) + parseFloat(getters.vatValue)).toFixed(2)
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

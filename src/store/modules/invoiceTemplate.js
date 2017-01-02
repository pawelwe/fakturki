import invoiceTemplate from '../../data/invoiceTemplate'

const state = {
  activeTemplate: invoiceTemplate,
  savedTemplate: invoiceTemplate
}

const mutations = {
  'LOAD_INVOICE_TEMPLATE' (state) {
    state.activeTemplate = JSON.parse(JSON.stringify(state.savedTemplate))
  },
  'SAVE_INVOICE_TEMPLATE' (state) {
    state.savedTemplate = JSON.parse(JSON.stringify(state.activeTemplate))
  },
  'ADD_INVOICE_ROW' (state, {id, name, ammount, priceNetto, vat}) {
    state.activeTemplate.services.push({
      id,
      name,
      ammount,
      priceNetto,
      vat
    })
  },
  'REMOVE_INVOICE_ROW' (state, index) {
    state.activeTemplate.services.splice(index, 1)
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
  addInvoiceRow: ({commit}, row) => {
    commit('ADD_INVOICE_ROW', row)
  },
  removeInvoiceRow: ({commit}, index) => {
    commit('REMOVE_INVOICE_ROW', index)
  },
  asyncLoadTemplate: ({commit}) => {
    setTimeout(() => {
      commit('LOAD_INVOICE_TEMPLATE', invoiceTemplate)
    }, 1000)
  }
}

const getters = {
  getTemplate: state => {
    return state.activeTemplate
  },
  servicesLength: state => {
    return state.activeTemplate.services.length
  },
  templateServicesLength: state => {
    return state.savedTemplate.services.length
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
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}

// import invoiceTemplate from '../../data/invoiceTemplate'
//
// const state = {
//   activeTemplate: invoiceTemplate,
//   savedTemplate: invoiceTemplate
// }
//
// const mutations = {
//   'LOAD_INVOICE_TEMPLATE' (state) {
//     state.activeTemplate = JSON.parse(JSON.stringify(state.savedTemplate))
//   },
//   'SAVE_INVOICE_TEMPLATE' (state) {
//     state.savedTemplate = JSON.parse(JSON.stringify(state.activeTemplate))
//   },
//   'ADD_INVOICE_ROW' (state, {id, name, ammount, priceNetto, vat}) {
//     state.activeTemplate.services.push({
//       id,
//       name,
//       ammount,
//       priceNetto,
//       vat
//     }
//     )
//   },
//   'REMOVE_INVOICE_ROW' (state, index) {
//     state.activeTemplate.services.splice(index, 1)
//   }
// }
//
// // ASYNC
// const actions = {
//   loadInvoiceTemplate: ({commit}) => {
//     commit('LOAD_INVOICE_TEMPLATE')
//   },
//   saveInvoiceTemplate: ({commit}) => {
//     commit('SAVE_INVOICE_TEMPLATE')
//   },
//   addInvoiceRow: ({commit}, row) => {
//     commit('ADD_INVOICE_ROW', row)
//   },
//   removeInvoiceRow: ({commit}, index) => {
//     commit('REMOVE_INVOICE_ROW', index)
//   },
//   asyncLoadTemplate: ({commit}) => {
//     setTimeout(() => {
//       commit('LOAD_INVOICE_TEMPLATE', invoiceTemplate)
//     }, 1000)
//   }
// }
//
// const getters = {
//   getTemplate: state => {
//     return state.activeTemplate
//   },
//   servicesLength: state => {
//     return state.activeTemplate.services.length
//   },
//   templateServicesLength: state => {
//     return state.savedTemplate.services.length
//   },
//   nettoValue: state => {
//     let fullNettoValue = 0
//     for (let i = 0; i < state.activeTemplate.services.length; i++) {
//       fullNettoValue += state.activeTemplate.services[i].priceNetto * state.activeTemplate.services[i].ammount
//     }
//     return parseFloat(fullNettoValue).toFixed(2)
//   },
//   vatValue: state => {
//     let fullVatValue = 0
//     for (let i = 0; i < state.activeTemplate.services.length; i++) {
//       fullVatValue += state.activeTemplate.services[i].priceNetto * (0 + '.' + state.activeTemplate.services[i].vat.replace(/%/g, ''))
//     }
//     return parseFloat(fullVatValue).toFixed(2)
//   },
//   bruttoValue: (state, getters) => {
//     return (parseFloat(getters.nettoValue) + parseFloat(getters.vatValue)).toFixed(2)
//   }
// }
//
// export default {
//   state,
//   mutations,
//   actions,
//   getters
// }

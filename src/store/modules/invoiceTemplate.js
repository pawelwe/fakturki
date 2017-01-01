import invoiceTemplate from '../../data/invoiceTemplate'

const state = {
  template: invoiceTemplate
}

const mutations = {
  'LOAD_TEMPLATE' (state, template) {
    state.template = template
  },
  'SAVE_TEMPLATE' (state, newTemplate) {
    state.template = newTemplate
  },
  'ADD_ROW' (state, {id, name, ammount, priceNetto, vat}) {
    state.template.services.push({
      id,
      name,
      ammount,
      priceNetto,
      vat
    }
    )
  },
  'REMOVE_ROW' (state, index) {
    state.template.services.splice(index, 1)
  }
}

// const actions = {
//   loadTemplate: ({commit}) => {
//     commit('LOAD_TEMPLATE', invoiceTemplate)
//   },
//   saveTemplate: ({commit}) => {
//     commit('SAVE_TEMPLATE', invoiceTemplate)
//   },
//   addRow: ({commit}) => {
//     commit('ADD_ROW', invoiceTemplate)
//   }
// }

const getters = {
  getTemplate: state => {
    return state.template
  },
  servicesLength: state => {
    return state.template.services.length
  },
  nettoValue: state => {
    let fullNettoValue = 0
    for (let i = 0; i < state.template.services.length; i++) {
      fullNettoValue += state.template.services[i].priceNetto * state.template.services[i].ammount
    }
    return parseFloat(fullNettoValue).toFixed(2)
  },
  vatValue: state => {
    let fullVatValue = 0
    for (let i = 0; i < state.template.services.length; i++) {
      fullVatValue += state.template.services[i].priceNetto * (0 + '.' + state.template.services[i].vat.replace(/%/g, ''))
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
  // actions,
  getters
}

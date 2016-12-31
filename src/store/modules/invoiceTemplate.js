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

const actions = {
  loadTemplate: ({commit}) => {
    commit('LOAD_TEMPLATE', invoiceTemplate)
  },
  saveTemplate: ({commit}) => {
    commit('SAVE_TEMPLATE', invoiceTemplate)
  },
  addRow: ({commit}) => {
    commit('ADD_ROW', invoiceTemplate)
  }
}

const getters = {
  getTemplate: state => {
    return state.template
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}

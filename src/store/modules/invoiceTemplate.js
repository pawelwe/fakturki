import invoiceTemplate from '../../data/invoiceTemplate'

const state = {
  template: invoiceTemplate
}

const mutations = {
  'SET_TEMPLATE' (state, newTemplate) {
    state.template = newTemplate
  }
}

const actions = {
  setTemplate: ({commit}) => {
    commit('SET_TEMPLATE', invoiceTemplate)
  }
}

const getters = {
  template: state => {
    return state.template
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}

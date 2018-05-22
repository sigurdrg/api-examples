import Vue from 'vue'
import * as t from '@/store/types'
import { ENDPOINT_CUSTOMERS } from '@/config'

const state = {
  data: null
}

const mutations = {
  [t.CUSTOMERS_SET_DATA] (state, data) {
    state.data = data
  }
}

const actions = {
  load ({commit}) {
    Vue.resource(ENDPOINT_CUSTOMERS)
      .get()
      .then(r => {
        return r.status == 200 && !r.body.isError ? (
          commit(t.CUSTOMERS_SET_DATA, r.body.item),
          Promise.resolve()
        ) : (
          Promise.reject(r.body.errorMessage)
        )
      })
  }
}

const getters = {
  data: (state) => {
    return state.data
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

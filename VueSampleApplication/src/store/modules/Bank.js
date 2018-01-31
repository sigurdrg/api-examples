import Vue from 'vue'
import * as t from '@/store/types'
import {
  USER_ID,
  ENDPOINT_ACCOUNTS
} from '@/config'

const state = {
  accounts: []
}

const mutations = {
  [t.BANK_SET_ACCOUNTS] (state, data) {
    state.accounts = data
  }
}

const actions = {
  load ({commit}) {
    Vue.resource(ENDPOINT_ACCOUNTS)
      .get({customerId: USER_ID})
      .then(r => {
        return r.status == 200 && !r.body.isError ? (
          commit(t.BANK_SET_ACCOUNTS, r.body.items),
          Promise.resolve()
        ) : (
          Promise.reject(r.body.errorMessage)
        )
      })
  }
}

const getters = {
  accounts: (state) => {
    return state.accounts
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

import Vue from 'vue'
import * as t from '@/store/types'
import btoa from 'btoa'
import {
  USER_ID,
  CLIENT_ID,
  CLIENT_SECRET,
  ENDPOINT_IDENTITYSERVER
} from '@/config'

const state = {
  access_token: null,
  expires:      0
}

const mutations = {
  [t.APP_SET_ACCESS_TOKEN] (state, data) {
    state.access_token    = data.access_token
    state.expires         = + new Date() + (parseInt(data.expires_in) * 1000)

    // Add global 'Authorization' header
    Vue.http.headers.common['Authorization'] = data.token_type +' '+ data.access_token

    // Add global 'customerId' header
    Vue.http.headers.common['customerId'] = USER_ID
  }
}

const actions = {
  auth ({commit}) {
    return Vue.http({
      method: 'post',
      url:     ENDPOINT_IDENTITYSERVER,
      body:   'grant_type=client_credentials',
      headers: {
        'Authorization': 'Basic ' + btoa(encodeURIComponent(CLIENT_ID) + ':' + encodeURIComponent(CLIENT_SECRET)),
        'Accept':        'application/json',
        'Content-Type':  'application/x-www-form-urlencoded;'
      }
    }).then(r => {
      return r.status == 200 ? (
        commit(t.APP_SET_ACCESS_TOKEN, r.body),
        Promise.resolve()
      ) : (
        Promise.reject()
      )
    })
  }
}

const getters = {
  access_token: (state) => {
    return state.access_token
  },
  expired: (state) => {
    return state.expires < + new Date()
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

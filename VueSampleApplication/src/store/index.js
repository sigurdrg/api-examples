import Vue from 'vue'
import Vuex from 'vuex'
import App from '@/store/modules/App'
import Bank from '@/store/modules/Bank'
import Customers from '@/store/modules/Customers'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    App,
    Bank,
    Customers
  },
  strict: process.env.NODE_ENV !== 'production'
})

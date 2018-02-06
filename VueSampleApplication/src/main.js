import Vue from 'vue'
import store from '@/store'
import App from '@/components/App'
import '@/init'

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

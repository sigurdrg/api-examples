import Vue from 'vue'
import VueResource from 'vue-resource'
import VueMaterial from 'vue-material'
import { ENDPOINT_API } from '@/config'

import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueResource)
Vue.use(VueMaterial)
Vue.http.options.root = ENDPOINT_API
Vue.http.headers.common['Accept'] = 'application/json'

import Vue from 'vue'
import App from './components/App.vue'
import store from './store'

import * as Rx from 'rxjs/Rx'
import * as VueRx from 'vue-rx'

Vue.use(VueRx, Rx)

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

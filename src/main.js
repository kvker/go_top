import Vue from 'vue'
import App from './App.vue'
import router from './route/router'
import { zPage } from 'koala-ui'

Vue.prototype.$headerBackground = 'blue'

Vue.component('zPage', zPage)

new Vue({
  el: '#app',
  router,
  template: '<App />',
  components: {
    App,
  }
})

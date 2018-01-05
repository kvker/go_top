import Vue from 'vue'
import App from './App.vue'
import router from './route/router'
import { zPage, zView, zText, zButton } from 'koala-ui'

Vue.prototype.$headerBackground = 'purple'

Vue.component('zPage', zPage)
Vue.component('zView', zView)
Vue.component('zText', zText)
Vue.component('zButton', zButton)

new Vue({
  el: '#app',
  router,
  template: '<App />',
  components: {
    App,
  }
})

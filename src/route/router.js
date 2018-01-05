import Vue from 'vue'
import VueRouter from 'vue-router'
import Delegate from '../page/delegate.vue'
import Login from '../page/login.vue'
import Empty from '../page/empty.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {path: '/empty', component: Empty, alias: '/'},
    {path: '/delegate', component: Delegate},
    {path: '/login', component: Login},
  ]
})
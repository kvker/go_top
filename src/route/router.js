import Vue from 'vue'
import VueRouter from 'vue-router'
import Delegate from '../component/delegate/delegate.vue'
import Login from '../component/login/login.vue'
import Empty from '../component/empty/empty.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {path: '/empty', component: Empty, alias: '/'},
    {path: '//delegate', component: Delegate},
    {path: '/login', component: Login},
  ]
})
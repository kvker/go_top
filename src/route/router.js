import Vue from 'vue'
import VueRouter from 'vue-router'
import Test from '../component/test/test.vue'
import Empty from '../component/empty/empty.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {path: '/empty', component: Empty, alias: '/'},
    {path: '/test', component: Test},
  ]
})
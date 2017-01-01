// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/store'
import VueRouter from 'vue-router'
import { routes } from './routes'

/* eslint-disable no-new */

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#fakturki',
  store,
  router,
  template: '<App/>',
  components: { App }
})

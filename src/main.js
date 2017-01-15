// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/store'
import VueRouter from 'vue-router'
import { routes } from './routes'
import VueMoment from 'vue-moment'
import Vuelidate from 'vuelidate'

/* eslint-disable no-new */

Vue.use(VueRouter)
Vue.use(VueMoment)
Vue.use(Vuelidate)

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

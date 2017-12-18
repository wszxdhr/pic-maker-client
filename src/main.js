// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/views/home/index.vue'
import Preview from './components/views/preview/index.vue'
import api from './api'
import { ConfirmPlugin } from 'vux'
Vue.use(ConfirmPlugin)

Vue.use(VueRouter)

Vue.prototype.$api = api

const routes = [{
  path: '/main',
  component: Home
}, {
  path: '/preview',
  component: Preview,
  meta: {
    hideSwipeout: true
  }
}, {
  path: '/',
  component: Preview,
  meta: {
    hideSwipeout: true
  }
}]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')

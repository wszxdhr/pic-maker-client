// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Edit from './components/views/main/index.vue'
import Welcome from './components/views/welcome/index.vue'
import api from './api'
import eventBus from './components/tools/eventBus'
import { ConfirmPlugin } from 'vux'
Vue.use(ConfirmPlugin)

Vue.use(VueRouter)

Vue.prototype.$bus = eventBus
Vue.prototype.$api = api

const routes = [{
  path: '/',
  name: 'root',
  component: Welcome
}, {
  path: '/edit/:id',
  name: 'edit',
  component: Edit
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

/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/main.css'
import store from './store'
Vue.config.productionTip = false

Vue.directive('document-click', {
  bind(el, binding, vnode) {
    document.addEventListener('click', binding.value, false)
  },
  inserted() {},
  updated() {}
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

// Axios
// To change default headers later:
// this.$axios.defaults.headers.common['key-name'] = 'value'
// REF: https://github.com/axios/axios/issues/209
// To change specific instance, use <instance>.defaults.headers = 'value' instead
// REF: https://github.com/axios/axios/issues/209#issuecomment-462177458
Vue.prototype.$customerAxios = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

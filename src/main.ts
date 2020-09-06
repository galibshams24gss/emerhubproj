import Vue from 'vue'
import App from './App.vue'
import "./assets/styles/index.css"
import router from './router'
import store from './store'
import { debounce } from 'debounce';
//import "./assets/styles/index.css"
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

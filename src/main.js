import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Global Config
Vue.prototype.$code1 = "ETH"
Vue.prototype.$code2 = "CONV"

new Vue({
  render: h => h(App),
}).$mount('#app')

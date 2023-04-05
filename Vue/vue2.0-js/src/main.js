import Vue from 'vue'
import App from './App.vue'
import router from "@/router"
import VConsole from 'vconsole'

Vue.config.productionTip = false
const vConsole = new VConsole();

new Vue({
  render: h => h(App),
  router,
  vConsole
}).$mount('#app')

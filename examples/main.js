import Vue from 'vue'
import App from './App.vue'
import Myui from '../packages/index'
Vue.use(Myui)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

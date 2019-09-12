import Vue from 'vue'
import './plugins/bootstrap-vue'
import './plugins/vueMask'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import VueClipboard from 'vue-clipboard2'
import vuetify from './plugins/vuetify';

Vue.use(VueClipboard)
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

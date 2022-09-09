//where everything gets connected/constructed
import Vue from 'vue'
import App from './App'
import router from './router/pages'

Vue.config.productionTip = false

//create new Vue site
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

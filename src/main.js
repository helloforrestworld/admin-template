import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'nprogress/nprogress.css'
import './styles/index.less'

import './icons'

Vue.config.productionTip = false
Vue.use(Element, {
  size: 'medium'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

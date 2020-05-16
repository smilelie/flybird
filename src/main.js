import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VCharts from 'v-charts'
import App from './App.vue'
import router from './router'
import Head from './components/Head'
import Foot from './components/Foot'

import './assets/style/global.css'
import './assets/style/common.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VCharts)
Vue.component('app-header', Head)
Vue.component('app-footer', Foot)

new Vue({
  components: {
    'app-header': Head,
    'app-footer': Foot
  },
  router,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import VueRouter from 'vue-router'
import FirstPage from '../components/FirstPage.vue'
import SecondPage from '../components/SP.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/FirstPage',
    component: FirstPage
  },
  {
    path: '/SP',
    component: SecondPage
  }
]

const router = new VueRouter({
  routes
})

export default router

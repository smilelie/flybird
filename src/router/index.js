import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'
import SecondPage from '../components/SP.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: App
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

import Vue from 'vue'
import VueRouter from 'vue-router'
import SecondPage from '../components/SP.vue'
Vue.use(VueRouter)

const routes = [

  {
    path: '/SP',
    component: SecondPage
  }
]

const router = new VueRouter({
  routes
})

export default router

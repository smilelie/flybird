import Vue from 'vue'
import VueRouter from 'vue-router'
import SecondPage from '../components/SP.vue'
import setting from '../components/settings.vue'
import options from '../components/option_page.vue'
import test from '../components/test.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/SP',
    component: SecondPage
  },
  {
    path: '/setting',
    component: setting
  },
  {
    path: '/option',
    component: options
  },
  {
    path: '/test',
    component: test
  }
]

const router = new VueRouter({
  routes
})

export default router

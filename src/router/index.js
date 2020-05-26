import Vue from 'vue'
import VueRouter from 'vue-router'
import SecondPage from '../components/SP.vue'
import setting from '../components/settings.vue'
import options from '../components/option_page.vue'
import test from '../components/test.vue'
import control from '../components/control.vue'
import DataShow from '../components/data_show.vue'
import timesetting from '../components/timesetting.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: SecondPage
  },
  {
    path: '/setting',
    component: setting
  },
  {
    path: '/control',
    component: control
  },
  {
    path: '/option',
    component: options
  },
  {
    path: '/show',
    component: DataShow
  },
  {
    path: '/timesetting',
    component: timesetting
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

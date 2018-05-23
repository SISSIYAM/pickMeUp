import Vue from 'vue'
import Router from 'vue-router'

import welcome from '@/page/welcome/welcome'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: welcome
    }
  ]
})

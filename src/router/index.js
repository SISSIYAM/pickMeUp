import Vue from 'vue'
import Router from 'vue-router'

import welcome from '@/page/welcome/welcome'
import svgIcon from '@/images/index'

Vue.use(Router)
Vue.use(svgIcon)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: welcome
    }
  ]
})

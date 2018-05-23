import Vue from 'vue'
import Router from 'vue-router'

import welcome from '@/page/welcome/welcome'
import svgIcon from '@/components/svgIcon/svgIcon'
Vue.use(Router)
Vue.component('svg-icon', svgIcon)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: welcome
    }
  ]
})

import Vue from 'vue'
import svgIcon from '@/components/svgIcon/svgIcon'

//register globally
Vue.component('svg-icon',svgIcon)

const requireAll = requireContext => requireContext.key().map(requireContext)
const req = require.context('./svg',false,/\.svg$/)
const iconMap = requireAll(req)



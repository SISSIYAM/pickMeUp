import svgIcon from '@/components/svgIcon/svgIcon'

// register globally
const svgIconComponent = {
  install: function (Vue) {
    Vue.component('svg-icon', svgIcon)
  }
}
// webpack help us auto import all svg
const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', true, /\.svg$/)
requireAll(req)
export default svgIconComponent

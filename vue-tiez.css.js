import ZAvatar from './src/components/ZAvatar.vue'
import ZBadge from './src/components/ZBadge.vue'

// Export components
const Components = {
  ZAvatar,
  ZBadge
}

const VueTiezPlugin = {
  install (Vue) {
    Object.keys(Components).forEach((name) => {
      Vue.component(name, Components[name])
    })
  }
}

// Export as a plugin
export default VueTiezPlugin

// Export as individual components
export {
  ZAvatar,
  ZBadge
}

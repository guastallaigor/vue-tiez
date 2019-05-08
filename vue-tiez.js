import ZAvatar from './src/components/ZAvatar.vue'
import ZBadge from './src/components/ZBadge.vue'
import ZCheckbox from './src/components/ZCheckbox.vue'
import ZIcon from './src/components/ZIcon.vue'
import ZCode from './src/components/ZCode.vue'
import ZNote from './src/components/ZNote.vue'

// Export components
const Components = {
  ZAvatar,
  ZBadge,
  ZCheckbox,
  ZIcon,
  ZCode,
  ZNote
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
  ZBadge,
  ZCheckbox,
  ZIcon,
  ZCode,
  ZNote
}

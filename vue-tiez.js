import ZAvatar from './src/components/ZAvatar.vue'
import ZBadge from './src/components/ZBadge.vue'
import ZButton from './src/components/ZButton.vue'
import ZCard from './src/components/ZCard.vue'
import ZCheckbox from './src/components/ZCheckbox.vue'
import ZCode from './src/components/ZCode.vue'
import ZCollapse from './src/components/ZCollapse.vue'
import ZIcon from './src/components/ZIcon.vue'
import ZInput from './src/components/ZInput.vue'
import ZNote from './src/components/ZNote.vue'
import ZScroller from './src/components/ZScroller.vue'
import ZShowMoreToggle from './src/components/ZShowMoreToggle.vue'
import ZSpinner from './src/components/ZSpinner.vue'
import ZTable from './src/components/ZTable.vue'
import ZToggle from './src/components/ZToggle.vue'
import ZVideoCard from './src/components/ZVideoCard.vue'

// Export components
const Components = {
  ZAvatar,
  ZBadge,
  ZButton,
  ZCard,
  ZCheckbox,
  ZCode,
  ZIcon,
  ZInput,
  ZNote,
  ZScroller,
  ZShowMoreToggle,
  ZSpinner,
  ZTable,
  ZToggle,
  ZCollapse,
  ZVideoCard
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
  ZButton,
  ZCard,
  ZCheckbox,
  ZCode,
  ZIcon,
  ZInput,
  ZNote,
  ZScroller,
  ZShowMoreToggle,
  ZSpinner,
  ZTable,
  ZToggle,
  ZCollapse,
  ZVideoCard
}

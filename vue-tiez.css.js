import MyButton from './src/components/MyButton.vue'

// Export components
const Components = {
  MyButton
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
  MyButton
}

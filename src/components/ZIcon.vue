<template>
  <component :is="name" :size="size" :dark="dark"/>
</template>

<script>
export default {
  name: 'z-icon',
  components: {
    add: () => import('./icons/add'),
    arrow: () => import('./icons/arrow'),
    'arrow-double': () => import('./icons/arrow-double'),
    up: () => import('./icons/up'),
    down: () => import('./icons/down'),
    left: () => import('./icons/left'),
    right: () => import('./icons/right'),
    camera: () => import('./icons/camera'),
    'big-camera': () => import('./icons/big-camera'),
    checked: () => import('./icons/checked'),
    unchecked: () => import('./icons/unchecked'),
    checkmark: () => import('./icons/checkmark'),
    cloud: () => import('./icons/cloud'),
    configuration: () => import('./icons/configuration'),
    copy: () => import('./icons/copy'),
    'credit-card': () => import('./icons/credit-card'),
    delete: () => import('./icons/delete'),
    directory: () => import('./icons/directory'),
    close: () => import('./icons/close'),
    open: () => import('./icons/open')
  },
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: '20px'
    },
    dark: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
svg.z-icon {
  shape-rendering: crispEdges;

  circle {
    transition: all 0.2s ease 0s;
  }

  &:hover circle {
    stroke: rgb(153, 153, 153);
  }
}
</style>

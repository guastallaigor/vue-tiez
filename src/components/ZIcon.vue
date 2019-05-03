<template>
  <component :is="name" :size="size" :dark="dark"/>
</template>

<script>
export default {
  name: 'z-icon',
  components: {
    add: () => import('./icons/add'),
    arrow: () => import('./icons/arrow'),
    'arrow-double': () => import('./icons/arrow-double')
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

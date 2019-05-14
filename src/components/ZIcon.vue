<template>
  <component :is="name" :size="size" :dark="dark" :color="color" />
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
    open: () => import('./icons/open'),
    divider: () => import('./icons/divider'),
    dropdown: () => import('./icons/dropdown'),
    'closed-email': () => import('./icons/closed-email'),
    'open-email': () => import('./icons/open-email'),
    emoji: () => import('./icons/emoji'),
    'external-link': () => import('./icons/external-link'),
    file: () => import('./icons/file'),
    fullscreen: () => import('./icons/fullscreen'),
    'close-fullscreen': () => import('./icons/close-fullscreen'),
    infinity: () => import('./icons/infinity'),
    info: () => import('./icons/info'),
    lamda: () => import('./icons/lamda'),
    'new-project': () => import('./icons/new-project'),
    'big-open': () => import('./icons/big-open'),
    pause: () => import('./icons/pause'),
    'perma-link': () => import('./icons/perma-link'),
    play: () => import('./icons/play'),
    questions: () => import('./icons/questions'),
    refresh: () => import('./icons/refresh'),
    reset: () => import('./icons/reset'),
    search: () => import('./icons/search'),
    speaker: () => import('./icons/speaker'),
    upload: () => import('./icons/upload'),
    users: () => import('./icons/users'),
    website: () => import('./icons/website'),
    xlink: () => import('./icons/xlink'),
    github: () => import('./icons/github'),
    slack: () => import('./icons/slack'),
    spectrum: () => import('./icons/spectrum'),
    twitter: () => import('./icons/twitter'),
    youtube: () => import('./icons/youtube')
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
    },
    color: {
      type: String,
      default: ''
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

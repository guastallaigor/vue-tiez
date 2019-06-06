<template>
  <span class="z-avatar" :class="[size, { dark, stacked }]">
    <img :alt="alt" :title="alt" :src="src" />
  </span>
</template>

<script>
export default {
  name: 'z-avatar',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: '',
      validator: (v) => (['small', '', 'medium', 'large'].includes(v))
    },
    dark: {
      type: Boolean,
      default: false
    },
    stacked: {
      type: Boolean,
      default: false
    }
  }
}
</script>

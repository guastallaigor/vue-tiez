<template>
  <div class="z-card" :style="width ? `width:${width}` : ''" :class="{ dark }">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'z-card',
  props: {
    width: {
      type: String,
      default: 'auto'
    },
    dark: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({})
}
</script>

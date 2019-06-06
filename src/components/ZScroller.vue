<template>
  <div class="z-scroller" :class="{ dark }" :style="width ? `width:${width}` : ''">
    <div class="inner"><slot/></div>
  </div>
</template>

<script>
export default {
  name: 'z-scroller',
  props: {
    dark: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: 'auto'
    }
  },
  data: () => ({})
}
</script>

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

<style lang="scss">
.z-card {
  background: #fff;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  margin-bottom: 50px;
  padding: 20px 30px;
  transition: all 0.2s ease;
  width: auto;

  &.dark {
    background: #000;
    color: #fff;
  }

  &:hover {
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.12);
  }
}
</style>

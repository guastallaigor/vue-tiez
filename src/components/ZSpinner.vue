<template>
  <div class="z-spinner" :style="{width: size, height: size}" :class="{ dark }">
    <div class="spinner" :style="{width: size, height: size}">
      <div class="spinner_bar" style="animation-delay: -1.2s; transform: rotate(0deg) translate(146%);"></div>
      <div class="spinner_bar" style="animation-delay: -1.1s; transform: rotate(30deg) translate(146%);"></div>
      <div class="spinner_bar" style="animation-delay: -1s; transform: rotate(60deg) translate(146%);"></div>
      <div class="spinner_bar" style="animation-delay: -0.9s; transform: rotate(90deg) translate(146%);"></div>
      <div class="spinner_bar" style="animation-delay: -0.8s; transform: rotate(120deg) translate(146%);"></div>
      <div class="spinner_bar" style="animation-delay: -0.7s; transform: rotate(150deg) translate(146%);"></div>
      <div class="spinner_bar" style="animation-delay: -0.6s; transform: rotate(180deg) translate(146%);"></div>
      <div class="spinner_bar" style="animation-delay: -0.5s; transform: rotate(210deg) translate(146%);"></div>
      <div class="spinner_bar" style="animation-delay: -0.4s; transform: rotate(240deg) translate(146%);"></div>
      <div class="spinner_bar" style="animation-delay: -0.3s; transform: rotate(270deg) translate(146%);"></div>
      <div class="spinner_bar" style="animation-delay: -0.2s; transform: rotate(300deg) translate(146%);"></div>
      <div class="spinner_bar" style="animation-delay: -0.1s; transform: rotate(330deg) translate(146%);"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'z-spinner',
  props: {
    size: {
      type: String,
      default: '20px'
    },
    dark: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({})
}
</script>

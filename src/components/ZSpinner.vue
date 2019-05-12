<template>
  <div class="z-spinner" :style="{width: size, height: size}" :class="{'dark': dark}">
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
  }
}
</script>

<style lang="scss">
.z-spinner {
  @keyframes spin {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0.15;
    }
  }

  height: 20px;
  width: 20px;

  .spinner {
    width: 20px;
    left: 50%;
    position: relative;
    top: 50%;
    height: 20px;

    &_bar {
      background-color: rgb(0, 0, 0);
      height: 8%;
      left: -10%;
      position: absolute;
      top: -3.9%;
      width: 24%;
      animation-duration: 1.2s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      animation-direction: normal;
      animation-fill-mode: none;
      animation-play-state: running;
      animation-name: spin;
      border-radius: 5px;
    }
  }

  &.dark .spinner_bar {
    background-color: rgb(234, 234, 234);
  }
}
</style>

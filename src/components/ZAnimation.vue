<template>
  <div :class="{ dark }" ref="animation" class="z-animation">
    <svg
      :style="{ top: y - 10, left: x - 10 }"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g :fill="dark ? '#333' : '#ddd'">
          <rect width="100%" height="100%" rx="10" />
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'z-animation',
  props: {
    dark: {
      type: Boolean,
      default: false
    },
    y: {
      type: [String, Number],
      default: 10
    },
    x: {
      type: [String, Number],
      default: 10
    }
  },
  mounted () {
    this.addAnimationEvent()
  },
  beforeDestroy () {
    this.removeAnimationEvent()
  },
  methods: {
    addAnimationEvent () {
      if (this.$refs.animation) {
        this.$refs.animation.addEventListener('animationend', this.onAnimationEnd)
      }
    },
    removeAnimationEvent () {
      if (this.$refs.animation) {
        this.$refs.animation.removeEventListener('animationend', this.onAnimationEnd)
      }
    },
    onAnimationEnd (event) {
      this.$emit('complete', event || null)
    }
  }
}
</script>

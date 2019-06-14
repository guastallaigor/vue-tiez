<template>
  <div class="z-code" :class="getClasses" :style="`width: ${width};`">
    <template v-if="content">{{ content }}</template>
    <slot v-else />
  </div>
</template>

<script>
export default {
  name: 'z-code',
  props: {
    content: {
      type: String,
      default: ''
    },
    withDolar: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: 'auto'
    },
    dark: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getClasses () {
      const { withDolar, dark } = this

      return {
        'with-dolar': withDolar,
        dark
      }
    }
  }
}
</script>

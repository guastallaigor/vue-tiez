<template>
  <div class="z-code" :class="getClasses">
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

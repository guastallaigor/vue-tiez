<template>
  <div class="z-note" :class="getClasses">
    <b v-if="customLabel || type">{{ customLabel || type }}:</b>
    {{ content }}
    <div><slot/></div>
  </div>
</template>

<script>
export default {
  name: 'z-note',
  props: {
    content: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: '',
      validator: (v) => (['', 'hint', 'alert', 'warning'].includes(v))
    },
    customLabel: {
      type: String,
      default: ''
    },
    dark: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getClasses () {
      const { type, dark } = this

      return {
        hint: type === 'hint',
        alert: type === 'alert',
        warning: type === 'warning',
        dark
      }
    }
  }
}
</script>

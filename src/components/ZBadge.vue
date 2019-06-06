<template>
  <span class="z-badge" :class="[color, {'with-text': withText}]">{{ content }}</span>
</template>

<script>
export default {
  name: 'z-badge',
  props: {
    content: {
      type: [Number, String],
      required: true,
      default: null
    },
    withText: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'black',
      validator: (v) => (['red', 'black', 'dark'].includes(v))
    }
  }
}
</script>

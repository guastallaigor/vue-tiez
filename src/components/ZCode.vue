<template>
  <div class="z-code" :class="getClasses">{{ content }}</div>
</template>

<script>
export default {
  name: 'z-code',
  props: {
    content: {
      type: String,
      required: true,
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

<style lang="scss">
.z-code {
  color: rgb(0, 0, 0);
  font-family: Menlo, Monaco, "Lucida Console", "Liberation Mono", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Courier New", monospace, serif;
  font-size: 13px;
  line-height: 20px;
  white-space: pre;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(234, 234, 234);
  border-image: initial;
  margin: 40px 0;
  overflow: auto;
  padding: 20px;

  &.with-dolar {
    &::before {
      content: "$ ";
    }
  }

  &.dark {
    color: rgb(255, 255, 255);
    background: rgb(0, 0, 0);
  }
}
</style>

<template>
  <span class="z-badge" :class="[color, {'with-text': withText}]">{{ content }}</span>
</template>

<script>
export default {
  name: 'z-badge',
  props: {
    content: {
      type: String,
      required: true,
      default: ''
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

<style lang="scss">
.z-badge {
  color: rgb(255, 255, 255);
  display: inline-block;
  font-size: 10px;
  font-weight: bold;
  line-height: 15px;
  height: 15px;
  min-width: 15px;
  text-align: center;
  padding: 0px 4px;
  border-radius: 7px;

  &.with-text {
    font-weight: normal;
    text-transform: uppercase;
    min-height: 15px;
    padding: 4px 10px;
    border-radius: 20px;
  }


  &.black {
    background: black;
  }

  &.red {
    background: rgb(255, 0, 0);
  }

  &.dark {
    color: rgb(0, 0, 0);
    background: white;
  }
}
</style>

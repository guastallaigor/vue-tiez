<template>
  <span class="z-badge" :class="color">{{ text }}</span>
</template>

<script>
export default {
  name: 'z-badge',
  props: {
    text: {
      type: String,
      required: true,
      default: ''
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

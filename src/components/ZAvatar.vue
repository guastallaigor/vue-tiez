<template>
  <span class="z-avatar" :class="[size, {'dark': dark, 'stacked': stacked}]">
    <img :alt="alt" :title="alt" :src="src" />
  </span>
</template>

<script>
export default {
  name: 'z-avatar',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: '',
      validator: (v) => (['small', '', 'medium', 'large'].includes(v))
    },
    dark: {
      type: Boolean,
      default: false
    },
    stacked: {
      type: Boolean,
      default: false
    },
    show: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss">
@mixin size($width: 20px, $height: 20px) {
  width: $width;
  height: $height;
}

.z-avatar {
  &.small {
    @include size();
  }

  @include size(30px, 30px);

  &.medium {
    @include size(60px, 60px);
  }

  &.large {
    @include size(90px, 90px);
  }

  img {
    width: 100%;
    height: 100%;
  }

  display: inline-flex;
  align-items: center;
  line-height: 0;
  vertical-align: top;
  border-radius: 100%;
  overflow: hidden;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(238, 238, 238);
  border-image: initial;
  background: rgb(255, 255, 255);
  -webkit-mask-image: -webkit-radial-gradient(center, circle cover, white, black);

  &.dark {
    border-color: rgb(51, 51, 51);
    background: rgb(0, 0, 0);
  }

  &.stacked {
    margin-left: -10px;
  }
}
</style>

<template>
  <div class="z-scroller" :class="{ dark }" :style="width ? `width:${width}` : ''">
    <div class="inner"><slot/></div>
  </div>
</template>

<script>
export default {
  name: 'z-scroller',
  props: {
    dark: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: 'auto'
    }
  },
  data: () => ({})
}
</script>

<style lang="scss">
@mixin set-pseudo-element($bgImage: linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0)), $isRight: true) {
  content: "";
  position: absolute;
  top: 0;
  height: 100%;
  width: 20px;
  background-image: $bgImage;

  @if ($isRight == true) {
    right: 0;
  }

  @else {
    left: 0;
  }
}

.z-scroller {
  position: relative;

  &::before {
    @include set-pseudo-element(linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0)), false);
  }

  &::after {
    @include set-pseudo-element();
  }

  .inner {
    display: flex;
    overflow-x: auto;

    section {
      scroll-snap-align: center;
      height: 200px;
      width: 150px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgb(239, 239, 239);
      margin: 0 20px;
    }
  }

  &.dark {
    .inner {
      section {
        background: #333;
        color: #fff;
      }
    }

    &::before {
      @include set-pseudo-element(linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(255, 255, 255, 0)), false);
    }

    &::after {
      @include set-pseudo-element(linear-gradient(to left, rgba(0, 0, 0, 0.3), rgba(255, 255, 255, 0)));
    }
  }
}
</style>

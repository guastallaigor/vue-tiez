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
  }
}
</script>

<style lang="scss">
@mixin set-before($bgImage: linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0))) {
  content: "";
  position: absolute;
  left: 0;
  height: 100%;
  width: 20px;
  background-image: $bgImage;
}

@mixin set-after($bgImage: linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0))) {
  content: "";
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 20px;
  background-image: $bgImage;
}

.z-scroller {
  position: relative;

  &::before {
    @include set-before();
  }

  &::after {
    @include set-after();
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
      @include set-before(linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(255, 255, 255, 0)));
    }

    &::after {
      @include set-after(linear-gradient(to left, rgba(0, 0, 0, 0.3), rgba(255, 255, 255, 0)));
    }
  }
}
</style>

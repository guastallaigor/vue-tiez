<template>
  <button
    role="button"
    type="button"
    class="z-button"
    @click="onClick"
    :class="getClasses"
    ref="button"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <span v-if="loading" class="loading-shim">
      <span class="loading">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </span>
    <span v-if="icon && !loading && !withIconRight" class="icon" :class="{'right': withIconRight}">
      <z-icon :name="icon" :color="getIconColor" />
    </span>
    <span v-if="content && !loading">{{ content }}</span>
    <slot v-if="!content && !loading" />
    <span v-if="icon && !loading && withIconRight" class="icon" :class="{'right': withIconRight}">
      <z-icon :name="icon" :color="getIconColor" />
    </span>
    <z-animation v-if="x && y && !shadow" :dark="dark" :y="y" :x="x" @complete="onAnimationComplete" />
  </button>
</template>

<script>
export default {
  name: 'z-button',
  components: {
    ZIcon: () => import('./ZIcon'),
    ZAnimation: () => import('./ZAnimation')
  },
  props: {
    content: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    withIconRight: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    },
    dark: {
      type: Boolean,
      default: false
    },
    shadow: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'primary',
      validator: (v) => (['primary', 'secondary', 'warning', 'highlight', 'link', 'abort'].includes(v))
    }
  },
  data: () => ({
    x: null,
    y: null,
    hover: false
  }),
  computed: {
    getClasses () {
      const { icon, disabled, dark, type, small, loading, shadow, active } = this

      return {
        icon,
        disabled,
        dark,
        small,
        loading,
        shadow,
        active,
        primary: type === 'primary',
        secondary: type === 'secondary',
        warning: type === 'warning',
        highlight: type === 'highlight',
        link: type === 'link',
        abort: type === 'abort'
      }
    },
    getIconColor () {
      const { type, hover } = this

      return {
        primary: hover ? '#000' : '#fff',
        secondary: hover ? '#000' : 'rgb(102, 102, 102)',
        warning: hover ? '#eb5757' : '#fff',
        highlight: hover ? '#007aff' : '#fff',
        link: '#0d7df7',
        abort: '#666'
      }[type]
    }
  },
  methods: {
    onClick (event) {
      if (this.disabled) return

      const rect = this.$refs.button.getBoundingClientRect()

      if (rect) {
        const { left, top } = rect
        this.x = event.clientX - left
        this.y = event.clientY - top
      }

      this.$emit('click', event)
    },
    onAnimationComplete () {
      this.x = null
      this.y = null
    }
  }
}
</script>

<style lang="scss">
@mixin set-color-bg($color, $bg, $isbg: true) {
  color: $color;

  @if ($isbg == true) {
    background: $bg;
  }

  @else {
    background-color: $bg;
  }
}

@mixin set-border-color-bg($border: rgb(0, 0, 0), $color: rgb(0, 0, 0), $bg: rgb(255, 255, 255), $isbg: true) {
  border: 1px solid $border;

  @include set-color-bg($color, $bg, $isbg);
}

@mixin set-bordercolor-color-bg($bordercolor: rgb(0, 0, 0), $color: rgb(0, 0, 0), $bg: rgb(255, 255, 255), $isbg: true) {
  border-color: $bordercolor;

  @include set-color-bg($color, $bg, $isbg);
}

@mixin set-link($color: #0d7df7) {
  border: 0;
  background: transparent;
  color: $color;
  padding: 0;
  box-shadow: none;
}

.z-button {
  @keyframes hasloading {
    0% {
      opacity: 0.2;
    }

    20% {
      opacity: 1;
    }

    100% {
      opacity: 0.2;
    }
  }

  appearance: none;
  align-items: center;
  color: rgb(255, 255, 255);
  background: rgb(0, 0, 0);
  display: inline-flex;
  min-width: 200px;
  height: 40px;
  padding: 0 25px;
  outline: none;
  border: 1px solid rgb(0, 0, 0);
  font-size: 12px;
  justify-content: center;
  text-transform: uppercase;
  cursor: pointer;
  text-align: center;
  user-select: none;
  font-weight: 100;
  position: relative;
  overflow: hidden;
  transition: border 0.2s, background 0.2s, color 0.2s ease-out;
  border-radius: 5px;
  white-space: nowrap;
  text-decoration: none;
  line-height: 0;

  span {
    position: relative;
    z-index: 1;
  }

  &.secondary {
    @include set-border-color-bg(#eaeaea, rgb(102, 102, 102), #fff);

    border-color: rgb(234, 234, 234);

    &.dark {
      @include set-border-color-bg(#666, rgb(234, 234, 234), #000);

      &:hover:not(.shadow) {
        @include set-border-color-bg(#fff, rgb(0, 0, 0), #fff);
      }
    }

    &:hover:not(.shadow),
    &.active:not(.shadow) {
      @include set-bordercolor-color-bg(rgb(102, 102, 102), rgb(102, 102, 102), #fff);
    }

    &.disabled {
      &:hover {
        @include set-bordercolor-color-bg(#eaeaea, #ccc, #fafafa, false);
      }
    }
  }

  .icon {
    position: absolute;
    left: 8px;
    right: auto;
    display: flex;
    align-items: center;
    top: 0;
    bottom: 0;
    z-index: 1;

    &.right {
      left: auto;
      right: 8px;
    }
  }

  b {
    display: inline-block;
    overflow: none;
    z-index: 100;
    font-weight: 500;
    position: relative;
  }

  &.dark {
    border: 2px solid #fff;

    @include set-color-bg(#000, #fff);

    &.disabled,
    &.disabled:hover:not(.shadow) {
      @include set-border-color-bg(#333, #333, #111);
    }

    &:hover:not(.shadow),
    &.active {
      @include set-border-color-bg(#fff, #fff, rgb(0, 0, 0));
    }

    &.loading {
      @include set-bordercolor-color-bg(rgb(234, 234, 234), rgb(204, 204, 204), rgb(250, 250, 250));
    }
  }

  &.loading {
    @include set-bordercolor-color-bg(#eaeaea, #ccc, #fafafa);

    pointer-events: none;
    position: relative;
    cursor: default;

    .loading-shim {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;

      .loading {
        span {
          animation-name: hasloading;
          animation-iteration-count: infinite;
          animation-fill-mode: both;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background-color: #444;
          display: inline-block;
          margin: 0 1px;
          animation-duration: 1.4s;

          &:nth-child(2) {
            animation-delay: 0.2s;
          }

          &:nth-child(3) {
            animation-delay: 0.4s;
          }
        }
      }
    }
  }

  &.abort {
    border: 0;

    @include set-bordercolor-color-bg(transparent, #666, transparent, false);

    &.disabled {
      color: #ccc;
    }

    &:hover:not(.shadow) {
      @include set-link(#666);
    }
  }

  &:hover:not(.shadow),
  &.active:not(.shadow) {
    @include set-border-color-bg();
  }

  &.warning {
    @include set-bordercolor-color-bg(#eb5757, #fff, #eb5757, false);

    &:hover:not(.shadow),
    &.active:not(.shadow) {
      @include set-border-color-bg(#eb5757, #eb5757, #fff);
    }
  }

  &.highlight {
    @include set-bordercolor-color-bg(#007aff, #fff, #007aff, false);

    &:hover:not(.shadow),
    &.active:not(.shadow) {
      @include set-border-color-bg(#007aff, #007aff, #fff);
    }
  }

  &.disabled {
    @include set-bordercolor-color-bg(#eaeaea, #ccc, #fafafa);

    &:hover:not(.shadow) {
      &:not(.link):not(.dark) {
        @include set-border-color-bg(#eaeaea, #ccc, #fafafa);
      }
    }

    cursor: not-allowed;
  }

  &.small {
    min-width: 100px;
    height: 24px;
    line-height: 22px;
    padding: 0 10px;
  }

  &.shadow {
    font-weight: 400;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);

    &:not(.disabled) {
      &:hover {
        box-shadow: 0 7px 20px rgba(0, 0, 0, 0.16);
        transform: translate3d(0, -1px, 0);
      }
    }
  }

  &.link {
    @include set-link();

    &.disabled {
      color: #ccc;
    }

    &:hover:not(.shadow) {
      @include set-link();

      text-decoration: underline;

      &:not(.disabled) {
        color: #0d7df7;
      }

      &.disabled {
        color: #ccc;
      }
    }
  }
}
</style>

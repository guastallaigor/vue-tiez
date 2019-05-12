<template>
  <button role="button" type="button" class="z-button" @click="$emit('click', $event)" :class="getClasses">
    <span class="loading-shim" v-if="loading">
      <span class="loading">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </span>
    <span class="icon" :class="{'right': withIconRight}" v-if="icon && !loading && !withIconRight">
      <z-icon :name="icon" :dark="dark" />
    </span>
    <span v-if="content && !loading">{{ content }}</span>
    <slot v-if="!content && !loading" />
    <span class="icon" :class="{'right': withIconRight}" v-if="icon && !loading && withIconRight">
      <z-icon :name="icon" :dark="dark" />
    </span>
  </button>
</template>

<script>
export default {
  name: 'z-button',
  components: {
    ZIcon: () => import('./ZIcon')
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
    abort: {
      type: Boolean,
      default: false
    },
    link: {
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
      validator: (v) => (['primary', 'secondary', 'warning', 'highlight'].includes(v))
    }
  },
  computed: {
    getClasses () {
      const { icon, disabled, abort, link, dark, type, small, loading, shadow } = this

      return {
        icon,
        disabled,
        abort,
        link,
        dark,
        small,
        loading,
        shadow,
        primary: type === 'primary',
        secondary: type === 'secondary',
        warning: type === 'warning',
        highlight: type === 'highlight'
      }
    }
  }
}
</script>

<style lang="scss">
@mixin set-color-bg($color, $bg, $isbg: true) {
  color: $color;

  @if ($isbg == true) {
    background: $bg;
  } @else {
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
    }

    .icon :global(path) {
      fill: #999;
    }
    .button.disabled .icon :global(path) {
      fill: #ccc;
    }

    &:hover:not(.shadow),
    &.active:not(.shadow) {
      @include set-bordercolor-color-bg(rgb(102, 102, 102), rgb(102, 102, 102), #fff);
    }

    &.not-disabled:hover :global(path),
    &.not-disabled.active :global(path) {
      fill: currentColor;
      stroke: none;
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

  &.loading {
    pointer-events: none;
    @include set-bordercolor-color-bg(#eaeaea, #ccc, #fafafa);
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
          background-color: #444444;
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
    @include set-bordercolor-color-bg(transparent, #666, transparent, false);
    &.disabled {
      color: #ccc;
    }
  }

  &:hover:not(.shadow),
  &.active:not(.shadow) {
    @include set-border-color-bg();
  }

  &.not-disabled:hover :global(path),
  &.not-disabled.active :global(path) {
    fill: rgb(0, 0, 0);
    stroke: rgb(0, 0, 0);
  }

  &.warning {
    @include set-bordercolor-color-bg(#eb5757, #fff, #eb5757, false);

    &:hover:not(.shadow),
    &.active:not(.shadow) {
      @include set-color-bg(#eb5757, #fff);
    }
  }

  &.highlight {
    @include set-bordercolor-color-bg(#007aff, #fff, #007aff, false);

    &:hover:not(.shadow),
    &.active:not(.shadow) {
      @include set-color-bg(#007aff, #fff);
    }
  }

  &.disabled {
    @include set-bordercolor-color-bg(#eaeaea, #ccc, #fafafa);
    cursor: not-allowed;
  }

  &.dark {
    border: 2px solid #fff;
    @include set-color-bg(#000, #fff);

    &.disabled {
      @include set-border-color-bg(#333, #333, #111);
    }

    &:hover,
    &.active {
      @include set-border-color-bg(#fff, #fff, rgb(0, 0, 0));
    }

    .loading {
      @include set-bordercolor-color-bg(#eaeaea, #ccc, #fafafa, false);
    }
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

    &:not(&.disabled) {
      &:hover {
        box-shadow: 0 7px 20px rgba(0, 0, 0, 0.16);
        transform: translate3d(0px,-1px,0px);
      }
    }
  }
}
/*
.button.icon--push:not(.icon--right) {
  padding-left: 42px;
}
.button.icon--right.icon--push {
  padding-right: 42px;
}
.button.secondary.icon--right .icon {
  right: 8px;
  left: auto;
} */
</style>

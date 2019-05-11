<template>
  <div class="z-toggle" :class="getClasses">
    <input type="checkbox" v-model="valueComp" name="checkbox" aria-label="toggle">
    <span :class="{'checked': valueComp}" @click.prevent.stop="valueComp = !valueComp">
      <div></div>
    </span>
  </div>
</template>

<script>
export default {
  name: 'z-toggle',
  props: {
    value: {
      type: Boolean,
      required: true,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    dark: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    valueComp: {
      get () {
        return this.value
      },
      set (val) {
        if (this.disabled) return

        this.$emit('input', val)
      }
    },
    getClasses () {
      const { disabled, dark } = this

      return {
        'disabled': disabled,
        'dark': dark
      }
    }
  }
}
</script>

<style lang="scss">
@mixin set-style($color) {
  background: $color;
  border-width: 1px;
  border-style: solid;
  border-color: $color;
  border-image: initial;
}

@mixin set-thumb($left, $color) {
  left: $left;
  background: $color;
}

@mixin set-layout($cursor, $display, $width, $height, $position, $duration, $property, $timing, $radius) {
  cursor: $cursor;
  display: $display;
  width: $width;
  height: $height;
  position: $position;
  transition-duration: $duration;
  transition-property: $property;
  transition-timing-function: $timing;
  border-radius: $radius;
}

.z-toggle {
  display: inline-flex;
  position: relative;
  vertical-align: middle;
  white-space: nowrap;
  padding: 3px 0;

  input[type="checkbox"] {
    cursor: default;
  }

  span {
    $transition: background, border;

    @include set-layout(pointer, inline-block, 28px, 14px, relative, 0.2s, $transition, cubic-bezier(0, 0, 0.2, 1), 14px);

    transition-delay: 0.12s;

    div {
      @include set-layout(pointer, block, 12px, 12px, absolute, 0.28s, left, cubic-bezier(0, 0, 0.2, 1), 50%);

      transform: translate(0, -50%);
      border-width: 1px;
      border-style: solid;
      border-color: transparent;
      border-image: initial;
      top: 50%;
    }

    &:not(.checked) {
      @include set-style(rgb(204, 204, 204));

      div {
        box-shadow: rgba(0, 0, 0, 0.2) 0 1px 2px 0, rgba(0, 0, 0, 0.1) 0 1px 3px 0;

        @include set-thumb(0, rgb(250, 250, 250));
      }
    }

    &.checked {
      @include set-style(rgb(6, 125, 247));

      div {
        @include set-thumb(calc(14px), rgb(255, 255, 255));
      }
    }
  }

  &.disabled {
    span,
    input,
    div { /* stylelint-disable-line */
      cursor: not-allowed;
    }
  }

  &.dark {
    span {
      div {
        box-shadow: rgba(0, 0, 0, 0.2) 0 1px 2px 0, rgba(0, 0, 0, 0.1) 0 1px 3px 0;

        @include set-thumb(calc(14px), rgb(0, 0, 0));
      }

      &:not(.checked) {
        @include set-style(rgb(102, 102, 102));

        div {
          @include set-thumb(0, rgb(0, 0, 0));
        }
      }
    }
  }
}
</style>

<template>
  <div class="z-note" :class="getClasses">
    <b v-if="type">{{ customLabel || type }}:</b>
    {{ content }}
    <div><slot/></div>
  </div>
</template>

<script>
export default {
  name: 'z-note',
  props: {
    content: {
      type: String,
      required: true,
      default: ''
    },
    type: {
      type: String,
      default: '',
      validator: (v) => (['', 'hint', 'alert', 'warning'].includes(v))
    },
    customLabel: {
      type: String,
      default: ''
    },
    dark: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getClasses () {
      const { type, dark } = this

      return {
        hint: type === 'hint',
        alert: type === 'alert',
        warning: type === 'warning',
        dark
      }
    }
  }
}
</script>

<style lang="scss">
@mixin set-border-color-and-b($color) {
  border-color: $color;

  b {
    color: $color;
  }
}

.z-note {
  font-size: 14px;
  line-height: 1.8;
  color: rgb(0, 0, 0);
  padding: 16px 24px;
  border-radius: 4px;
  background: rgb(255, 255, 255);
  border-width: 1px;
  border-style: solid;
  border-color: rgb(221, 221, 221);
  border-image: initial;
  display: block;

  a {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    color: rgb(6, 125, 247);
    font-size: inherit;
    cursor: pointer;
    text-decoration: none;
  }

  b {
    text-transform: uppercase;
    font-weight: 500;
    color: rgb(0, 0, 0);
  }

  &.dark {
    color: rgb(255, 255, 255);
    background: rgb(0, 0, 0);

    b {
      color: rgb(255, 255, 255);
    }
  }

  &.hint {
    @include set-border-color-and-b(rgb(6, 125, 247));
  }

  &.alert {
    @include set-border-color-and-b(rgb(244, 129, 33));
  }

  &.warning {
    @include set-border-color-and-b(rgb(255, 0, 31));
  }
}
</style>

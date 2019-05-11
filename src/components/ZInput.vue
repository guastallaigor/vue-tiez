<template>
  <div class="z-input" :style="label ? 'display:inline-flex;width:initial' : ''">
    <span class="label" :class="{'dark': dark}" v-if="label">{{ label }}</span>
    <div class="wrapper" :class="getClasses">
      <span class="icon" v-if="icon"><z-icon :name="icon" :dark="dark" /></span>
      <div>
        <input
          ref="input"
          autocapitalize="off"
          autocomplete="off"
          autocorrect="off"
          :placeholder="placeholder"
          :type="type"
          :disabled="disabled"
          :maxlength="maxLength"
          v-bind="$attrs"
          @blur="onBlur"
          @focus="onFocus"
          v-model="valueComp"
          >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'z-input',
  components: {
    ZIcon: () => import('./ZIcon')
  },
  props: {
    autoFocus: {
      type: Boolean,
      default: false
    },
    dark: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: [String, Number],
      default: ''
    },
    maxLength: {
      type: [String, Number],
      default: ''
    }
  },
  data: () => ({
    focused: false
  }),
  computed: {
    getClasses () {
      const { disabled, dark, focused, error, icon, label } = this

      return {
        disabled,
        focused,
        'inner-input': label,
        error,
        icon,
        dark
      }
    },
    valueComp: {
      get () {
        return this.value
      },
      set (val) {
        if (this.disabled) return

        if (val && val.length > this.maxLength) return

        this.$emit('input', val)
      }
    }
  },
  mounted () {
    if (this.autoFocus) {
      this.$refs.input.focus()
    }
  },
  methods: {
    onFocus (event) {
      this.$emit('focus', event)
      this.focused = true
    },
    onBlur (event) {
      this.$emit('blur', event)
      this.focused = false
    }
  }
}
</script>

<style lang="scss">
.z-input {
  .label {
    background-color: #fafafa;
    border-bottom-left-radius: 5px;
    border-bottom: 1px solid #e1e1e1;
    border-left: 1px solid #e1e1e1;
    border-top-left-radius: 5px;
    border-top: 1px solid #e1e1e1;
    color: #9b9b9b;
    font-size: 14px;
    line-height: 1;
    margin: 0;
    padding: 10px;
    pointer-events: none;
    width: initial;

    &.dark {
      background-color: #111;
      border-bottom: 1px solid #333;
      border-left: 1px solid #333;
      border-top: 1px solid #333;
    }
  }

  .wrapper {
    align-items: center;
    border-radius: 5px;
    border: 1px solid #e1e1e1;
    display: inline-flex;
    height: 37px;
    position: relative;
    transition: border 0.2s ease, color 0.2s ease;
    vertical-align: middle;
    width: 100%;
    background: #fff;

    input {
      background-color: transparent;
      border-radius: 0;
      border: none;
      box-shadow: none;
      position: relative;
      box-sizing: border-box;
      display: block;
      font-size: 14px;
      line-height: 27px;
      outline: 0;
      width: 100%;
      color: rgb(0, 0, 0);
      caret-color: rgb(0, 0, 0);
      height: 100%;
      opacity: 1;

      &:disabled {
        color: #999;
        border-radius: 5px;
        cursor: not-allowed;

        &::placeholder {
          color: #999;
        }
      }
    }

    &.inner-input {
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
      flex: 1;
    }

    &:not(.dark) {
      input {
        background: #fafafa;
      }
    }

    &.dark {
      border: 1px solid #333;
      background: #000;

      input {
        color: #fff;
        caret-color: #fff;
      }
    }

    &.disabled:not(.dark) {
      background: #fafafa;
    }

    &.focused {
      border: 1px solid #888;

      &.dark {
        border: 1px solid #999;
      }
    }

    &.error {
      border: 1px solid red;

      input {
        color: red;

        &::placeholder {
          color: red;
        }
      }

      &.focused {
        border: 1px solid red;
        color: red;
      }
    }

    .icon {
      align-items: center;
      display: flex;
      height: 100%;
      vertical-align: middle;
      padding: 0 14px;
    }

    div:first-child {
      display: block;
      margin: 4px 10px;
      position: relative;
      width: 100%;
    }
  }
}
</style>

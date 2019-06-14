<template>
  <div class="z-input" :style="label ? 'display:inline-flex' : ''" :class="{ right: withLabelRight }">
    <span class="label" :class="{ dark }" v-if="label">{{ label }}</span>
    <div class="wrapper" :class="getClasses">
      <span class="icon" v-if="icon && !withIconRight"><z-icon :name="icon" size="15px" :dark="dark" /></span>
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
      <span class="icon" v-if="icon && withIconRight"><z-icon :name="icon" size="15px" :dark="dark" /></span>
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
    withIconRight: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    withLabelRight: {
      type: Boolean,
      default: false
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
      required: true,
      default: ''
    },
    maxLength: {
      type: [String, Number],
      default: null
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

        if (this.maxLength && ((val && val.length) > this.maxLength)) {
          this.$emit('input', val.substring(0, this.maxLength))

          return
        }

        this.$emit('input', val)
      }
    }
  },
  mounted () {
    this.setAutofocus()
  },
  methods: {
    setAutofocus () {
      if (this.autoFocus) {
        this.$refs.input.focus()
      }
    },
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

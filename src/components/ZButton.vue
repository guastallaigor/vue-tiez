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
    <span v-if="icon && !loading && !withIconRight" class="icon">
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
      const { shadow, type, hover, dark } = this

      if (shadow) {
        return {
          primary: '#fff',
          secondary: 'rgb(102, 102, 102)',
          warning: '#fff',
          highlight: '#fff',
          link: '#0d7df7',
          abort: '#666'
        }[type]
      }

      return {
        primary: hover && dark ? '#fff' : hover ? '#000' : dark ? '#000' : '#fff',
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

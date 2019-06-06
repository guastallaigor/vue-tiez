<template>
  <div class="z-toggle" :class="getClasses">
    <input type="checkbox" v-model="valueComp" name="checkbox" aria-label="toggle">
    <span :class="{'checked': valueComp}" @click="toggle">
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

      return { disabled, dark }
    }
  },
  methods: {
    toggle () {
      this.valueComp = !this.valueComp
    }
  }
}
</script>

<template>
  <label class="z-checkbox">
    <span>
      <input type="checkbox" v-model="valueComp">
      <svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg' :class="{ disabled }" v-show="valueComp">
        <mask id='mask0' mask-type='alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='12' height='12'>
          <path d='M9 0H3C1.34315 0 0 1.34315 0 3V9C0 10.6569 1.34315 12 3 12H9C10.6569 12 12 10.6569 12 9V3C12 1.34315 10.6569 0 9 0Z' fill='white'/>
        </mask>
        <g mask='url(%23mask0)'>
          <path d='M9 0H3C1.34315 0 0 1.34315 0 3V9C0 10.6569 1.34315 12 3 12H9C10.6569 12 12 10.6569 12 9V3C12 1.34315 10.6569 0 9 0Z' :fill='getFillChecked'/>
          <path d='M3.53906 4.79101L6.68945 7.88867L15.1213 -0.543182' :stroke='dark ? "black" : "white"' stroke-width='1.5'/>
        </g>
      </svg>
      <svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg' :class="{ disabled }" v-show="!valueComp">
        <path d='M8.5 0.5H3.5C1.84315 0.5 0.5 1.84315 0.5 3.5V8.5C0.5 10.1569 1.84315 11.5 3.5 11.5H8.5C10.1569 11.5 11.5 10.1569 11.5 8.5V3.5C11.5 1.84315 10.1569 0.5 8.5 0.5Z' :fill='getFill' stroke='#999'/>
      </svg>
    </span>
  </label>
</template>

<script>
export default {
  name: 'z-checkbox',
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
    getFill () {
      const { disabled, dark } = this

      if (!disabled) return ''

      return dark ? '#333' : '#EFEFEF'
    },
    getFillChecked () {
      const { disabled, dark } = this

      if (disabled) return '#999999'

      if (dark) return 'white'

      return 'black'
    }
  }
}
</script>

<style lang="scss">
.z-checkbox {
  cursor: default;

  span {
    display: inline-flex;
    position: relative;

    input[type="checkbox"] {
      margin: 3px 3px 3px 4px;
    }

    svg {
      cursor: pointer;
      display: inline-block;
      height: 12px;
      width: 12px;
      outline: 0;

      &.disabled {
        cursor: not-allowed;
      }
    }
  }
}
</style>

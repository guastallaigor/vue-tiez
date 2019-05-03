<template>
  <label class="z-checkbox">
    <span class="wrapper">
      <input type="checkbox" v-model="valueComp">
      <span class="checkmark"></span>
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
    }
  },
  computed: {
    valueComp: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>

<style lang="scss">
@import url(../scss/input.scss);

.z-checkbox {
  cursor: default;

  .wrapper {
    display: inline-flex;
    position: relative;

    input[type="checkbox"] {
      margin: 3px 3px 3px 4px;
      -webkit-appearance: checkbox;
      background-color: initial;
      padding: initial;
      border: initial;
    }

    .checkmark {
      cursor: pointer;
      display: inline-block;
      height: 12px;
      width: 12px;
      outline: 0;
      background: url("data:image/svg+xml;utf8,<svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'><mask id='mask0' mask-type='alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='12' height='12'><path d='M9 0H3C1.34315 0 0 1.34315 0 3V9C0 10.6569 1.34315 12 3 12H9C10.6569 12 12 10.6569 12 9V3C12 1.34315 10.6569 0 9 0Z' fill='white'/></mask><g mask='url(%23mask0)'><path d='M9 0H3C1.34315 0 0 1.34315 0 3V9C0 10.6569 1.34315 12 3 12H9C10.6569 12 12 10.6569 12 9V3C12 1.34315 10.6569 0 9 0Z' fill='black'/><path d='M3.53906 4.79101L6.68945 7.88867L15.1213 -0.543182' stroke='white' stroke-width='1.5'/></g></svg>");
    }
  }
}
</style>

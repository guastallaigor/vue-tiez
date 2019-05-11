<template>
  <!-- WIP -->
  <div class="z-slider" :style="`width:${width};`">
    <div>
      <div class="rc-slider" ref="elem">
        <div class="rc-slider-rail"></div>
        <div
          class="rc-slider-track"
          :style="`left: 0%; width:${valueComp};`">
        </div>
        <div class="rc-slider-step"></div>
        <div ref="tooltip"
          @mousedown="startDrag"
          @mousemove="doDrag"
          @mouseup="stopDrag">
          <div
            tabindex="0"
            class="rc-slider-handle"
            index="0"
            role="slider"
            aria-valuemin="0"
            aria-valuemax="100"
            :aria-valuenow="valueComp"
            aria-disabled="false"
            :style="`left:${valueComp}%;`">
            {{ valueComp }}
          </div>
        </div>
        <div class="rc-slider-mark"></div>
      </div>
    </div>
  </div>
</template>

<script>
/* WIP */
export default {
  name: 'z-slider',
  props: {
    width: {
      type: String,
      default: '60%'
    },
    value: {
      type: Number,
      required: true,
      default: 0
    },
    dark: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    dragging: false
  }),
  computed: {
    valueComp: {
      get () {
        return this.value
      },
      set (val) {
        let v

        if (val < 0) {
          v = 0
        }

        if (val > 100) {
          v = 100
        }

        this.$emit('input', v)
      }
    },
    gap () {
      return this.size / 100
    }
  },
  mounted () {
    if (this.$refs.elem) {
      this.size = this.$refs.elem.offsetWidth
    }
  },
  methods: {
    startDrag () {
      this.dragging = true
    },
    stopDrag () {
      this.dragging = false
    },
    doDrag (event) {
      if (this.dragging) {
        let value = (this.valueComp / this.gap) - ((this.$refs.tooltip.scrollWidth - 2) / 2)
        this.valueComp = value
      }
    }
  }
}
</script>

<style lang="scss">
/* WIP */
.z-slider {
  div {
    .rc-slider {
      position: relative;
      margin-bottom: 20px;
      height: 14px;
      touch-action: none;
      box-sizing: border-box;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      user-select: none;
      padding: 5px 0;
      border-radius: 50px;

      &-rail {
        position: absolute;
        width: 100%;
        background-color: rgb(0, 0, 0);
        height: 8px;
        border-radius: 50px;
      }

      & * {
        box-sizing: border-box;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      }

      &-track {
        position: absolute;
        left: 0;
        height: 8px;
        background-color: rgb(0, 0, 0);
        border-radius: 50px;
      }

      &-step {
        position: absolute;
        width: 100%;
        height: 8px;
        background: transparent;
      }

      &-handle {
        position: absolute;
        margin-left: 0;
        margin-top: -6px;
        transform: translate3d(-50%, 0, 0);
        height: 20px;
        cursor: grab;
        background-color: rgb(0, 118, 255);
        color: white;
        font-weight: 700;
        font-size: 12px;
        line-height: 20px;
        text-align: center;
        touch-action: pan-x;
        user-select: none;
        border-radius: 10px;
        transition: all 0.1s ease 0s;
        width: 30px;
      }

      &-mark {
        position: absolute;
        top: 18px;
        left: 0;
        width: 100%;
        font-size: 12px;
      }
    }
  }

  &.dark {
    color: rgb(0, 0, 0);
    background: white;
  }
}
</style>

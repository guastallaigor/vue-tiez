<template>
  <div class="z-show-more-toggle" :class="{'dark': dark}">
    <div class="line"></div>
    <button @click="$emit('click')" class="show-more-toggle">{{ more ? 'Show More' : 'Show Less' }}
      <svg width="13px" height="6px" viewBox="0 0 19 10" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g transform="translate(9.000000, 5.000000) rotate(-90.000000) translate(-9.000000, -5.000000) translate(4.000000, -4.000000)" :stroke="dark ? '#fff' : '#000'" stroke-width="1.5" fill="none" fill-rule="evenodd">
          <path d="M9.5 18L.729 9.253"></path>
          <path d="M9.5.5L.698 9.27"></path>
        </g>
      </svg>
    </button>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: 'z-show-more-toggle',
  props: {
    more: {
      type: Boolean,
      default: false
    },
    dark: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.z-show-more-toggle {
  width: calc(100% - 40px);
  margin-top: 20px;
  margin-left: 20px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  min-height: 30px;

  .line {
    -webkit-box-flex: 1;
    flex-grow: 1;
    height: 1px;
    background-color: rgb(234, 234, 234);
  }

  .show-more-toggle {
    box-shadow: rgba(0, 0, 0, 0.06) 0px 4px 4px;
    cursor: pointer;
    font-size: 12px;
    text-transform: uppercase;
    color: rgb(102, 102, 102);
    height: 28px;
    background-color: rgb(255, 255, 255);
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    padding: 5px 15px;
    border-radius: 100px;
    outline: 0px;
    transition: all 0.2s ease 0s;

    &:hover {
      color: rgb(0, 0, 0);
      box-shadow: rgba(0, 0, 0, 0.08) 0px 5px 9px;
    }
  }

  &.dark {
    .line {
      background-color: rgb(51, 51, 51);
    }

    .show-more-toggle {
      color: rgb(153, 153, 153);
      background-color: rgb(0, 0, 0);
      border-width: 1px;
      border-style: solid;
      border-color: rgb(51, 51, 51);
      border-image: initial;

      &:hover {
        color: rgb(255, 255, 255);
        box-shadow: rgba(0, 0, 0, 0.08) 0px 5px 9px;
      }
    }
  }
}
</style>

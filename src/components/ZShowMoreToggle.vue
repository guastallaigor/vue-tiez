<template>
  <div class="z-show-more-toggle" :class="{ dark }">
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
  },
  data: () => ({})
}
</script>

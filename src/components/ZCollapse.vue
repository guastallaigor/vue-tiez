<template>
  <div
    class="z-collapse"
    v-if="copiedItems && copiedItems.length"
    :style="maxWidth ? `max-width:${maxWidth}` : ''"
  >
    <div
      class="collapse"
      v-for="(item, index) in copiedItems"
      :key="index"
      :class="{'dark': dark}"
      @click="changeHeight(item)"
    >
      <h3 role="button" :tabindex="index" :aria-expanded="item.height > 0">
        <span>{{ item[titleAttr] }}</span>
        <span>
          <svg width="15" height="15" fill="none" aria-label="open" viewBox="0 0 15 15" v-show="item.height === 0">
            <line x1="7.5" y1="2.18557e-08" x2="7.5" y2="15" :stroke="getStroke"></line>
            <line x1="15" y1="7.5" x2="-4.37114e-08" y2="7.5" :stroke="getStroke"></line>
          </svg>
          <svg width="15" height="15" fill="none" aria-label="close" viewBox="0 0 15 15" v-show="item.height > 0">
            <line x1="15" y1="7.5" x2="-4.37114e-08" y2="7.5" :stroke="getStroke"></line>
          </svg>
        </span>
      </h3>
      <div class="collapse-content" :style="`height:${item.height}px;`">
        <div>
          <p>{{ item[contentAttr] }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'z-collapse',
  props: {
    items: {
      type: Array,
      required: true
    },
    maxWidth: {
      type: String,
      default: '600px'
    },
    contentAttr: {
      type: String,
      default: 'content'
    },
    titleAttr: {
      type: String,
      default: 'title'
    },
    dark: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    copiedItems: []
  }),
  computed: {
    getStroke () {
      return this.dark ? '#fff' : '#000'
    }
  },
  created () {
    this.setCopiedItems()
  },
  methods: {
    setCopiedItems () {
      this.copiedItems = this.items && this.items.length
        ? this.items.map(it => ({ ...it, height: 0 }))
        : []
    },
    changeHeight (item) {
      item.height = (item.height > 0) ? 0 : 120

      this.copiedItems.forEach(it => {
        if ((item[this.titleAttr] !== it[this.titleAttr]) &&
          (item[this.contentAttr] !== it[this.contentAttr])) {
          it.height = 0
        }
      })
    }
  }
}
</script>

<template>
  <table class="z-table" :class="{ dark }" :style="`width:${width}`">
    <thead v-if="hasItems">
      <tr>
        <th v-for="(header, keyH) in headers" :key="keyH">
          <div> {{ header.name }}</div>
        </th>
    </tr>
    </thead>
    <tbody v-if="hasItems">
      <tr v-for="(item, keyV) in items" :key="keyV" aria-roledescription="row">
        <td v-for="(header, keyI) in headers" :key="keyI">
          <div v-if="header.image && item.image">
            <z-avatar :src="item.image" :dark="dark" />
          </div>
          <div v-else>{{ item[header.key] }}</div>
        </td>
      </tr>
    </tbody>
    <slot v-else />
  </table>
</template>

<script>
export default {
  name: 'z-table',
  components: {
    ZAvatar: () => import('./ZAvatar')
  },
  props: {
    headers: {
      type: Array,
      default: () => ([])
    },
    items: {
      type: Array,
      default: () => ([])
    },
    width: {
      type: String,
      default: '100%'
    },
    dark: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    hasItems () {
      const { items } = this

      return items && items.length
    }
  }
}
</script>

<template>
  <table class="z-table" :class="{'dark': dark}">
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
          <z-avatar v-if="header.image && item.image" :src="item.image" :dark="dark" />
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
    ZAvatar: () => import('@/components/ZAvatar')
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

<style lang="scss">
.z-table {
  border-collapse: separate;
  width: 100%;
  border-spacing: 0px;
  border-color: grey;
  display: table;

  th {
    color: rgb(102, 102, 102);
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0px;
    text-align: left;
    vertical-align: top;
    padding: 0px 10px;
    background: rgb(250, 250, 250);
  }

  th, td {
    text-align: left;
    vertical-align: top;
    padding: 0px 10px;
  }

  td:nth-child(1) {
    border-left: 1px solid transparent;
  }

  td:last-child {
    border-right: 1px solid transparent;
  }

  thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;

    tr {
      display: table-row;
      vertical-align: inherit;
      border-color: inherit;

      th {
        border-bottom: 1px solid rgb(234, 234, 234);
        border-top: 1px solid rgb(234, 234, 234);

        div {
          -webkit-box-align: center;
          align-items: center;
          display: flex;
          min-height: 40px;
          font-size: 12px;
        }
      }

      th:nth-child(1) {
        border-bottom: 1px solid rgb(234, 234, 234);
        border-left: 1px solid rgb(234, 234, 234);
        border-radius: 4px 0px 0px 4px;
        border-top: 1px solid rgb(234, 234, 234);
      }

      th:last-child {
        border-bottom: 1px solid rgb(234, 234, 234);
        border-radius: 0px 4px 4px 0px;
        border-right: 1px solid rgb(234, 234, 234);
        border-top: 1px solid rgb(234, 234, 234);
      }
    }
  }

  tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;

    tr {
      display: table-row;
      vertical-align: inherit;
      border-color: inherit;
    }

    tr:not(:last-child) td {
      border-bottom: 1px solid rgb(234, 234, 234);
    }

    td {
      color: rgb(68, 68, 68);
      font-size: 14px;

      div {
        -webkit-box-align: center;
        align-items: center;
        display: flex;
        min-height: 50px;
        flex-flow: row wrap;
      }

      img {
        width: 30px;
        height: 30px;
      }
    }
  }

  &.dark {
    th {
      color: rgb(153, 153, 153);
      background: rgb(17, 17, 17);
      border-bottom: 1px solid rgb(51, 51, 51);
      border-top: 1px solid rgb(51, 51, 51);
    }

    thead {
      tr {
        th:nth-child(1) {
          border-bottom: 1px solid rgb(51, 51, 51);
          border-left: 1px solid rgb(51, 51, 51);
          border-radius: 4px 0px 0px 4px;
          border-top: 1px solid rgb(51, 51, 51);
        }

        th:last-child {
          border-bottom: 1px solid rgb(51, 51, 51);
          border-radius: 0px 4px 4px 0px;
          border-right: 1px solid rgb(51, 51, 51);
          border-top: 1px solid rgb(51, 51, 51);
        }
      }
    }

    tbody {
      td {
        color: rgb(204, 204, 204);
      }

      tr:not(:last-child) td {
        border-bottom: 1px solid rgb(51, 51, 51);
      }

      td:nth-child(1) {
        border-left: 1px solid transparent;
      }

      td:last-child {
        border-right: 1px solid transparent;
      }
    }
  }
}
</style>

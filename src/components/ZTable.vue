<template>
  <table class="z-table" :class="{'dark': dark}" :style="`width:${width}`">
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

<style lang="scss">
@mixin set-div($mw, $setFlex: false) {
  div {
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    min-height: $mw;

    @if ($setFlex == true) {
      flex-flow: row wrap;
    } @else {
      font-size: 12px;
    }
  }
}

@mixin set-borders-y($color) {
  border-bottom: 1px solid $color;
  border-top: 1px solid $color;
}

@mixin set-border-r($color) {
  border-radius: 0px 4px 4px 0px;
  border-right: 1px solid $color;
}

@mixin set-border-l($color) {
  border-left: 1px solid $color;
  border-radius: 4px 0px 0px 4px;
}

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

  thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;

    th {
      @include set-borders-y(rgb(234, 234, 234));
      @include set-div(40px);
    }

    th:nth-child(1) {
      @include set-border-l(rgb(234, 234, 234));
    }

    th:last-child {
      @include set-border-r(rgb(234, 234, 234));
    }

    tr {
      display: table-row;
      vertical-align: inherit;
      border-color: inherit;
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

      @include set-div(50px, true);

      img {
        width: 30px;
        height: 30px;
      }
    }
  }

  &.dark {
    thead {
      th {
        color: rgb(153, 153, 153);
        background: rgb(17, 17, 17);
        @include set-borders-y(rgb(51, 51, 51));
      }

      th:nth-child(1) {
        @include set-border-l(rgb(51, 51, 51));
      }

      th:last-child {
        @include set-border-r(rgb(51, 51, 51));
      }
    }

    tbody {
      td {
        color: rgb(204, 204, 204);
        font-size: 14px;
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

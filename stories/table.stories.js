/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'

import ZTable from '../src/components/ZTable.vue'

const zTableStory = storiesOf('Table', module)
  .addParameters({ backgrounds: [
    { name: 'Blue', value: 'blue' },
    { name: 'Green', value: 'green' },
    { name: 'Yellow', value: 'yellow' },
    { name: 'Orange', value: 'orange' },
    { name: 'Red', value: 'red' },
    { name: 'Purple', value: 'purple' },
    { name: 'Black', value: 'black' },
    { name: 'White', value: 'white', default: true }
  ] })
  .addDecorator(withKnobs)

const headers = [
  {
    name: '',
    key: 'img',
    image: true
  },
  {
    name: 'NAME',
    key: 'name'
  },
  {
    name: 'USERNAME',
    key: 'userName'
  }
]

const items = [
  {
    image: 'https://zeit.co/api/www/avatar/?u=evilrabbit&s=160',
    name: 'Evil Rabbit',
    userName: 'evilrabbit'
  },
  {
    image: 'https://zeit.co/api/www/avatar/?u=rauchg&s=160',
    name: 'Guilermo Rauch',
    userName: 'rauchg'
  }
]

zTableStory.add('Template', () => ({
  components: { ZTable },
  props: {
    headers: {
      type: Array,
      default: [ ...headers.map(it => ({ ...it })) ]
    },
    items: {
      type: Array,
      default: [ ...items.map(it => ({ ...it })) ]
    },
    width: {
      type: String,
      default: text('Width', '100%')
    },
    dark: {
      type: Boolean,
      default: boolean('Dark', false)
    }
  },
  template: '<z-table :items="items" :headers="headers" :dark="dark" :width="width" />'
}))
  .add('Slot', () => ({
    components: { ZTable },
    props: {
      width: {
        type: String,
        default: text('Width', '100%')
      },
      dark: {
        type: Boolean,
        default: boolean('Dark', false)
      }
    },
    template: `<z-table :dark="dark" :width="width">
      <table>
        <thead>
          <tr>
            <th column="0" class="table-cell head-cell">
              <div></div>
            </th>
            <th column="1" class="table-cell head-cell">
              <div>NAME</div>
            </th>
            <th column="2" class="table-cell head-cell">
              <div>USERNAME</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr aria-roledescription="row" class="row">
            <td class="table-cell row-cell">
              <div>
                <span class="avatar">
                  <img async="" decoding="async" loading="lazy" src="https://zeit.co/api/www/avatar/?u=evilrabbit&amp;s=160" width="30" height="30">
                </span>
              </div>
            </td>
            <td class="table-cell row-cell">
              <div>Evil Rabbit</div>
            </td>
            <td class="table-cell row-cell">
              <div>evilrabbit</div>
            </td>
          </tr>
          <tr aria-roledescription="row" class="row">
            <td class="table-cell row-cell">
              <div>
                <span class="avatar">
                  <img async="" decoding="async" loading="lazy" src="https://zeit.co/api/www/avatar/?u=rauchg&amp;s=160" width="30" height="30">
                </span>
              </div>
            </td>
            <td class="table-cell row-cell">
              <div>Guillermo Rauch</div>
            </td>
            <td class="table-cell row-cell">
              <div>rauchg</div>
            </td>
          </tr>
        </tbody>
      </table>
    </z-table></div>`
  }))
  .add('JSX', () => ({
    components: { ZTable },
    props: {
      headers: {
        type: Array,
        default: [ ...headers.map(it => ({ ...it })) ]
      },
      items: {
        type: Array,
        default: [ ...items.map(it => ({ ...it })) ]
      },
      width: {
        type: String,
        default: text('Width', '100%')
      },
      dark: {
        type: Boolean,
        default: boolean('Dark', false)
      }
    },
    render () {
      return <ZTable items={this.items} headers={this.headers} dark={this.dark} width={this.width} />
    }
  }))

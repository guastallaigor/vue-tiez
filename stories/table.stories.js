/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { withKnobs, boolean } from '@storybook/addon-knobs'

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
    dark: {
      type: Boolean,
      default: boolean('Dark', false)
    }
  },
  template: '<z-table :items="items" :headers="headers" :dark="dark" />'
}))
// .add('JSX', () => ({
//   components: { ZTable },
//   props: {
//     content: {
//       type: String,
//       default: text('Content', '10')
//     },
//     withText: {
//       type: Boolean,
//       default: boolean('With text', false)
//     },
//     color: {
//       type: String,
//       default: radios('Color', {
//         'black': 'black',
//         'red': 'red',
//         'dark': 'dark'
//       }, 'black')
//     }
//   },
//   render () {
//     return <ZTable content={this.content} color={this.color} withText={this.withText} />
//   }
// }))

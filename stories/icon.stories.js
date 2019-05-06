/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { withKnobs, boolean, radios, text } from '@storybook/addon-knobs'

import ZIcon from '../src/components/ZIcon.vue'

const zIconStory = storiesOf('Icon', module)
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

zIconStory.add('Template', () => ({
  components: { ZIcon },
  props: {
    name: {
      type: String,
      default: radios('Name', {
        'add': 'add',
        'arrow': 'arrow',
        'arrow-double': 'arrow-double',
        'up': 'up',
        'down': 'down',
        'left': 'left',
        'right': 'right',
        'camera': 'camera',
        'big-camera': 'big-camera',
        'checked': 'checked',
        'unchecked': 'unchecked',
        'checkmark': 'checkmark',
        'cloud': 'cloud',
        'configuration': 'configuration',
        'copy': 'copy',
        'credit-card': 'credit-card',
        'delete': 'delete',
        'directory': 'directory',
        'close': 'close',
        'open': 'open'
      }, 'add')
    },
    size: {
      type: String,
      default: text('Size', '20px')
    },
    dark: {
      type: Boolean,
      default: boolean('Dark', false)
    }
  },
  template: '<z-icon :name="name" :size="size" :dark="dark" />'
}))

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { withKnobs, boolean } from '@storybook/addon-knobs'

import ZCheckbox from '../src/components/ZCheckbox.vue'

const zCheckboxStory = storiesOf('Checkbox', module)
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

zCheckboxStory.add('Template', () => ({
  components: { ZCheckbox },
  props: {
    value: {
      type: Boolean,
      default: boolean('Check', true)
    }
  },
  template: '<z-checkbox v-model="value" />'
}))

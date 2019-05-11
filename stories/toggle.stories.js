/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { withKnobs, boolean } from '@storybook/addon-knobs'

import ZToggle from '../src/components/ZToggle.vue'

const zToggleStory = storiesOf('Toggle', module)
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

zToggleStory.add('Template', () => ({
  components: { ZToggle },
  props: {
    value: {
      type: Boolean,
      default: boolean('Check', true)
    },
    disabled: {
      type: Boolean,
      default: boolean('Disabled', false)
    },
    dark: {
      type: Boolean,
      default: boolean('Dark', false)
    }
  },
  template: '<z-toggle v-model="value" :disabled="disabled" :dark="dark" />'
}))
  .add('JSX', () => ({
    components: { ZToggle },
    props: {
      value: {
        type: Boolean,
        default: boolean('Check', true)
      },
      disabled: {
        type: Boolean,
        default: boolean('Disabled', false)
      },
      dark: {
        type: Boolean,
        default: boolean('Dark', false)
      }
    },
    render () {
      return <ZToggle disabled={this.disabled} dark={this.dark} vModel={this.value} />
    }
  }))

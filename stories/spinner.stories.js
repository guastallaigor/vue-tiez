/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'

import ZSpinner from '../src/components/ZSpinner.vue'

const zSpinnerStory = storiesOf('Spinner', module)
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

zSpinnerStory.add('Template', () => ({
  components: { ZSpinner },
  props: {
    size: {
      type: String,
      default: text('Size', '20px')
    },
    dark: {
      type: Boolean,
      default: boolean('Dark', false)
    }
  },
  template: '<z-spinner :dark="dark" :size="size" />'
}))
  .add('JSX', () => ({
    components: { ZSpinner },
    props: {
      size: {
        type: String,
        default: text('Size', '20px')
      },
      dark: {
        type: Boolean,
        default: boolean('Dark', false)
      }
    },
    render () {
      return <ZSpinner dark={this.dark} size={this.size} />
    }
  }))

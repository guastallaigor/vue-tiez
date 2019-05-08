/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import ZCode from '../src/components/ZCode.vue'

const zCodeStory = storiesOf('Code', module)
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

zCodeStory.add('Template', () => ({
  components: { ZCode },
  props: {
    text: {
      type: String,
      default: text('Text', 'npm --version')
    },
    withDolar: {
      type: Boolean,
      default: boolean('With dolar', false)
    },
    dark: {
      type: Boolean,
      default: boolean('Dark', false)
    }
  },
  template: '<z-code :text="text" :dark="dark" :with-dolar="withDolar" />'
}))
  .add('JSX', () => ({
    components: { ZCode },
    props: {
      text: {
        type: String,
        default: text('Text', 'npm --version')
      },
      withDolar: {
        type: Boolean,
        default: boolean('With dolar', false)
      },
      dark: {
        type: Boolean,
        default: boolean('Dark', false)
      }
    },
    render () {
      return <ZCode text={this.text} dark={this.dark} withDolar={this.withDolar} />
    }
  }))

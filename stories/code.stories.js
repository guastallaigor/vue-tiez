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
    content: {
      type: String,
      default: text('Content', 'npm --version')
    },
    withDolar: {
      type: Boolean,
      default: boolean('With dolar', false)
    },
    width: {
      type: String,
      default: text('Width', 'auto')
    },
    dark: {
      type: Boolean,
      default: boolean('Dark', false)
    }
  },
  template: '<z-code :content="content" :dark="dark" :with-dolar="withDolar" :width="width" />'
}))
  .add('Slot', () => ({
    components: { ZCode },
    props: {
      content: {
        type: String,
        default: text('Content', 'npm --version')
      },
      withDolar: {
        type: Boolean,
        default: boolean('With dolar', false)
      },
      width: {
        type: String,
        default: text('Width', 'auto')
      },
      dark: {
        type: Boolean,
        default: boolean('Dark', false)
      }
    },
    template: `<z-code :dark="dark" :width="width" :with-dolar="withDolar">
      <span>{{ content }}</span>
    </z-code>`
  }))
  .add('JSX', () => ({
    components: { ZCode },
    props: {
      content: {
        type: String,
        default: text('Content', 'npm --version')
      },
      withDolar: {
        type: Boolean,
        default: boolean('With dolar', false)
      },
      width: {
        type: String,
        default: text('Width', 'auto')
      },
      dark: {
        type: Boolean,
        default: boolean('Dark', false)
      }
    },
    render () {
      return <ZCode content={this.content} dark={this.dark} withDolar={this.withDolar} width={this.width} />
    }
  }))

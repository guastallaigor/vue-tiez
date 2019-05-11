/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { withKnobs, boolean, number } from '@storybook/addon-knobs'

import ZSlider from '../src/components/ZSlider.vue'

const zSliderStory = storiesOf('Slider', module)
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

zSliderStory.add('Template', () => ({
  components: { ZSlider },
  props: {
    value: {
      type: Number,
      default: number('Value', 0)
    },
    dark: {
      type: Boolean,
      default: boolean('Dark', false)
    }
  },
  template: '<z-slider v-model="value" :dark="dark" />'
}))
  .add('JSX', () => ({
    components: { ZSlider },
    props: {
      value: {
        type: Number,
        default: number('Value', 0)
      },
      dark: {
        type: Boolean,
        default: boolean('Dark', false)
      }
    },
    render () {
      return <ZSlider dark={this.dark} vModel={this.value} />
    }
  }))

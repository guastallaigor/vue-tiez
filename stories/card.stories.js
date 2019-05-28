/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import ZCard from '../src/components/ZCard.vue'

const zCardStory = storiesOf('Card', module)
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

zCardStory.add('Template', () => ({
  components: { ZCard },
  props: {
    width: {
      type: String,
      default: text('Width', '600px')
    },
    dark: {
      type: Boolean,
      default: boolean('Dark', false)
    }
  },
  template: '<z-card :width="width" :dark="dark">This is a card</z-card>'
}))
  .add('JSX', () => ({
    components: { ZCard },
    props: {
      width: {
        type: String,
        default: text('Width', '600px')
      },
      dark: {
        type: Boolean,
        default: boolean('Dark', false)
      }
    },
    render () {
      return (
        <ZCard width={this.width} dark={this.dark}>
          This is a card
        </ZCard>
      )
    }
  }))

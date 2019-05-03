/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { withKnobs, text, radios } from '@storybook/addon-knobs'

import ZBadge from '../src/components/ZBadge.vue'

const zBadgeStory = storiesOf('Badge', module)
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

zBadgeStory.add('Template', () => ({
  components: { ZBadge },
  props: {
    text: {
      type: String,
      default: text('Text', '10')
    },
    color: {
      type: String,
      default: radios('Color', {
        'black': 'black',
        'red': 'red',
        'dark': 'dark'
      }, 'black')
    }
  },
  template: '<z-badge :text="text" :color="color" />'
}))
  .add('JSX', () => ({
    components: { ZBadge },
    props: {
      text: {
        type: String,
        default: text('Text', '10')
      },
      color: {
        type: String,
        default: radios('Color', {
          'black': 'black',
          'red': 'red',
          'dark': 'dark'
        }, 'black')
      }
    },
    render () {
      return <ZBadge text={this.text} color={this.color} />
    }
  }))

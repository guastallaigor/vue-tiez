/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { withKnobs, text, radios, boolean } from '@storybook/addon-knobs'

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
    content: {
      type: String,
      default: text('Content', '10')
    },
    withText: {
      type: Boolean,
      default: boolean('With text', false)
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
  template: '<z-badge :content="content" :color="color" :with-text="withText" />'
}))
  .add('Slot', () => ({
    components: { ZBadge },
    props: {
      content: {
        type: String,
        default: text('Content', '10')
      },
      withText: {
        type: Boolean,
        default: boolean('With text', false)
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
    template: `<z-badge :color="color" :with-text="withText">
      <span>{{ content }}</span>
    </z-badge>
    `
  }))
  .add('JSX', () => ({
    components: { ZBadge },
    props: {
      content: {
        type: String,
        default: text('Content', '10')
      },
      withText: {
        type: Boolean,
        default: boolean('With text', false)
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
      return <ZBadge content={this.content} color={this.color} withText={this.withText} />
    }
  }))

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import ZShowMore from '../src/components/ZShowMore.vue'

const zShowMoreStory = storiesOf('Show More', module)
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

zShowMoreStory.add('Template', () => ({
  components: { ZShowMore },
  methods: { action: action('Show more clicked!') },
  props: {
    dark: {
      type: Boolean,
      default: boolean('Dark', false)
    }
  },
  template: '<z-show-more :dark="dark" @click="action" />'
}))
  .add('JSX', () => ({
    components: { ZShowMore },
    methods: { action: action('Show more clicked!') },
    props: {
      dark: {
        type: Boolean,
        default: boolean('Dark', false)
      }
    },
    render () {
      return <ZShowMore dark={this.dark} onClick={this.action} />
    }
  }))

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import ZShowMoreToggle from '../src/components/ZShowMoreToggle.vue'

const zShowMoreToggleStory = storiesOf('Show More Toggle', module)
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

zShowMoreToggleStory.add('Template', () => ({
  components: { ZShowMoreToggle },
  methods: { action: action('Show more clicked!') },
  props: {
    more: {
      type: Boolean,
      default: boolean('More', true)
    },
    dark: {
      type: Boolean,
      default: boolean('Dark', false)
    }
  },
  template: '<z-show-more-toggle :dark="dark" @click="action" :more="more" />'
}))
  .add('JSX', () => ({
    components: { ZShowMoreToggle },
    methods: { action: action('Show more clicked!') },
    props: {
      more: {
        type: Boolean,
        default: boolean('More', true)
      },
      dark: {
        type: Boolean,
        default: boolean('Dark', false)
      }
    },
    render () {
      return <ZShowMoreToggle dark={this.dark} onClick={this.action} more={this.more} />
    }
  }))

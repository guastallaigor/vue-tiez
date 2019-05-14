/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { withKnobs, text, boolean, object } from '@storybook/addon-knobs'

import ZCollapse from '../src/components/ZCollapse.vue'

const zCollapseStory = storiesOf('Collapse', module)
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

const questionA = object('First object', {
  title: 'Question A',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
})
const questionB = object('Second object', {
  title: 'Question B',
  content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
})
const items = [questionA, questionB]

zCollapseStory.add('Template', () => ({
  components: { ZCollapse },
  props: {
    items: {
      type: Array,
      default: [ ...items.map(it => ({ ...it })) ]
    },
    maxWidth: {
      type: String,
      default: text('Max width', '600px')
    },
    contentAttr: {
      type: String,
      default: text('Content', 'content')
    },
    titleAttr: {
      type: String,
      default: text('Title', 'title')
    },
    dark: {
      type: Boolean,
      default: boolean('Dark', false)
    }
  },
  template: '<z-collapse :items="items" :contentAttr="contentAttr" :title-attr="titleAttr" :dark="dark" :max-width="maxWidth" />'
}))
  .add('JSX', () => ({
    components: { ZCollapse },
    props: {
      items: {
        type: Array,
        default: [ ...items.map(it => ({ ...it })) ]
      },
      maxWidth: {
        type: String,
        default: text('Max width', '600px')
      },
      contentAttr: {
        type: String,
        default: text('Content', 'content')
      },
      titleAttr: {
        type: String,
        default: text('Title', 'title')
      },
      dark: {
        type: Boolean,
        default: boolean('Dark', false)
      }
    },
    render () {
      return <ZCollapse
        items={this.items}
        contentAttr={this.contentAttr}
        titleAttr={this.titleAttr}
        dark={this.dark}
        maxWidth={this.maxWidth}
      />
    }
  }))

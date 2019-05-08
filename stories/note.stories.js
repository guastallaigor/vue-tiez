/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import ZNote from '../src/components/ZNote.vue'

const zNoteStory = storiesOf('Note', module)
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

zNoteStory.add('Template', () => ({
  components: { ZNote },
  props: {
    content: {
      type: String,
      default: text('Content', 'This is a note that details something important.')
    },
    type: {
      type: String,
      default: text('Type', 'hint')
    },
    customLabel: {
      type: String,
      default: text('Custom label', '')
    },
    dark: {
      type: Boolean,
      default: boolean('Dark', false)
    }
  },
  template: '<z-note :content="content" :dark="dark" :type="type" :custom-label="customLabel" />'
}))
  .add('Slot', () => ({
    components: { ZNote },
    props: {
      content: {
        type: String,
        default: text('Content', 'This is a note that details something important.')
      },
      type: {
        type: String,
        default: text('Type', 'hint')
      },
      customLabel: {
        type: String,
        default: text('Custom label', '')
      },
      dark: {
        type: Boolean,
        default: boolean('Dark', false)
      }
    },
    template: `<z-note :content="content" :dark="dark" :type="type" :custom-label="customLabel">
      <a href="#" class="jsx-1831630030"><b style="font-weight: 500;text-transform:none;">A link to helpful information.</b></a>
      </z-note>`
  }))
  .add('JSX', () => ({
    components: { ZNote },
    props: {
      content: {
        type: String,
        default: text('Content', 'This is a note that details something important.')
      },
      type: {
        type: String,
        default: text('Type', 'hint')
      },
      customLabel: {
        type: String,
        default: text('Custom label', '')
      },
      dark: {
        type: Boolean,
        default: boolean('Dark', false)
      }
    },
    render () {
      return <ZNote content={this.content} dark={this.dark} type={this.type} customLabel={this.customLabel} />
    }
  }))

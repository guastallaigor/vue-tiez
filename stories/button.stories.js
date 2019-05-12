/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { withKnobs, text, boolean, radios } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import ZButton from '../src/components/ZButton.vue'

const zButtonStory = storiesOf('Button', module)
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

zButtonStory.add('Template', () => ({
  components: { ZButton },
  methods: {
    click: action('Click emitted!')
  },
  props: {
    content: {
      type: String,
      default: text('Content', 'Action')
    },
    icon: {
      type: String,
      default: text('Icon', '')
    },
    withIconRight: {
      type: Boolean,
      default: boolean('With icon right', false)
    },
    disabled: {
      type: Boolean,
      default: boolean('Disabled', false)
    },
    small: {
      type: Boolean,
      default: boolean('Small', false)
    },
    loading: {
      type: Boolean,
      default: boolean('Loading', false)
    },
    abort: {
      type: Boolean,
      default: boolean('Abort', false)
    },
    link: {
      type: Boolean,
      default: boolean('Link', false)
    },
    dark: {
      type: Boolean,
      default: boolean('Dark', false)
    },
    shadow: {
      type: Boolean,
      default: boolean('Shadow', false)
    },
    type: {
      type: String,
      default: radios('Type', {
        primary: 'primary',
        secondary: 'secondary',
        warning: 'warning',
        highlight: 'highlight'
      }, 'primary')
    }
  },
  template: `<z-button
    :content="content"
    :icon="icon"
    :with-icon-right="withIconRight"
    :disabled="disabled"
    :small="small"
    :loading="loading"
    :abort="abort"
    :shadow="shadow"
    :link="link"
    :dark="dark"
    :type="type"
    @click="click"
    />`
}))
// .add('JSX', () => ({
//   components: { ZButton },
//   methods: {
//     blur: action('Blur emitted!'),
//     focus: action('Focus emitted!')
//   },
//   props: {
//     autoFocus: {
//       type: Boolean,
//       default: boolean('Auto focus', true)
//     },
//     dark: {
//       type: Boolean,
//       default: boolean('Dark', false)
//     },
//     disabled: {
//       type: Boolean,
//       default: boolean('Disabled', false)
//     },
//     error: {
//       type: Boolean,
//       default: boolean('Error', false)
//     },
//     label: {
//       type: String,
//       default: text('Label', '')
//     },
//     icon: {
//       type: String,
//       default: text('Icon', '')
//     },
//     placeholder: {
//       type: String,
//       default: text('Placeholder', 'The Evil Rabbit')
//     },
//     type: {
//       type: String,
//       default: text('Type', 'text')
//     },
//     maxLength: {
//       type: [String, Number],
//       default: text('Max length', '')
//     },
//     value: {
//       type: [String, Number],
//       default: text('Value', '')
//     }
//   },
//   render () {
//     return <ZButton
//       autoFocus={this.autoFocus}
//       dark={this.dark}
//       disabled={this.disabled}
//       error={this.error}
//       icon={this.icon}
//       label={this.label}
//       placeholder={this.placeholder}
//       type={this.type}
//       maxLength={this.maxLength}
//       vModel={this.value}
//       onFocus={this.focus}
//       onBlur={this.blur}
//     />
//   }
// }))

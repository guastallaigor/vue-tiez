/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import ZInput from '../src/components/ZInput.vue'
import iconObj from '../config/storybook/assets/icon-obj'

const zInputStory = storiesOf('Input', module)
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

zInputStory.add('Template', () => ({
  components: { ZInput },
  methods: {
    blur: action('Blur emitted!'),
    focus: action('Focus emitted!')
  },
  props: {
    autoFocus: {
      type: Boolean,
      default: boolean('Auto focus', true)
    },
    dark: {
      type: Boolean,
      default: boolean('Dark', false)
    },
    disabled: {
      type: Boolean,
      default: boolean('Disabled', false)
    },
    error: {
      type: Boolean,
      default: boolean('Error', false)
    },
    label: {
      type: String,
      default: text('Label', '')
    },
    icon: {
      type: String,
      default: select('Icon', iconObj, null)
    },
    withIconRight: {
      type: Boolean,
      default: boolean('With icon right', false)
    },
    placeholder: {
      type: String,
      default: text('Placeholder', 'The Evil Rabbit')
    },
    type: {
      type: String,
      default: text('Type', 'text')
    },
    maxLength: {
      type: [String, Number],
      default: text('Max length', '')
    },
    value: {
      type: [String, Number],
      default: text('Value', '')
    }
  },
  template: `<z-input
    :auto-focus="autoFocus"
    :dark="dark"
    :disabled="disabled"
    :error="error"
    :icon="icon"
    :with-icon-right="withIconRight"
    :label="label"
    :placeholder="placeholder"
    :type="type"
    :max-length="maxLength"
    v-model="value"
    @focus="focus"
    @blur="blur"
    />`
}))
  .add('JSX', () => ({
    components: { ZInput },
    methods: {
      blur: action('Blur emitted!'),
      focus: action('Focus emitted!')
    },
    props: {
      autoFocus: {
        type: Boolean,
        default: boolean('Auto focus', true)
      },
      dark: {
        type: Boolean,
        default: boolean('Dark', false)
      },
      disabled: {
        type: Boolean,
        default: boolean('Disabled', false)
      },
      error: {
        type: Boolean,
        default: boolean('Error', false)
      },
      label: {
        type: String,
        default: text('Label', '')
      },
      icon: {
        type: String,
        default: select('Icon', iconObj, null)
      },
      withIconRight: {
        type: Boolean,
        default: boolean('With icon right', false)
      },
      placeholder: {
        type: String,
        default: text('Placeholder', 'The Evil Rabbit')
      },
      type: {
        type: String,
        default: text('Type', 'text')
      },
      maxLength: {
        type: [String, Number],
        default: text('Max length', '')
      },
      value: {
        type: [String, Number],
        default: text('Value', '')
      }
    },
    render () {
      return <ZInput
        autoFocus={this.autoFocus}
        dark={this.dark}
        disabled={this.disabled}
        error={this.error}
        icon={this.icon}
        withIconRight={this.withIconRight}
        label={this.label}
        placeholder={this.placeholder}
        type={this.type}
        maxLength={this.maxLength}
        vModel={this.value}
        onFocus={this.focus}
        onBlur={this.blur}
      />
    }
  }))

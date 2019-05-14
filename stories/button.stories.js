/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { withKnobs, text, boolean, radios, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import ZButton from '../src/components/ZButton.vue'
import iconObj from '../config/storybook/assets/icon-obj'

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
      default: select('Icon', iconObj, null)
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
    dark: {
      type: Boolean,
      default: boolean('Dark', false)
    },
    shadow: {
      type: Boolean,
      default: boolean('Shadow', false)
    },
    active: {
      type: Boolean,
      default: boolean('Active', false)
    },
    type: {
      type: String,
      default: radios('Type', {
        primary: 'primary',
        secondary: 'secondary',
        warning: 'warning',
        highlight: 'highlight',
        link: 'link',
        abort: 'abort'
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
    :shadow="shadow"
    :active="active"
    :dark="dark"
    :type="type"
    @click="click"
    />`
}))
  .add('Slot', () => ({
    components: { ZButton },
    methods: {
      click: action('Click emitted!')
    },
    props: {
      content: {
        type: String,
        default: text('Content', '')
      },
      icon: {
        type: String,
        default: select('Icon', iconObj, null)
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
      dark: {
        type: Boolean,
        default: boolean('Dark', false)
      },
      shadow: {
        type: Boolean,
        default: boolean('Shadow', false)
      },
      active: {
        type: Boolean,
        default: boolean('Active', false)
      },
      type: {
        type: String,
        default: radios('Type', {
          primary: 'primary',
          secondary: 'secondary',
          warning: 'warning',
          highlight: 'highlight',
          link: 'link',
          abort: 'abort'
        }, 'primary')
      }
    },
    template: `<z-button
      :icon="icon"
      :with-icon-right="withIconRight"
      :disabled="disabled"
      :small="small"
      :loading="loading"
      :shadow="shadow"
      :active="active"
      :dark="dark"
      :type="type"
      @click="click">
      Action
      </z-button>`
  }))
  .add('JSX', () => ({
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
        default: select('Icon', iconObj, null)
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
      dark: {
        type: Boolean,
        default: boolean('Dark', false)
      },
      shadow: {
        type: Boolean,
        default: boolean('Shadow', false)
      },
      active: {
        type: Boolean,
        default: boolean('Active', false)
      },
      type: {
        type: String,
        default: radios('Type', {
          primary: 'primary',
          secondary: 'secondary',
          warning: 'warning',
          highlight: 'highlight',
          link: 'link',
          abort: 'abort'
        }, 'primary')
      }
    },
    render () {
      return <ZButton
        content={this.content}
        icon={this.icon}
        withIconRight={this.withIconRight}
        disabled={this.disabled}
        small={this.small}
        loading={this.loading}
        abort={this.abort}
        shadow={this.shadow}
        active={this.active}
        dark={this.dark}
        type={this.type}
        onClick={this.click}
      />
    }
  }))

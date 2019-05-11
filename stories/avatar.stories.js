/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { withKnobs, text, radios, boolean } from '@storybook/addon-knobs'

import ZAvatar from '../src/components/ZAvatar.vue'

const zAvatarStory = storiesOf('Avatar', module)
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

zAvatarStory.add('Template', () => ({
  components: { ZAvatar },
  props: {
    src: {
      type: String,
      default: text('Image source', 'https://ik.imagekit.io/6xhf1gnexgdgk/igor2_HJhiHMa54.png')
    },
    alt: {
      type: String,
      default: text('Alt', 'Photo of Igor')
    },
    size: {
      type: String,
      default: radios('Size', {
        'small': 'small',
        default: '',
        'medium': 'medium',
        'large': 'large'
      }, '')
    },
    dark: {
      type: Boolean,
      default: boolean('Dark', false)
    },
    stacked: {
      type: Boolean,
      default: boolean('Stacked', false)
    }
  },
  template: `<div><z-avatar v-for="n in 3" :key="n" :size="size" :src="src" :dark="dark" :stacked="stacked" :alt="alt" /></div>`
}))
  .add('JSX', () => ({
    components: { ZAvatar },
    props: {
      src: {
        type: String,
        default: text('Image source', 'https://ik.imagekit.io/6xhf1gnexgdgk/igor2_HJhiHMa54.png')
      },
      alt: {
        type: String,
        default: text('Alt', 'Photo of Igor')
      },
      size: {
        type: String,
        default: radios('Size', {
          'small': 'small',
          default: '',
          'medium': 'medium',
          'large': 'large'
        }, '')
      },
      dark: {
        type: Boolean,
        default: boolean('Dark', false)
      },
      stacked: {
        type: Boolean,
        default: boolean('Stacked', false)
      }
    },
    render () {
      const elements = ['1', '2', '3']

      const items = []

      for (const [index] of elements.entries()) {
        items.push(<ZAvatar key={index} src={this.src} size={this.size} dark={this.dark} stacked={this.stacked} alt={this.alt} />)
      }

      return <div>{items}</div>
    }
  }))

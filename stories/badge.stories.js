/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { withKnobs, text, radios } from '@storybook/addon-knobs'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

import ZAvatar from '../src/components/ZAvatar.vue'

const zAvatarStory = storiesOf('Badges', module)
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

zAvatarStory.add('z-badge', () => ({
  components: { ZAvatar },
  props: {
    src: {
      type: String,
      default: text('Image source', 'https://ik.imagekit.io/6xhf1gnexgdgk/igor2_HJhiHMa54.png')
    },
    size: {
      type: String,
      default: radios('Size', {
        'small': 'small',
        default: '',
        'medium': 'medium',
        'large': 'large'
      }, '')
    }
  },
  template: '<img class="z-avatar" :class="size" :src="src" />'
}))
// .add('with JSX', () => ({
//   components: { ZAvatar },
//   render () {
//     return <my-button onClick={this.action}>With JSX</my-button>
//   },
//   methods: { action: linkTo('Button', 'with some emoji') }
// }))

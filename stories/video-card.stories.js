/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import ZVideoCard from '../src/components/ZVideoCard.vue'

const zVideoCardStory = storiesOf('Video Card', module)
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

zVideoCardStory.add('Template', () => ({
  components: { ZVideoCard },
  props: {
    src: {
      type: String,
      default: text('Src', 'https://image.mux.com/R6cYGw4NLjuquRZsxBuyXyzNLmIyZQjZ/thumbnail.jpg?time=15&width=430&height=240&smart_crop=true')
    },
    title: {
      type: String,
      default: text('Title', 'Guillermo Rauch - Universal React Made Easy and Simple')
    },
    subtitle: {
      type: String,
      default: text('Subtitle', 'React Conf 2017')
    },
    width: {
      type: String,
      default: text('Width', '500px')
    },
    dark: {
      type: Boolean,
      default: boolean('Dark', false)
    }
  },
  template: '<z-video-card :src="src" :title="title" :subtitle="subtitle" :width="width" :dark="dark" />'
}))
  .add('JSX', () => ({
    components: { ZVideoCard },
    props: {
      src: {
        type: String,
        default: text('Src', 'https://image.mux.com/R6cYGw4NLjuquRZsxBuyXyzNLmIyZQjZ/thumbnail.jpg?time=15&width=430&height=240&smart_crop=true')
      },
      title: {
        type: String,
        default: text('Title', 'Guillermo Rauch - Universal React Made Easy and Simple')
      },
      subtitle: {
        type: String,
        default: text('Subtitle', 'React Conf 2017')
      },
      width: {
        type: String,
        default: text('Width', '500px')
      },
      dark: {
        type: Boolean,
        default: boolean('Dark', false)
      }
    },
    render () {
      return <ZVideoCard src={this.src} title={this.title} subtitle={this.subtitle} width={this.width} dark={this.dark} />
    }
  }))

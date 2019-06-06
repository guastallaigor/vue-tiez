/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'

import ZScroller from '../src/components/ZScroller.vue'

const ZScrollerStory = storiesOf('Scroller', module)
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

ZScrollerStory.add('Slot', () => ({
  components: { ZScroller },
  props: {
    dark: {
      type: Boolean,
      default: boolean('Dark', false)
    },
    width: {
      type: String,
      default: text('Width', '600px')
    }
  },
  template: `<z-scroller :dark="dark" :width="width">
      <section class="jsx-486962659">
        <section class="jsx-536543241">▲</section>
      </section>
      <section class="jsx-486962659">
        <section class="jsx-536543241">▲</section>
      </section>
      <section class="jsx-486962659">
        <section class="jsx-536543241">▲</section>
      </section>
      <section class="jsx-486962659">
        <section class="jsx-536543241">▲</section>
      </section>
      <section class="jsx-486962659">
        <section class="jsx-536543241">▲</section>
      </section>
      <section class="jsx-486962659">
        <section class="jsx-536543241">▲</section>
      </section>
      <section class="jsx-486962659">
        <section class="jsx-536543241">▲</section>
      </section>
      <section class="jsx-486962659">
        <section class="jsx-536543241">▲</section>
      </section>
      <section class="jsx-486962659">
        <section class="jsx-536543241">▲</section>
      </section>
      <section class="jsx-486962659">
        <section class="jsx-536543241">▲</section>
      </section>
    </z-scroller>`
}))
  .add('JSX', () => ({
    components: { ZScroller },
    props: {
      dark: {
        type: Boolean,
        default: boolean('Dark', false)
      },
      width: {
        type: String,
        default: text('Width', '600px')
      }
    },
    render () {
      return (
        <ZScroller width={this.width} dark={this.dark}>
          <section class="jsx-486962659">
            <section class="jsx-536543241">▲</section>
          </section>
          <section class="jsx-486962659">
            <section class="jsx-536543241">▲</section>
          </section>
          <section class="jsx-486962659">
            <section class="jsx-536543241">▲</section>
          </section>
          <section class="jsx-486962659">
            <section class="jsx-536543241">▲</section>
          </section>
          <section class="jsx-486962659">
            <section class="jsx-536543241">▲</section>
          </section>
          <section class="jsx-486962659">
            <section class="jsx-536543241">▲</section>
          </section>
          <section class="jsx-486962659">
            <section class="jsx-536543241">▲</section>
          </section>
          <section class="jsx-486962659">
            <section class="jsx-536543241">▲</section>
          </section>
          <section class="jsx-486962659">
            <section class="jsx-536543241">▲</section>
          </section>
          <section class="jsx-486962659">
            <section class="jsx-536543241">▲</section>
          </section>
        </ZScroller>
      )
    }
  }))

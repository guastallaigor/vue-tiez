import { shallowMount } from '@vue/test-utils'
import ZScroller from '../../src/components/ZScroller'

describe('When I create the ZScroller component', () => {
  const createComponent = (propsData = {}, slot) => {
    return shallowMount(ZScroller, {
      propsData,
      slots: {
        default: slot || 'ZScroller'
      }
    })
  }

  it('should be a Vue instance', () => {
    const wrapper = createComponent()
    expect(wrapper.find(ZScroller).isVueInstance()).toBe(true)
  })

  it('should have a width auto and dark false by default', () => {
    const wrapper = createComponent()
    const scroller = wrapper.find('.z-scroller')
    expect(scroller.exists()).toBe(true)
    expect(scroller.classes().length).toBe(1)
    expect(scroller.classes()).toEqual(['z-scroller'])
    expect(scroller.attributes().style).toBe('width: auto;')
  })

  it('should change the width to 300px', () => {
    const wrapper = createComponent({ width: '300px' })
    const scroller = wrapper.find('.z-scroller')
    expect(scroller.exists()).toBe(true)
    expect(scroller.classes().length).toBe(1)
    expect(scroller.attributes().style).toBe('width: 300px;')
  })

  it('should add a dark class', () => {
    const wrapper = createComponent({ dark: true })
    const scroller = wrapper.find('.z-scroller')
    expect(scroller.exists()).toBe(true)
    expect(scroller.classes().length).toBe(2)
    expect(scroller.classes()).toEqual(['z-scroller', 'dark'])
  })

  it('should have a slot', () => {
    const wrapper = createComponent({}, '<span>test with slot</span>')
    const scroller = wrapper.find('.z-scroller')
    expect(scroller.exists()).toBe(true)
    expect(scroller.classes().length).toBe(1)
    expect(scroller.classes()).toEqual(['z-scroller'])
    expect(scroller.html()).toBe('<div class="z-scroller" style="width: auto;"><div class="inner"><span>test with slot</span></div></div>')
  })

  it('should match snapshot', () => {
    const wrapper = createComponent({
      width: 'auto',
      dark: false
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})

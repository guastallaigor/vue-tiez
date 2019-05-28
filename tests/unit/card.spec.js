import { shallowMount } from '@vue/test-utils'
import ZCard from '../../src/components/ZCard'

describe('When I create the ZCard component', () => {
  const createComponent = (propsData = {}, slot) => {
    return shallowMount(ZCard, {
      propsData,
      slots: {
        default: slot || 'ZCard'
      }
    })
  }

  it('should be a Vue instance', () => {
    const wrapper = createComponent()
    expect(wrapper.find(ZCard).isVueInstance()).toBe(true)
  })

  it('should have a width auto and dark false by default', () => {
    const wrapper = createComponent()
    const card = wrapper.find('.z-card')
    expect(card.exists()).toBe(true)
    expect(card.classes().length).toBe(1)
    expect(card.classes()).toEqual(['z-card'])
    expect(card.attributes().style).toBe('width: auto;')
  })

  it('should change the width to 300px when the width prop is passed', () => {
    const wrapper = createComponent({ width: '300px' })
    const card = wrapper.find('.z-card')
    expect(card.exists()).toBe(true)
    expect(card.classes().length).toBe(1)
    expect(card.attributes().style).toBe('width: 300px;')
  })

  it('should add a dark color when dark prop is passed', () => {
    const wrapper = createComponent({ dark: true })
    const card = wrapper.find('.z-card')
    expect(card.exists()).toBe(true)
    expect(card.classes().length).toBe(2)
    expect(card.classes()).toEqual(['z-card', 'dark'])
  })

  it('should match snapshot', () => {
    const wrapper = createComponent({
      width: 'auto',
      dark: false
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})

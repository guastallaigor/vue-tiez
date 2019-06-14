import { shallowMount } from '@vue/test-utils'
import ZBadge from '../../src/components/ZBadge'

describe('When I create the ZBadge component', () => {
  const createComponent = (propsData = {}, slot) => {
    const object = slot
      ? {
        propsData,
        slots: {
          default: slot
        }
      }
      : { propsData }

    return shallowMount(ZBadge, object)
  }

  it('should be a Vue instance', () => {
    const wrapper = createComponent({ content: 10 })
    expect(wrapper.find(ZBadge).isVueInstance()).toBe(true)
  })

  it('should have a number content and default color', () => {
    const wrapper = createComponent({ content: 10 })
    const badge = wrapper.find('.z-badge')
    expect(badge.exists()).toBe(true)
    expect(badge.classes().length).toBe(2)
    expect(badge.classes()).toEqual(['z-badge', 'black'])
    expect(badge.text()).toBe('10')
  })

  it('should have a number content and a black color', () => {
    const wrapper = createComponent({ content: 10, color: 'black' })
    const badge = wrapper.find('.z-badge')
    expect(badge.exists()).toBe(true)
    expect(badge.classes().length).toBe(2)
    expect(badge.classes()).toEqual(['z-badge', 'black'])
    expect(badge.text()).toBe('10')
  })

  it('should have a number content and a red color', () => {
    const wrapper = createComponent({ content: 10, color: 'red' })
    const badge = wrapper.find('.z-badge')
    expect(badge.exists()).toBe(true)
    expect(badge.classes().length).toBe(2)
    expect(badge.classes()).toEqual(['z-badge', 'red'])
    expect(badge.text()).toBe('10')
  })

  it('should have a number content and a dark color', () => {
    const wrapper = createComponent({ content: 10, color: 'dark' })
    const badge = wrapper.find('.z-badge')
    expect(badge.exists()).toBe(true)
    expect(badge.classes().length).toBe(2)
    expect(badge.classes()).toEqual(['z-badge', 'dark'])
    expect(badge.text()).toBe('10')
  })

  it('should have a text content and a withText prop passed', () => {
    const wrapper = createComponent({ content: 'Content', withText: true })
    const badge = wrapper.find('.z-badge')
    expect(badge.exists()).toBe(true)
    expect(badge.classes().length).toBe(3)
    expect(badge.classes()).toEqual(['z-badge', 'black', 'with-text'])
    expect(badge.text()).toBe('Content')
  })

  it('should validate all the props color', () => {
    const wrapper = createComponent({ content: 'Content' })
    const color = wrapper.vm.$options.props.color
    expect(color.required).toBeFalsy()
    expect(color.type).toBe(String)
    expect(color.default).toBe('black')
    expect(color.validator && color.validator('red')).toBeTruthy()
    expect(color.validator && color.validator('black')).toBeTruthy()
    expect(color.validator && color.validator('dark')).toBeTruthy()
    const badge = wrapper.find('.z-badge')
    expect(badge.exists()).toBe(true)
  })

  it('should match snapshot', () => {
    const wrapper = createComponent({
      content: 'Content',
      withText: true,
      color: 'black'
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})

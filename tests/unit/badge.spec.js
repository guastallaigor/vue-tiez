import { shallowMount } from '@vue/test-utils'
import ZBadge from '../../src/components/ZBadge'

describe('When I create the ZBadge component', () => {
  const createComponent = (propsData = {}, slot) => {
    return shallowMount(ZBadge, {
      propsData,
      slots: {
        default: slot || 'ZBadge'
      }
    })
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
    expect(badge.html()).toBe('<span class="z-badge black">10</span>')
  })

  it('should have a number content and a black color', () => {
    const wrapper = createComponent({ content: 10, color: 'black' })
    const badge = wrapper.find('.z-badge')
    expect(badge.exists()).toBe(true)
    expect(badge.classes().length).toBe(2)
    expect(badge.classes()).toEqual(['z-badge', 'black'])
    expect(badge.html()).toBe('<span class="z-badge black">10</span>')
  })

  it('should have a number content and a red color', () => {
    const wrapper = createComponent({ content: 10, color: 'red' })
    const badge = wrapper.find('.z-badge')
    expect(badge.exists()).toBe(true)
    expect(badge.classes().length).toBe(2)
    expect(badge.classes()).toEqual(['z-badge', 'red'])
    expect(badge.html()).toBe('<span class="z-badge red">10</span>')
  })

  it('should have a number content and a dark color', () => {
    const wrapper = createComponent({ content: 10, color: 'dark' })
    const badge = wrapper.find('.z-badge')
    expect(badge.exists()).toBe(true)
    expect(badge.classes().length).toBe(2)
    expect(badge.classes()).toEqual(['z-badge', 'dark'])
    expect(badge.html()).toBe('<span class="z-badge dark">10</span>')
  })

  it('should have a text content and a withText prop passed', () => {
    const wrapper = createComponent({ content: 'Content', withText: true })
    const badge = wrapper.find('.z-badge')
    expect(badge.exists()).toBe(true)
    expect(badge.classes().length).toBe(3)
    expect(badge.classes()).toEqual(['z-badge', 'black', 'with-text'])
    expect(badge.html()).toBe('<span class="z-badge black with-text">Content</span>')
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

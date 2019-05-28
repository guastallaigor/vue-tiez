import { shallowMount } from '@vue/test-utils'
import ZCode from '../../src/components/ZCode'

describe('When I create the ZCode component', () => {
  const createComponent = (propsData = {}, slot) => {
    return shallowMount(ZCode, {
      propsData,
      slots: {
        default: slot || 'ZCode'
      }
    })
  }

  it('should be a Vue instance', () => {
    const wrapper = createComponent({ content: 'Content' })
    expect(wrapper.find(ZCode).isVueInstance()).toBe(true)
  })

  it('should have a content', () => {
    const wrapper = createComponent({ content: 'Content' })
    const code = wrapper.find('.z-code')
    expect(code.exists()).toBe(true)
    expect(code.classes().length).toBe(1)
    expect(code.classes()).toEqual(['z-code'])
    expect(code.html()).toBe('<div class="z-code">Content</div>')
  })

  it('should have a content with dolar', () => {
    const wrapper = createComponent({ content: 'Content', withDolar: true })
    const code = wrapper.find('.z-code')
    expect(code.exists()).toBe(true)
    expect(code.classes().length).toBe(2)
    expect(code.classes()).toEqual(['z-code', 'with-dolar'])
    expect(code.html()).toBe('<div class="z-code with-dolar">Content</div>')
  })

  it('should have a content and dark class', () => {
    const wrapper = createComponent({ content: 'Content', dark: true })
    const code = wrapper.find('.z-code')
    expect(code.exists()).toBe(true)
    expect(code.classes().length).toBe(2)
    expect(code.classes()).toEqual(['z-code', 'dark'])
    expect(code.html()).toBe('<div class="z-code dark">Content</div>')
  })

  it('should have a slot instead of a content', () => {
    const wrapper = createComponent({}, '<span>test with slot</span>')
    const code = wrapper.find('.z-code')
    expect(code.exists()).toBe(true)
    expect(code.classes().length).toBe(1)
    expect(code.classes()).toEqual(['z-code'])
    expect(code.html()).toBe('<div class="z-code"><span>test with slot</span></div>')
  })

  it('should match snapshot', () => {
    const wrapper = createComponent({
      content: 'Content',
      withDolar: true,
      dark: false
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})

import { shallowMount } from '@vue/test-utils'
import ZSpinner from '../../src/components/ZSpinner'

describe('When I create the ZSpinner component', () => {
  const createComponent = (propsData = {}, slot) => {
    return shallowMount(ZSpinner, {
      propsData,
      slots: {
        default: slot || 'ZSpinner'
      }
    })
  }

  it('should be a Vue instance', () => {
    const wrapper = createComponent()
    expect(wrapper.find(ZSpinner).isVueInstance()).toBe(true)
  })

  it('should have a size of 20px', () => {
    const wrapper = createComponent()
    const spinner = wrapper.find('.z-spinner')
    expect(spinner.exists()).toBe(true)
    expect(spinner.classes().length).toBe(1)
    expect(spinner.classes()).toEqual(['z-spinner'])
    expect(spinner.attributes().style).toBe('width: 20px; height: 20px;')
    const spinnerChild = wrapper.find('.z-spinner > .spinner')
    expect(spinnerChild.exists()).toBe(true)
    expect(spinnerChild.attributes().style).toBe('width: 20px; height: 20px;')
  })

  it('should have a size of 666px', () => {
    const wrapper = createComponent({ size: '666px' })
    const spinner = wrapper.find('.z-spinner')
    expect(spinner.exists()).toBe(true)
    expect(spinner.classes().length).toBe(1)
    expect(spinner.classes()).toEqual(['z-spinner'])
    expect(spinner.attributes().style).toBe('width: 666px; height: 666px;')
    const spinnerChild = wrapper.find('.z-spinner > .spinner')
    expect(spinnerChild.exists()).toBe(true)
    expect(spinnerChild.attributes().style).toBe('width: 666px; height: 666px;')
  })

  it('should have a dark class', () => {
    const wrapper = createComponent({ dark: true })
    const spinner = wrapper.find('.z-spinner')
    expect(spinner.exists()).toBe(true)
    expect(spinner.classes().length).toBe(2)
    expect(spinner.classes()).toEqual(['z-spinner', 'dark'])
  })

  it('should match snapshot', () => {
    const wrapper = createComponent({
      size: '20px',
      dark: false
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})

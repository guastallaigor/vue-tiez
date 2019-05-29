import { shallowMount } from '@vue/test-utils'
import ZToggle from '../../src/components/ZToggle'

describe('When I create the ZToggle component', () => {
  const createComponent = (propsData = {}, slot) => {
    return shallowMount(ZToggle, {
      propsData: propsData,
      slots: {
        default: slot || 'ZToggle'
      }
    })
  }

  it('should be a Vue instance', () => {
    const wrapper = createComponent({ value: false })
    expect(wrapper.find(ZToggle).isVueInstance()).toBe(true)
  })

  it('should have a default z-toggle state unchecked', () => {
    const wrapper = createComponent({ value: false })
    const toggle = wrapper.find('.z-toggle')
    expect(toggle.exists()).toBe(true)
    expect(toggle.classes().length).toBe(1)
    expect(toggle.classes()).toEqual(['z-toggle'])
    const checkbox = wrapper.find('.z-toggle > input')
    expect(checkbox.exists()).toBe(true)
    expect(checkbox.html()).toBe('<input type="checkbox" name="checkbox" aria-label="toggle">')
    expect(wrapper.vm.value).toBe(false)
  })

  it('should be checked', () => {
    const wrapper = createComponent({ value: true })
    const toggle = wrapper.find('.z-toggle')
    expect(toggle.exists()).toBe(true)
    expect(toggle.classes().length).toBe(1)
    expect(toggle.classes()).toEqual(['z-toggle'])
    const checkbox = wrapper.find('.z-toggle > input')
    expect(checkbox.exists()).toBe(true)
    expect(wrapper.vm.value).toBe(true)
    const span = wrapper.find('.z-toggle > input + span')
    expect(span.exists()).toBe(true)
    expect(span.classes()).toEqual(['checked'])
  })

  it('should check', () => {
    const wrapper = createComponent({ value: false })
    wrapper.setMethods({ toggle: jest.fn() })
    const toggle = wrapper.find('.z-toggle')
    expect(toggle.exists()).toBe(true)
    expect(toggle.classes().length).toBe(1)
    expect(toggle.classes()).toEqual(['z-toggle'])
    const checkbox = wrapper.find('.z-toggle > input')
    expect(checkbox.exists()).toBe(true)
    expect(wrapper.vm.value).toBe(false)
    expect(wrapper.vm.valueComp).toBe(false)
    const span = wrapper.find('.z-toggle > span')
    expect(span.exists()).toBe(true)
    span.trigger('click')
    expect(wrapper.vm.toggle).toHaveBeenCalledTimes(1)
    wrapper.setProps({ value: true })
    expect(wrapper.vm.value).toBe(true)
    expect(wrapper.vm.valueComp).toBe(true)
    expect(span.classes()).toEqual(['checked'])
  })

  it('should not check when disabled', () => {
    const wrapper = createComponent({ value: false, disabled: true })
    wrapper.setMethods({ toggle: jest.fn() })
    const toggle = wrapper.find('.z-toggle')
    expect(toggle.exists()).toBe(true)
    expect(toggle.classes().length).toBe(2)
    expect(toggle.classes()).toEqual(['z-toggle', 'disabled'])
    const checkbox = wrapper.find('.z-toggle > input')
    expect(checkbox.exists()).toBe(true)
    expect(wrapper.vm.value).toBe(false)
    expect(wrapper.vm.valueComp).toBe(false)
    const span = wrapper.find('.z-toggle > span')
    expect(span.exists()).toBe(true)
    span.trigger('click')
    expect(wrapper.vm.toggle).toHaveBeenCalledTimes(1)
    expect(wrapper.vm.value).toBe(false)
    expect(wrapper.vm.valueComp).toBe(false)
    expect(span.classes()).toEqual([])
  })

  it('should have a dark class', () => {
    const wrapper = createComponent({ value: false, dark: true })
    wrapper.setMethods({ toggle: jest.fn() })
    const toggle = wrapper.find('.z-toggle')
    expect(toggle.exists()).toBe(true)
    expect(toggle.classes().length).toBe(2)
    expect(toggle.classes()).toEqual(['z-toggle', 'dark'])
  })

  it('should match snapshot', () => {
    const wrapper = createComponent({
      value: false,
      disabled: false,
      dark: false
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})

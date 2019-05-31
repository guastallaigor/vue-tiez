import { shallowMount } from '@vue/test-utils'
import ZCheckbox from '../../src/components/ZCheckbox'

describe('When I create the ZCheckbox component', () => {
  const createComponent = (propsData = {}, slot) => {
    return shallowMount(ZCheckbox, {
      propsData: propsData,
      slots: {
        default: slot || 'ZCheckbox'
      }
    })
  }

  it('should be a Vue instance', () => {
    const wrapper = createComponent({ value: true })
    expect(wrapper.find(ZCheckbox).isVueInstance()).toBe(true)
  })

  it('should have a dark mode when unchecked', () => {
    const wrapper = createComponent({ value: false, dark: true })
    const checkbox = wrapper.find('.z-checkbox')
    expect(checkbox.exists()).toBe(true)
    const path = wrapper.find('.z-checkbox > span > svg > path')
    expect(path.exists()).toBe(true)
    expect(path.attributes().fill).toBe('')
  })

  it('should have a dark mode when unchecked and disabled', () => {
    const wrapper = createComponent({ value: false, dark: true, disabled: true })
    const checkbox = wrapper.find('.z-checkbox')
    expect(checkbox.exists()).toBe(true)
    const path = wrapper.find('.z-checkbox > span > svg > path')
    expect(path.exists()).toBe(true)
    expect(path.attributes().fill).toBe('#333')
  })

  it('should have a dark mode when checked', () => {
    const wrapper = createComponent({ value: true, dark: true })
    const checkbox = wrapper.find('.z-checkbox')
    expect(checkbox.exists()).toBe(true)
    const pathFirst = wrapper.find('.z-checkbox > span > svg > g > path:first-child')
    expect(pathFirst.exists()).toBe(true)
    expect(pathFirst.attributes().fill).toBe('white')
    const pathLast = wrapper.find('.z-checkbox > span > svg > g > path:last-child')
    expect(pathLast.exists()).toBe(true)
    expect(pathLast.attributes().stroke).toBe('black')
  })

  it('should have a dark mode when checked and disabled', () => {
    const wrapper = createComponent({ value: true, dark: true, disabled: true })
    const checkbox = wrapper.find('.z-checkbox')
    expect(checkbox.exists()).toBe(true)
    const pathFirst = wrapper.find('.z-checkbox > span > svg > g > path:first-child')
    expect(pathFirst.exists()).toBe(true)
    expect(pathFirst.attributes().fill).toBe('#999999')
    const pathLast = wrapper.find('.z-checkbox > span > svg > g > path:last-child')
    expect(pathLast.exists()).toBe(true)
    expect(pathLast.attributes().stroke).toBe('black')
  })

  it('should have a default state when unchecked', () => {
    const wrapper = createComponent({ value: false })
    const checkbox = wrapper.find('.z-checkbox')
    expect(checkbox.exists()).toBe(true)
    const path = wrapper.find('.z-checkbox > span > svg > path')
    expect(path.exists()).toBe(true)
    expect(path.attributes().fill).toBe('')
  })

  it('should have a default state when checked', () => {
    const wrapper = createComponent({ value: true })
    const checkbox = wrapper.find('.z-checkbox')
    expect(checkbox.exists()).toBe(true)
    const pathFirst = wrapper.find('.z-checkbox > span > svg > g > path:first-child')
    expect(pathFirst.exists()).toBe(true)
    expect(pathFirst.attributes().fill).toBe('black')
    const pathLast = wrapper.find('.z-checkbox > span > svg > g > path:last-child')
    expect(pathLast.exists()).toBe(true)
    expect(pathLast.attributes().stroke).toBe('white')
  })

  it('should have a disabled class when unchecked', async () => {
    const wrapper = createComponent({ value: false, disabled: true })
    const checkbox = wrapper.find('.z-checkbox > span > input')
    expect(checkbox.exists()).toBe(true)
    const svg = wrapper.find('.z-checkbox > span > svg')
    expect(svg.exists()).toBe(true)
    expect(svg.classes().length).toBe(1)
    expect(svg.classes()).toEqual(['disabled'])
    checkbox.setChecked()
    checkbox.trigger('input')
    wrapper.vm.valueComp = false
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted().input).toBeFalsy()
  })

  it('should have a disabled class when checked', async () => {
    const wrapper = createComponent({ value: true, disabled: true })
    const checkbox = wrapper.find('.z-checkbox > span > input')
    expect(checkbox.exists()).toBe(true)
    const svg = wrapper.find('.z-checkbox > span > svg')
    expect(svg.exists()).toBe(true)
    expect(svg.classes().length).toBe(1)
    expect(svg.classes()).toEqual(['disabled'])
    checkbox.setChecked()
    checkbox.trigger('input')
    wrapper.vm.valueComp = false
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted().input).toBeFalsy()
  })

  it('should be able to check when unchecked', async () => {
    const wrapper = createComponent({ value: false })
    const checkbox = wrapper.find('.z-checkbox > span > input')
    expect(checkbox.exists()).toBe(true)
    checkbox.setChecked()
    checkbox.trigger('input')
    wrapper.vm.valueComp = true
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted().input).toBeTruthy()
  })

  it('should be able to uncheck when checked', async () => {
    const wrapper = createComponent({ value: true })
    const checkbox = wrapper.find('.z-checkbox > span > input')
    expect(checkbox.exists()).toBe(true)
    checkbox.setChecked()
    checkbox.trigger('input')
    wrapper.vm.valueComp = false
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted().input).toBeTruthy()
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

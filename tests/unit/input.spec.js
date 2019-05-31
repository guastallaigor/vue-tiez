import { shallowMount, mount } from '@vue/test-utils'
import ZInput from '../../src/components/ZInput'
import ZIcon from '../../src/components/ZIcon'

describe('When I create the ZInput component', () => {
  const createComponent = (propsData = {}, slot) => {
    return shallowMount(ZInput, {
      propsData: propsData,
      stubs: { ZIcon },
      slots: {
        default: slot || 'ZInput'
      }
    })
  }

  it('should be a Vue instance', () => {
    const wrapper = createComponent({ value: 'test' })
    expect(wrapper.find(ZInput).isVueInstance()).toBe(true)
  })

  it('should mount the ZIcon component', (done) => {
    const wrapper = mount(ZInput, {
      propsData: { value: 'test', icon: 'add' }
    })
    const input = wrapper.find('.z-input')
    expect(input.exists()).toBe(true)
    expect(input.classes().length).toBe(1)
    expect(input.classes()).toEqual(['z-input'])
    setTimeout(() => {
      expect(wrapper.find(ZIcon).exists()).toBe(true)
      const circle = wrapper.find('.z-input > .wrapper > .icon > svg > circle')
      expect(circle.attributes().stroke).toBe('#EAEAEA')
      const line = wrapper.find('.z-input > .wrapper > .icon > svg > line')
      expect(line.attributes().stroke).toBe('#999999')
      const wrapperDiv = wrapper.find('.z-input > .wrapper')
      expect(wrapperDiv.exists()).toBe(true)
      expect(wrapperDiv.classes().length).toBe(2)
      expect(wrapperDiv.classes()).toEqual(['wrapper', 'icon'])
      done()
    })
  })

  it('should mount the ZIcon component with a dark class', (done) => {
    const wrapper = mount(ZInput, {
      propsData: { value: 'test', icon: 'add', dark: true }
    })
    const input = wrapper.find('.z-input')
    expect(input.exists()).toBe(true)
    expect(input.classes().length).toBe(1)
    expect(input.classes()).toEqual(['z-input'])
    setTimeout(() => {
      expect(wrapper.find(ZIcon).exists()).toBe(true)
      const circle = wrapper.find('.z-input > .wrapper > .icon > svg > circle')
      expect(circle.attributes().stroke).toBe('#444')
      const line = wrapper.find('.z-input > .wrapper > .icon > svg > line')
      expect(line.attributes().stroke).toBe('#999999')
      const wrapperDiv = wrapper.find('.z-input > .wrapper')
      expect(wrapperDiv.exists()).toBe(true)
      expect(wrapperDiv.classes().length).toBe(3)
      expect(wrapperDiv.classes()).toEqual(['wrapper', 'icon', 'dark'])
      done()
    })
  })

  it('should have a dark class', () => {
    const wrapper = createComponent({ value: '', dark: true })
    const inputLabel = wrapper.find('.z-input > .wrapper')
    expect(inputLabel.exists()).toBe(true)
    expect(inputLabel.classes().length).toBe(2)
    expect(inputLabel.classes()).toEqual(['wrapper', 'dark'])
  })

  it('should have a dark class and have a label', () => {
    const wrapper = createComponent({ value: '', dark: true, label: 'Label' })
    const label = wrapper.find('.z-input > .label')
    expect(label.exists()).toBe(true)
    expect(label.classes().length).toBe(2)
    expect(label.classes()).toEqual(['label', 'dark'])
  })

  it('should have a label', () => {
    const wrapper = createComponent({ value: '', label: 'Label' })
    const label = wrapper.find('.z-input > .label')
    expect(label.exists()).toBe(true)
    expect(label.classes().length).toBe(1)
    expect(label.classes()).toEqual(['label'])
    const input = wrapper.find('.z-input')
    expect(input.exists()).toBe(true)
    expect(input.classes().length).toBe(1)
    expect(input.attributes().style).toBe('display: inline-flex;')
    const wrapperDiv = wrapper.find('.z-input > .wrapper')
    expect(wrapperDiv.exists()).toBe(true)
    expect(wrapperDiv.classes().length).toBe(2)
    expect(wrapperDiv.classes()).toEqual(['wrapper', 'inner-input'])
  })

  it('should have a type text', async () => {
    const wrapper = createComponent({ value: '', type: 'text' })
    const input = wrapper.find('.z-input > .wrapper > div > input')
    expect(input.exists()).toBe(true)
    expect(input.attributes().type).toBe('text')
    input.element.value = 'test'
    input.trigger('input')
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.$refs.input.value).toBe('test')
    expect(wrapper.emitted().input).toBeTruthy()
    expect(wrapper.emitted().input[0]).toEqual(['test'])
  })

  it('should have a type number', async () => {
    const wrapper = createComponent({ value: '', type: 'number' })
    const input = wrapper.find('.z-input > .wrapper > div > input')
    expect(input.exists()).toBe(true)
    expect(input.attributes().type).toBe('number')
    input.element.value = 123
    input.trigger('input')
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.$refs.input.value).toBe('123')
    expect(wrapper.emitted().input).toBeTruthy()
    expect(wrapper.emitted().input[0]).toEqual(['123'])
  })

  it('should have a maxLength of 3 characters', () => {
    const wrapper = createComponent({ value: '', maxLength: 3 })
    const input = wrapper.find('.z-input > .wrapper > div > input')
    expect(input.exists()).toBe(true)
    expect(input.attributes().type).toBe('text')
    expect(input.attributes().maxlength).toBe('3')
  })

  it('should have a disable attribute and class', async () => {
    const wrapper = createComponent({ value: '', disabled: true })
    const input = wrapper.find('.z-input > .wrapper > div > input')
    expect(input.exists()).toBe(true)
    expect(input.attributes().type).toBe('text')
    expect(input.attributes().disabled).toBe('disabled')
    const wrapperDiv = wrapper.find('.z-input > .wrapper')
    expect(wrapperDiv.exists()).toBe(true)
    expect(wrapperDiv.classes().length).toBe(2)
    expect(wrapperDiv.classes()).toEqual(['wrapper', 'disabled'])
    input.element.value = 'test'
    input.trigger('input')
    await wrapper.vm.$nextTick()
    wrapper.vm.valueComp = 'other'
    expect(wrapper.vm.valueComp).toBe('')
    expect(wrapper.emitted().input).toBeFalsy()
  })

  it('should have a placeholder', () => {
    const wrapper = createComponent({ value: '', placeholder: 'Placeholder' })
    const input = wrapper.find('.z-input > .wrapper > div > input')
    expect(input.exists()).toBe(true)
    expect(input.attributes().placeholder).toBe('Placeholder')
  })

  it('should have an error class', () => {
    const wrapper = createComponent({ value: '', error: true })
    const wrapperDiv = wrapper.find('.z-input > .wrapper')
    expect(wrapperDiv.exists()).toBe(true)
    expect(wrapperDiv.classes().length).toBe(2)
    expect(wrapperDiv.classes()).toEqual(['wrapper', 'error'])
  })

  it('should emit a blur event', async () => {
    const wrapper = createComponent({ value: '' })
    const input = wrapper.find('.z-input > .wrapper > div > input')
    expect(input.exists()).toBe(true)
    expect(input.attributes().type).toBe('text')
    input.element.value = 'test'
    input.trigger('blur')
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted().blur).toBeTruthy()
    expect(wrapper.vm.focused).toBe(false)
  })

  it('should emit a focus event', async () => {
    const wrapper = createComponent({ value: '', autoFocus: true })
    const input = wrapper.find('.z-input > .wrapper > div > input')
    expect(input.exists()).toBe(true)
    expect(input.attributes().type).toBe('text')
    input.trigger('focus')
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted().focus).toBeTruthy()
    expect(wrapper.vm.focused).toBe(true)
  })

  it('should match snapshot', () => {
    const wrapper = createComponent({
      autoFocus: false,
      dark: false,
      disabled: false,
      error: false,
      icon: '',
      label: '',
      placeholder: '',
      type: 'text',
      value: '',
      maxLength: ''
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})

import { shallowMount, mount } from '@vue/test-utils'
import ZButton from '../../src/components/ZButton'
import ZAnimation from '../../src/components/ZAnimation'
import ZIcon from '../../src/components/ZIcon'

describe('When I create the ZButton component', () => {
  const createComponent = (propsData = {}, slot) => {
    return shallowMount(ZButton, {
      propsData: propsData,
      stubs: { ZAnimation, ZIcon },
      slots: {
        default: slot || 'ZButton'
      }
    })
  }

  it('should be a Vue instance', () => {
    const wrapper = createComponent({ content: 'Test' })
    expect(wrapper.find(ZButton).isVueInstance()).toBe(true)
  })

  it('should have an icon', (done) => {
    const wrapper = mount(ZButton, {
      AsyncComponent: ZIcon,
      propsData: { content: 'test', icon: 'add' }
    })
    const button = wrapper.find('.z-button')
    expect(button.exists()).toBe(true)
    expect(button.classes().length).toBe(3)
    expect(button.classes()).toEqual(['z-button', 'icon', 'primary'])
    setTimeout(() => {
      expect(wrapper.find(ZIcon).exists()).toBe(true)
      const icon = wrapper.find('.z-button > .icon')
      expect(icon.exists()).toBe(true)
      const circle = wrapper.find('.z-button > .icon > svg > circle')
      expect(circle.attributes().stroke).toBe('#fff')
      // const line = wrapper.findAll('.z-input > .wrapper > icon > svg > line')
      // expect(line.at(0).attributes().stroke).toBe('#fff')
      // expect(line.at(1).attributes().stroke).toBe('#fff')
      done()
    })
  })

  // it('should have a dark class', () => {
  //   const wrapper = createComponent({ value: '', dark: true })
  //   const inputLabel = wrapper.find('.z-input > .wrapper')
  //   expect(inputLabel.exists()).toBe(true)
  //   expect(inputLabel.classes().length).toBe(2)
  //   expect(inputLabel.classes()).toEqual(['wrapper', 'dark'])
  // })

  // it('should have a dark class and have a label', () => {
  //   const wrapper = createComponent({ value: '', dark: true, label: 'Label' })
  //   const label = wrapper.find('.z-input > .label')
  //   expect(label.exists()).toBe(true)
  //   expect(label.classes().length).toBe(2)
  //   expect(label.classes()).toEqual(['label', 'dark'])
  // })

  // it('should have a label', () => {
  //   const wrapper = createComponent({ value: '', label: 'Label' })
  //   const label = wrapper.find('.z-input > .label')
  //   expect(label.exists()).toBe(true)
  //   expect(label.classes().length).toBe(1)
  //   expect(label.classes()).toEqual(['label'])
  //   const input = wrapper.find('.z-input')
  //   expect(input.exists()).toBe(true)
  //   expect(input.classes().length).toBe(1)
  //   expect(input.attributes().style).toBe('display: inline-flex;')
  //   const wrapperDiv = wrapper.find('.z-input > .wrapper')
  //   expect(wrapperDiv.exists()).toBe(true)
  //   expect(wrapperDiv.classes().length).toBe(2)
  //   expect(wrapperDiv.classes()).toEqual(['wrapper', 'inner-input'])
  // })

  // it('should have a type text', async () => {
  //   const wrapper = createComponent({ value: '', type: 'text' })
  //   const input = wrapper.find('.z-input > .wrapper > div > input')
  //   expect(input.exists()).toBe(true)
  //   expect(input.attributes().type).toBe('text')
  //   input.element.value = 'test'
  //   input.trigger('input')
  //   await wrapper.vm.$nextTick()
  //   expect(wrapper.vm.$refs.input.value).toBe('test')
  //   expect(wrapper.emitted().input).toBeTruthy()
  //   expect(wrapper.emitted().input[0]).toEqual(['test'])
  // })

  // it('should have a type number', async () => {
  //   const wrapper = createComponent({ value: '', type: 'number' })
  //   const input = wrapper.find('.z-input > .wrapper > div > input')
  //   expect(input.exists()).toBe(true)
  //   expect(input.attributes().type).toBe('number')
  //   input.element.value = 123
  //   input.trigger('input')
  //   await wrapper.vm.$nextTick()
  //   expect(wrapper.vm.$refs.input.value).toBe('123')
  //   expect(wrapper.emitted().input).toBeTruthy()
  //   expect(wrapper.emitted().input[0]).toEqual(['123'])
  // })

  // it('should have a maxLength of 3 characters', async () => {
  //   const wrapper = createComponent({ value: '', maxLength: 3 })
  //   const input = wrapper.find('.z-input > .wrapper > div > input')
  //   expect(input.exists()).toBe(true)
  //   expect(input.attributes().type).toBe('text')
  //   expect(input.attributes().maxlength).toBe('3')
  //   wrapper.vm.valueComp = 'teste'
  //   await wrapper.vm.$nextTick()
  //   expect(wrapper.emitted().input).toBeTruthy()
  //   expect(wrapper.emitted().input[0]).toEqual(['tes'])
  // })

  // it('should have a disable attribute and class', async () => {
  //   const wrapper = createComponent({ value: '', disabled: true })
  //   const input = wrapper.find('.z-input > .wrapper > div > input')
  //   expect(input.exists()).toBe(true)
  //   expect(input.attributes().type).toBe('text')
  //   expect(input.attributes().disabled).toBe('disabled')
  //   const wrapperDiv = wrapper.find('.z-input > .wrapper')
  //   expect(wrapperDiv.exists()).toBe(true)
  //   expect(wrapperDiv.classes().length).toBe(2)
  //   expect(wrapperDiv.classes()).toEqual(['wrapper', 'disabled'])
  //   input.element.value = 'test'
  //   input.trigger('input')
  //   await wrapper.vm.$nextTick()
  //   wrapper.vm.valueComp = 'other'
  //   expect(wrapper.vm.valueComp).toBe('')
  //   expect(wrapper.emitted().input).toBeFalsy()
  // })

  // it('should have a placeholder', () => {
  //   const wrapper = createComponent({ value: '', placeholder: 'Placeholder' })
  //   const input = wrapper.find('.z-input > .wrapper > div > input')
  //   expect(input.exists()).toBe(true)
  //   expect(input.attributes().placeholder).toBe('Placeholder')
  // })

  // it('should have an error class', () => {
  //   const wrapper = createComponent({ value: '', error: true })
  //   const wrapperDiv = wrapper.find('.z-input > .wrapper')
  //   expect(wrapperDiv.exists()).toBe(true)
  //   expect(wrapperDiv.classes().length).toBe(2)
  //   expect(wrapperDiv.classes()).toEqual(['wrapper', 'error'])
  // })

  // it('should emit a blur event', async () => {
  //   const wrapper = createComponent({ value: '' })
  //   const input = wrapper.find('.z-input > .wrapper > div > input')
  //   expect(input.exists()).toBe(true)
  //   expect(input.attributes().type).toBe('text')
  //   input.element.value = 'test'
  //   input.trigger('blur')
  //   await wrapper.vm.$nextTick()
  //   expect(wrapper.emitted().blur).toBeTruthy()
  //   expect(wrapper.vm.focused).toBe(false)
  // })

  // it('should emit a focus event', async () => {
  //   const wrapper = createComponent({ value: '', autoFocus: true })
  //   const input = wrapper.find('.z-input > .wrapper > div > input')
  //   expect(input.exists()).toBe(true)
  //   expect(input.attributes().type).toBe('text')
  //   input.trigger('focus')
  //   await wrapper.vm.$nextTick()
  //   expect(wrapper.emitted().focus).toBeTruthy()
  //   expect(wrapper.vm.focused).toBe(true)
  // })

  it('should match snapshot', () => {
    const wrapper = createComponent({
      content: 'Test',
      icon: '',
      withIconRight: false,
      disabled: false,
      small: false,
      loading: false,
      active: false,
      dark: false,
      shadow: false,
      type: 'primary'
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})

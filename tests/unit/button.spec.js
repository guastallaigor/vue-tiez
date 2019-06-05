import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
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

  it('should have a content', () => {
    const wrapper = createComponent({ content: 'Test' })
    const span = wrapper.find('.z-button > span')
    expect(span.exists()).toBe(true)
    expect(span.text()).toBe('Test')
  })

  it('should be small', () => {
    const wrapper = createComponent({ content: 'Test', small: true })
    const button = wrapper.find('.z-button')
    expect(button.exists()).toBe(true)
    expect(button.classes().length).toBe(3)
    expect(button.classes()).toEqual(['z-button', 'small', 'primary'])
  })

  it('should have a primary type', () => {
    const wrapper = createComponent({ content: 'Test', type: 'primary' })
    const button = wrapper.find('.z-button')
    expect(button.exists()).toBe(true)
    expect(button.classes().length).toBe(2)
    expect(button.classes()).toEqual(['z-button', 'primary'])
  })

  it('should have a secondary type', () => {
    const wrapper = createComponent({ content: 'Test', type: 'secondary' })
    const button = wrapper.find('.z-button')
    expect(button.exists()).toBe(true)
    expect(button.classes().length).toBe(2)
    expect(button.classes()).toEqual(['z-button', 'secondary'])
  })

  it('should have a warning type', () => {
    const wrapper = createComponent({ content: 'Test', type: 'warning' })
    const button = wrapper.find('.z-button')
    expect(button.exists()).toBe(true)
    expect(button.classes().length).toBe(2)
    expect(button.classes()).toEqual(['z-button', 'warning'])
  })

  it('should have a highlight type', () => {
    const wrapper = createComponent({ content: 'Test', type: 'highlight' })
    const button = wrapper.find('.z-button')
    expect(button.exists()).toBe(true)
    expect(button.classes().length).toBe(2)
    expect(button.classes()).toEqual(['z-button', 'highlight'])
  })

  it('should have a link type', () => {
    const wrapper = createComponent({ content: 'Test', type: 'link' })
    const button = wrapper.find('.z-button')
    expect(button.exists()).toBe(true)
    expect(button.classes().length).toBe(2)
    expect(button.classes()).toEqual(['z-button', 'link'])
  })

  it('should have a abort type', () => {
    const wrapper = createComponent({ content: 'Test', type: 'abort' })
    const button = wrapper.find('.z-button')
    expect(button.exists()).toBe(true)
    expect(button.classes().length).toBe(2)
    expect(button.classes()).toEqual(['z-button', 'abort'])
  })

  it('should have a loading state', () => {
    const wrapper = createComponent({ content: 'Test', loading: true })
    const loadingShim = wrapper.find('.z-button > .loading-shim')
    expect(loadingShim.exists()).toBe(true)
    const loading = wrapper.find('.z-button > .loading-shim > .loading')
    expect(loading.exists()).toBe(true)
    const icon = wrapper.find('.z-button > .icon')
    expect(icon.exists()).toBe(false)
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
      const line = wrapper.findAll('.z-button > .icon > svg > line')
      expect(line.length).toBe(2)
      expect(line.at(0).attributes().stroke).toBe('#fff')
      expect(line.at(1).attributes().stroke).toBe('#fff')
      done()
    })
  })

  it('should emit a click event and set x and y for the animation component', async () => {
    const wrapper = mount(ZButton, {
      AsyncComponent: ZAnimation,
      propsData: { content: 'Test' }
    })
    const button = wrapper.find('.z-button')
    expect(button.exists()).toBe(true)
    button.trigger('click')
    expect(wrapper.vm.$refs.button.getBoundingClientRect().left).toBe(0)
    expect(wrapper.vm.$refs.button.getBoundingClientRect().right).toBe(0)
    expect(wrapper.vm.x).toBe(0)
    expect(wrapper.vm.y).toBe(0)
    await wrapper.vm.$nextTick()
    wrapper.vm.onClick(new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      clientX: 100,
      clientY: 101,
      view: window
    }))
    expect(wrapper.vm.x).toBe(100)
    expect(wrapper.vm.y).toBe(101)
    expect(wrapper.emitted().click).toBeTruthy()
  })

  it('should have the ZAnimation component, emit a click event and set to null', async () => {
    const localVue = createLocalVue()
    const wrapperAnimation = mount(ZAnimation, {
      localVue
    })
    const wrapperBtn = mount(ZButton, {
      AsyncComponent: wrapperAnimation,
      propsData: { content: 'Test' },
      localVue
    })
    const stub = jest.fn()
    wrapperBtn.setMethods({ onAnimationEnd: stub })
    wrapperBtn.vm.$on('complete', stub)
    const animation = wrapperAnimation.find('.z-animation')
    expect(animation.exists()).toBe(true)
    wrapperAnimation.vm.addAnimationEvent()
    wrapperAnimation.find(ZAnimation).vm.$emit('complete')
    expect(wrapperAnimation.emitted()['complete']).toBeTruthy()
    wrapperBtn.vm.onAnimationEnd()
    wrapperAnimation.vm.removeAnimationEvent()
    wrapperAnimation.destroy()
    expect(stub).toBeCalled()
    const button = wrapperBtn.find('.z-button')
    expect(button.exists()).toBe(true)
    expect(wrapperBtn.vm.x).toBe(null)
    expect(wrapperBtn.vm.y).toBe(null)
    // WIP
  })

  it('should have an icon in the right position', (done) => {
    const wrapper = mount(ZButton, {
      AsyncComponent: ZIcon,
      propsData: { content: 'test', icon: 'add', withIconRight: true }
    })
    const button = wrapper.find('.z-button')
    expect(button.exists()).toBe(true)
    expect(button.classes().length).toBe(3)
    expect(button.classes()).toEqual(['z-button', 'icon', 'primary'])
    setTimeout(() => {
      expect(wrapper.find(ZIcon).exists()).toBe(true)
      const icon = wrapper.find('.z-button > .icon')
      expect(icon.exists()).toBe(true)
      expect(icon.classes().length).toBe(2)
      expect(icon.classes()).toEqual(['icon', 'right'])
      done()
    })
  })

  it('should emit a click event', async () => {
    const wrapper = createComponent({ content: 'Test' })
    const button = wrapper.find('.z-button')
    expect(button.exists()).toBe(true)
    expect(button.attributes().type).toBe('button')
    button.trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted().click).toBeTruthy()
    expect(wrapper.vm.$refs.button.getBoundingClientRect().left).toBe(0)
    expect(wrapper.vm.$refs.button.getBoundingClientRect().right).toBe(0)
  })

  it('should be disabled', async () => {
    const wrapper = createComponent({ content: 'Test', disabled: true })
    const button = wrapper.find('.z-button')
    expect(button.exists()).toBe(true)
    expect(button.classes()).toEqual(['z-button', 'disabled', 'primary'])
    button.trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted().click).toBeFalsy()
    wrapper.vm.onClick(new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      clientX: 100,
      clientY: 101,
      view: window
    }))
    expect(wrapper.vm.x).toBe(null)
    expect(wrapper.vm.y).toBe(null)
  })

  it('should be active', () => {
    const wrapper = createComponent({ content: 'Test', active: true })
    const button = wrapper.find('.z-button')
    expect(button.exists()).toBe(true)
    expect(button.classes()).toEqual(['z-button', 'active', 'primary'])
  })

  it('should has shadow', () => {
    const wrapper = createComponent({ content: 'Test', shadow: true })
    const button = wrapper.find('.z-button')
    expect(button.exists()).toBe(true)
    expect(button.classes()).toEqual(['z-button', 'shadow', 'primary'])
  })

  it('should validate all the props type', () => {
    const wrapper = createComponent({ content: 'Test' })
    const type = wrapper.vm.$options.props.type
    expect(type.required).toBeFalsy()
    expect(type.type).toBe(String)
    expect(type.default).toBe('primary')
    expect(type.validator && type.validator('primary')).toBeTruthy()
    expect(type.validator && type.validator('secondary')).toBeTruthy()
    expect(type.validator && type.validator('warning')).toBeTruthy()
    expect(type.validator && type.validator('highlight')).toBeTruthy()
    expect(type.validator && type.validator('link')).toBeTruthy()
    expect(type.validator && type.validator('abort')).toBeTruthy()
    const button = wrapper.find('.z-button')
    expect(button.exists()).toBe(true)
  })

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

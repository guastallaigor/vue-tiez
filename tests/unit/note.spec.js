import { shallowMount } from '@vue/test-utils'
import ZNote from '../../src/components/ZNote'

describe('When I create the ZNote component', () => {
  const createComponent = (propsData = {}, slot) => {
    return shallowMount(ZNote, {
      propsData,
      slots: {
        default: slot || 'ZNote'
      }
    })
  }

  it('should be a Vue instance', () => {
    const wrapper = createComponent({ content: 'Content' })
    expect(wrapper.find(ZNote).isVueInstance()).toBe(true)
  })

  it('should have a content and default type', () => {
    const wrapper = createComponent({ content: 'Content' })
    const note = wrapper.find('.z-note')
    expect(note.exists()).toBe(true)
    expect(note.classes().length).toBe(1)
    expect(note.classes()).toEqual(['z-note'])
  })

  it('should have a dark class', () => {
    const wrapper = createComponent({ content: 'Content', dark: true })
    const note = wrapper.find('.z-note')
    expect(note.exists()).toBe(true)
    expect(note.classes().length).toBe(2)
    expect(note.classes()).toEqual(['z-note', 'dark'])
  })

  it('should have a custom label', () => {
    const wrapper = createComponent({ content: 'Content', customLabel: 'CustomLabel' })
    const note = wrapper.find('.z-note')
    expect(note.exists()).toBe(true)
    expect(note.classes().length).toBe(1)
    expect(note.classes()).toEqual(['z-note'])
    const label = wrapper.find('.z-note > b')
    expect(label.exists()).toBe(true)
    expect(label.html()).toBe('<b>CustomLabel:</b>')
  })

  it('should have a type hint', () => {
    const wrapper = createComponent({ content: 'Content', type: 'hint' })
    const note = wrapper.find('.z-note')
    expect(note.exists()).toBe(true)
    expect(note.classes().length).toBe(2)
    expect(note.classes()).toEqual(['z-note', 'hint'])
    const label = wrapper.find('.z-note > b')
    expect(label.exists()).toBe(true)
    expect(label.html()).toBe('<b>hint:</b>')
  })

  it('should have a type alert', () => {
    const wrapper = createComponent({ content: 'Content', type: 'alert' })
    const note = wrapper.find('.z-note')
    expect(note.exists()).toBe(true)
    expect(note.classes().length).toBe(2)
    expect(note.classes()).toEqual(['z-note', 'alert'])
    const label = wrapper.find('.z-note > b')
    expect(label.exists()).toBe(true)
    expect(label.html()).toBe('<b>alert:</b>')
  })

  it('should have a type warning', () => {
    const wrapper = createComponent({ content: 'Content', type: 'warning' })
    const note = wrapper.find('.z-note')
    expect(note.exists()).toBe(true)
    expect(note.classes().length).toBe(2)
    expect(note.classes()).toEqual(['z-note', 'warning'])
    const label = wrapper.find('.z-note > b')
    expect(label.exists()).toBe(true)
    expect(label.html()).toBe('<b>warning:</b>')
  })

  it('should validate all the props type', () => {
    const wrapper = createComponent({ content: 'Content' })
    const type = wrapper.vm.$options.props.type
    expect(type.required).toBeFalsy()
    expect(type.type).toBe(String)
    expect(type.validator && type.validator('hint')).toBeTruthy()
    expect(type.validator && type.validator('alert')).toBeTruthy()
    expect(type.validator && type.validator('warning')).toBeTruthy()
    expect(type.validator && type.validator('')).toBeTruthy()
    const note = wrapper.find('.z-note')
    expect(note.exists()).toBe(true)
  })

  it('should have a slot instead of the content', () => {
    const wrapper = createComponent({ type: 'hint' }, '<span>test with slot</span>')
    const note = wrapper.find('.z-note')
    expect(note.exists()).toBe(true)
    expect(note.classes().length).toBe(2)
    expect(note.classes()).toEqual(['z-note', 'hint'])
    expect(note.html()).toBe(`<div class="z-note hint"><b>hint:</b>
  \n  <div><span>test with slot</span></div></div>`)
  })

  it('should match snapshot', () => {
    const wrapper = createComponent({
      content: 'Content',
      type: 'hint',
      customLabel: '',
      dark: false
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})

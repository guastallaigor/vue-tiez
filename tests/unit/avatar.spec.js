import { shallowMount } from '@vue/test-utils'
import ZAvatar from '../../src/components/ZAvatar'

describe('When I create the ZAvatar component', () => {
  const createComponent = (propsData = {}, slot) => {
    const props = { ...propsData }
    props.src = props.src || 'https://ik.imagekit.io/6xhf1gnexgdgk/igor2_HJhiHMa54.png'

    return shallowMount(ZAvatar, {
      propsData: props,
      slots: {
        default: slot || 'ZAvatar'
      }
    })
  }

  it('should be a Vue instance', () => {
    const wrapper = createComponent()
    expect(wrapper.find(ZAvatar).isVueInstance()).toBe(true)
  })

  it('should have an img with the src attribute', () => {
    const wrapper = createComponent()
    const avatar = wrapper.find('.z-avatar')
    expect(avatar.exists()).toBe(true)
    expect(avatar.classes().length).toBe(1)
    expect(avatar.classes()).toEqual(['z-avatar'])
    const img = wrapper.find('.z-avatar > img')
    expect(img.exists()).toBe(true)
    expect(img.attributes().src).toBe('https://ik.imagekit.io/6xhf1gnexgdgk/igor2_HJhiHMa54.png')
  })

  it('should have an alt when the alt prop is passed', () => {
    const wrapper = createComponent({ alt: 'Photo of Igor' })
    const avatar = wrapper.find('.z-avatar')
    expect(avatar.exists()).toBe(true)
    const img = wrapper.find('.z-avatar > img')
    expect(img.exists()).toBe(true)
    expect(img.attributes().alt).toBe('Photo of Igor')
  })

  it('should have a dark class when the dark prop is true', () => {
    const wrapper = createComponent({ dark: true })
    const avatar = wrapper.find('.z-avatar')
    expect(avatar.exists()).toBe(true)
    expect(avatar.classes().length).toBe(2)
    expect(avatar.classes()).toEqual(['z-avatar', 'dark'])
  })

  it('should have a stacked class when the stacked prop is true', () => {
    const wrapper = createComponent({ stacked: true })
    const avatar = wrapper.find('.z-avatar')
    expect(avatar.exists()).toBe(true)
    expect(avatar.classes().length).toBe(2)
    expect(avatar.classes()).toEqual(['z-avatar', 'stacked'])
  })

  it('should have 4 different sizes when the size prop is passed', () => {
    const wrapper = createComponent({ size: 'small' })
    const avatar = wrapper.find('.z-avatar')
    expect(avatar.exists()).toBe(true)
    expect(avatar.classes().length).toBe(2)
    expect(avatar.classes()).toEqual(['z-avatar', 'small'])
    wrapper.setProps({ size: 'medium' })
    expect(avatar.exists()).toBe(true)
    expect(avatar.classes().length).toBe(2)
    expect(avatar.classes()).toEqual(['z-avatar', 'medium'])
    wrapper.setProps({ size: 'large' })
    expect(avatar.exists()).toBe(true)
    expect(avatar.classes().length).toBe(2)
    expect(avatar.classes()).toEqual(['z-avatar', 'large'])
    wrapper.setProps({ size: '' })
    expect(avatar.exists()).toBe(true)
    expect(avatar.classes().length).toBe(1)
    expect(avatar.classes()).toEqual(['z-avatar'])
  })

  it('should match snapshot', () => {
    const wrapper = createComponent({
      src: 'https://ik.imagekit.io/6xhf1gnexgdgk/igor2_HJhiHMa54.png',
      alt: 'Photo of Igor',
      size: '',
      dark: false,
      stacked: false
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})

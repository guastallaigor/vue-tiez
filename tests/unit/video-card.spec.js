import { shallowMount } from '@vue/test-utils'
import ZVideoCard from '../../src/components/ZVideoCard'

describe('When I create the ZVideoCard component', () => {
  const createComponent = (propsData = {}, slot) => {
    const props = { ...propsData }
    props.src = props.src || 'https://image.mux.com/R6cYGw4NLjuquRZsxBuyXyzNLmIyZQjZ/thumbnail.jpg?time=15&width=430&height=240&smart_crop=true'

    return shallowMount(ZVideoCard, {
      propsData: props,
      slots: {
        default: slot || 'ZVideoCard'
      }
    })
  }

  it('should be a Vue instance', () => {
    const wrapper = createComponent()
    expect(wrapper.find(ZVideoCard).isVueInstance()).toBe(true)
  })

  it('should have a default width of 500px', () => {
    const wrapper = createComponent()
    const videoCard = wrapper.find('.z-video-card')
    expect(videoCard.exists()).toBe(true)
    expect(videoCard.classes().length).toBe(1)
    expect(videoCard.classes()).toEqual(['z-video-card'])
    expect(videoCard.attributes().style).toBe('width: 500px;')
  })

  it('should have a width of 666px', () => {
    const wrapper = createComponent({ width: '666px' })
    const videoCard = wrapper.find('.z-video-card')
    expect(videoCard.exists()).toBe(true)
    expect(videoCard.classes().length).toBe(1)
    expect(videoCard.classes()).toEqual(['z-video-card'])
    expect(videoCard.attributes().style).toBe('width: 666px;')
  })

  it('should have an img src', () => {
    const wrapper = createComponent()
    const videoCard = wrapper.find('.z-video-card')
    expect(videoCard.exists()).toBe(true)
    const img = wrapper.find('.z-video-card > div > main > .image > figure > main > .container > img')
    expect(img.exists()).toBe(true)
    expect(img.attributes().src).toBe('https://image.mux.com/R6cYGw4NLjuquRZsxBuyXyzNLmIyZQjZ/thumbnail.jpg?time=15&width=430&height=240&smart_crop=true')
  })

  it('should have an alt attribute and a title and subtitle', () => {
    const wrapper = createComponent({ title: 'Title', subtitle: 'Subtitle' })
    const videoCard = wrapper.find('.z-video-card')
    expect(videoCard.exists()).toBe(true)
    const img = wrapper.find('.z-video-card > div > main > .image > figure > main > .container > img')
    expect(img.exists()).toBe(true)
    expect(img.attributes().alt).toBe('Title')
    const title = wrapper.find('.z-video-card > div + div > h4')
    expect(title.exists()).toBe(true)
    expect(title.text()).toBe('Title')
    const subtitle = wrapper.find('.z-video-card > div + div > p')
    expect(subtitle.exists()).toBe(true)
    expect(subtitle.text()).toBe('Subtitle')
  })

  it('should have an alt attribute with the title', () => {
    const wrapper = createComponent({ title: 'Title' })
    const videoCard = wrapper.find('.z-video-card')
    expect(videoCard.exists()).toBe(true)
    const img = wrapper.find('.z-video-card > div > main > .image > figure > main > .container > img')
    expect(img.exists()).toBe(true)
    expect(img.attributes().alt).toBe('Title')
    const title = wrapper.find('.z-video-card > div + div > h4')
    expect(title.exists()).toBe(false)
    const subtitle = wrapper.find('.z-video-card > div + div > p')
    expect(subtitle.exists()).toBe(false)
  })

  it('should have an alt attribute with the subtitle', () => {
    const wrapper = createComponent({ subtitle: 'Subtitle' })
    const videoCard = wrapper.find('.z-video-card')
    expect(videoCard.exists()).toBe(true)
    const img = wrapper.find('.z-video-card > div > main > .image > figure > main > .container > img')
    expect(img.exists()).toBe(true)
    expect(img.attributes().alt).toBe('Subtitle')
    const title = wrapper.find('.z-video-card > div + div > h4')
    expect(title.exists()).toBe(false)
    const subtitle = wrapper.find('.z-video-card > div + div > p')
    expect(subtitle.exists()).toBe(false)
  })

  it('should have a dark class', () => {
    const wrapper = createComponent({ dark: true })
    const videoCard = wrapper.find('.z-video-card')
    expect(videoCard.exists()).toBe(true)
    expect(videoCard.classes().length).toBe(2)
    expect(videoCard.classes()).toEqual(['z-video-card', 'dark'])
  })

  it('should match snapshot', () => {
    const wrapper = createComponent({
      src: 'https://image.mux.com/R6cYGw4NLjuquRZsxBuyXyzNLmIyZQjZ/thumbnail.jpg?time=15&width=430&height=240&smart_crop=true',
      title: 'Title',
      subtitle: 'Subtitle',
      width: '500px',
      dark: false
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})

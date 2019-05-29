import { shallowMount } from '@vue/test-utils'
import ZCollapse from '../../src/components/ZCollapse'

describe('When I create the ZCollapse component', () => {
  const createComponent = (propsData = {}, slot) => {
    return shallowMount(ZCollapse, {
      propsData: propsData,
      slots: {
        default: slot || 'ZCollapse'
      }
    })
  }

  const items = [
    {
      title: 'Question A',
      content: 'Lorem ipsum dolor sit amet'
    },
    {
      title: 'Question B',
      content: 'Duis aute irure dolor in reprehenderit'
    }
  ]

  it('should be a Vue instance', () => {
    const wrapper = createComponent({ items })
    expect(wrapper.find(ZCollapse).isVueInstance()).toBe(true)
  })

  it('should have a default z-collapse state, with title and content', () => {
    const wrapper = createComponent({ items })
    const collapse = wrapper.find('.z-collapse')
    expect(collapse.exists()).toBe(true)
    expect(collapse.classes().length).toBe(1)
    expect(collapse.attributes().style).toBe('max-width: 600px;')
    const collapseDiv = wrapper.findAll('.z-collapse > .collapse')
    expect(collapseDiv.at(0).exists()).toBe(true)
    expect(collapseDiv.at(1).exists()).toBe(true)
    expect(collapseDiv.length).toBe(2)
    const title = wrapper.findAll('.z-collapse > .collapse > h3 > span:first-child')
    expect(title.at(0).exists()).toBe(true)
    expect(title.at(1).exists()).toBe(true)
    expect(title.length).toBe(2)
    expect(title.at(0).text()).toBe('Question A')
    expect(title.at(1).text()).toBe('Question B')
    const content = wrapper.findAll('.z-collapse > .collapse > .collapse-content > div > p')
    expect(content.at(0).exists()).toBe(true)
    expect(content.at(1).exists()).toBe(true)
    expect(content.length).toBe(2)
    expect(content.at(0).text()).toBe('Lorem ipsum dolor sit amet')
    expect(content.at(1).text()).toBe('Duis aute irure dolor in reprehenderit')
    const collapseContent = wrapper.findAll('.z-collapse > .collapse > .collapse-content')
    expect(collapseContent.at(0).exists()).toBe(true)
    expect(collapseContent.at(1).exists()).toBe(true)
    expect(collapseContent.length).toBe(2)
    expect(collapseContent.at(0).attributes().style).toBe('height: 0px;')
    expect(collapseContent.at(1).attributes().style).toBe('height: 0px;')
    const spanSvg = wrapper.findAll('.z-collapse > .collapse > h3 > span:last-child > svg')
    expect(spanSvg.at(0).exists()).toBe(true)
    expect(spanSvg.at(1).exists()).toBe(true)
    expect(spanSvg.at(1).attributes().style).toBe('display: none;')
    expect(spanSvg.at(2).exists()).toBe(true)
    expect(spanSvg.at(3).exists()).toBe(true)
    expect(spanSvg.at(3).attributes().style).toBe('display: none;')
    const spanLine = wrapper.findAll('.z-collapse > .collapse > h3 > span:last-child > svg > line')
    expect(spanLine.at(0).exists()).toBe(true)
    expect(spanLine.at(0).attributes().stroke).toBe('#000')
    expect(spanLine.at(1).exists()).toBe(true)
    expect(spanLine.at(1).attributes().stroke).toBe('#000')
    expect(spanLine.at(2).exists()).toBe(true)
    expect(spanLine.at(2).attributes().stroke).toBe('#000')
    expect(spanLine.at(3).exists()).toBe(true)
    expect(spanLine.at(3).attributes().stroke).toBe('#000')
    expect(spanSvg.length).toBe(4)
  })

  it('should have a dark class', () => {
    const wrapper = createComponent({ items, dark: true })
    const spanLine = wrapper.findAll('.z-collapse > .collapse > h3 > span:last-child > svg > line')
    const collapseDiv = wrapper.find('.z-collapse > .collapse')
    expect(collapseDiv.exists()).toBe(true)
    expect(collapseDiv.classes().length).toBe(2)
    expect(collapseDiv.classes()).toEqual(['collapse', 'dark'])
    expect(spanLine.at(0).exists()).toBe(true)
    expect(spanLine.at(0).attributes().stroke).toBe('#fff')
    expect(spanLine.at(1).exists()).toBe(true)
    expect(spanLine.at(1).attributes().stroke).toBe('#fff')
    expect(spanLine.at(2).exists()).toBe(true)
    expect(spanLine.at(2).attributes().stroke).toBe('#fff')
    expect(spanLine.at(3).exists()).toBe(true)
    expect(spanLine.at(3).attributes().stroke).toBe('#fff')
    expect(spanLine.length).toBe(6)
  })

  it('should work with a different content attribute', () => {
    const items = [
      {
        title: 'Question A',
        value: 'Lorem ipsum dolor sit amet'
      },
      {
        title: 'Question B',
        value: 'Duis aute irure dolor in reprehenderit'
      }
    ]

    const wrapper = createComponent({ items, contentAttr: 'value' })
    const content = wrapper.findAll('.z-collapse > .collapse > .collapse-content > div > p')
    expect(content.at(0).exists()).toBe(true)
    expect(content.at(1).exists()).toBe(true)
    expect(content.length).toBe(2)
    expect(content.at(0).text()).toBe('Lorem ipsum dolor sit amet')
    expect(content.at(1).text()).toBe('Duis aute irure dolor in reprehenderit')
  })

  it('should work with a different title attribute', () => {
    const items = [
      {
        value: 'Question A',
        content: 'Lorem ipsum dolor sit amet'
      },
      {
        value: 'Question B',
        content: 'Duis aute irure dolor in reprehenderit'
      }
    ]

    const wrapper = createComponent({ items, titleAttr: 'value' })
    const title = wrapper.findAll('.z-collapse > .collapse > h3 > span:first-child')
    expect(title.at(0).exists()).toBe(true)
    expect(title.at(1).exists()).toBe(true)
    expect(title.length).toBe(2)
    expect(title.at(0).text()).toBe('Question A')
    expect(title.at(1).text()).toBe('Question B')
  })

  it('should have a different max-width', () => {
    const wrapper = createComponent({ items, maxWidth: '10em' })
    const collapse = wrapper.find('.z-collapse')
    expect(collapse.exists()).toBe(true)
    expect(collapse.classes().length).toBe(1)
    expect(collapse.attributes().style).toBe('max-width: 10em;')
  })

  it('should be able to expand and collapse', () => {
    const wrapper = createComponent({ items })
    wrapper.setMethods({ changeHeight: jest.fn() })
    const collapse = wrapper.find('.z-collapse')
    expect(collapse.exists()).toBe(true)
    const collapseDiv = wrapper.find('.z-collapse > .collapse:first-child')
    collapseDiv.trigger('click')
    expect(wrapper.vm.changeHeight).toHaveBeenCalledTimes(1)
    // WIP - NEEDS IMPROVEMENT
    // const collapseContent = wrapper.findAll('.z-collapse > .collapse > .collapse-content')
    // expect(collapseContent.at(0).exists()).toBe(true)
    // expect(collapseContent.at(0).attributes().style).toBe('height: 120px;')
  })

  it('should match snapshot', () => {
    const wrapper = createComponent({
      items,
      maxWidth: '600px',
      contentAttr: 'content',
      titleAttr: 'title',
      dark: false
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})

import { shallowMount } from '@vue/test-utils'
import ZShowMoreToggle from '../../src/components/ZShowMoreToggle'

describe('When I create the ZShowMoreToggle component', () => {
  const createComponent = (propsData = {}, slot) => {
    return shallowMount(ZShowMoreToggle, {
      propsData,
      slots: {
        default: slot || 'ZShowMoreToggle'
      }
    })
  }

  it('should be a Vue instance', () => {
    const wrapper = createComponent()
    expect(wrapper.find(ZShowMoreToggle).isVueInstance()).toBe(true)
  })

  it('should have a show less text without a dark class', () => {
    const wrapper = createComponent()
    const showMoreToggle = wrapper.find('.z-show-more-toggle')
    expect(showMoreToggle.exists()).toBe(true)
    expect(showMoreToggle.classes().length).toBe(1)
    expect(showMoreToggle.classes()).toEqual(['z-show-more-toggle'])
    const showMoreToggleButton = wrapper.find('.z-show-more-toggle > div + button')
    expect(showMoreToggleButton.text()).toEqual('Show Less')
  })

  it('should have a dark class', () => {
    const wrapper = createComponent({ dark: true })
    const showMoreToggle = wrapper.find('.z-show-more-toggle')
    expect(showMoreToggle.exists()).toBe(true)
    expect(showMoreToggle.classes().length).toBe(2)
    expect(showMoreToggle.classes()).toEqual(['z-show-more-toggle', 'dark'])
  })

  it('should have a show less text', () => {
    const wrapper = createComponent({ dark: true })
    const showMoreToggle = wrapper.find('.z-show-more-toggle')
    expect(showMoreToggle.exists()).toBe(true)
    const showMoreToggleButton = wrapper.find('.z-show-more-toggle > div + button')
    expect(showMoreToggleButton.text()).toEqual('Show Less')
  })

  it('should change show less to show more', () => {
    const wrapper = createComponent({ more: true, dark: true })
    const showMoreToggle = wrapper.find('.z-show-more-toggle')
    expect(showMoreToggle.exists()).toBe(true)
    expect(showMoreToggle.classes().length).toBe(2)
    expect(showMoreToggle.classes()).toEqual(['z-show-more-toggle', 'dark'])
    const showMoreToggleButton = wrapper.find('.z-show-more-toggle > div + button')
    expect(showMoreToggleButton.text()).toEqual('Show More')
  })

  it('should match snapshot', () => {
    const wrapper = createComponent({
      more: false,
      dark: false
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})

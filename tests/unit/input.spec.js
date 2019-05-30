import { shallowMount, mount } from '@vue/test-utils'
import ZInput from '../../src/components/ZInput'
import ZIcon from '../../src/components/ZIcon'

describe('When I create the ZInput component', () => {
  const createComponent = (propsData = {}, slot) => {
    return shallowMount(ZInput, {
      propsData: propsData,
      $refs: {
        ref: {
          focus: () => null
        }
      },
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
      done()
    })
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

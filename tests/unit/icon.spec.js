import { mount } from '@vue/test-utils'
import ZIcon from '../../src/components/ZIcon'

describe('When I create the ZIcon component', () => {
  const icons = [
    'add',
    'arrow',
    'arrow-double',
    'up',
    'down',
    'left',
    'right',
    'camera',
    'big-camera',
    'checked',
    'unchecked',
    'checkmark',
    'cloud',
    'configuration',
    'copy',
    'credit-card',
    'delete',
    'directory',
    'close',
    'open',
    'divider',
    'dropdown',
    'closed-email',
    'open-email',
    'emoji',
    'external-link',
    'file',
    'fullscreen',
    'close-fullscreen',
    'infinity',
    'info',
    'lamda',
    'new-project',
    'big-open',
    'pause',
    'perma-link',
    'play',
    'questions',
    'refresh',
    'reset',
    'search',
    'speaker',
    'upload',
    'users',
    'website',
    'xlink',
    'github',
    'slack',
    'spectrum',
    'twitter',
    'youtube'
  ]

  it('should be a Vue instance', (done) => {
    icons.forEach(name => {
      const wrapper = mount(ZIcon, {
        propsData: { name },
        AsyncComponent: name,
        slots: { default: 'ZIcon' }
      })
      setTimeout(() => {
        expect(wrapper.find(ZIcon).isVueInstance()).toBe(true)
        done()
      })
    })
  })

  it('should create every icon possible', (done) => {
    icons.forEach(name => {
      const wrapper = mount(ZIcon, {
        propsData: { name },
        AsyncComponent: name,
        slots: { default: 'ZIcon' }
      })
      setTimeout(() => {
        const svg = wrapper.find('svg')
        expect(svg.exists()).toBe(true)
        done()
      })
    })
  })

  // it('should have a size of 666px', () => {
  //   icons.forEach(async name => {
  //     const wrapper = createComponent({ name, size: '666px' })
  //     const svg = await wrapper.find('.z-icon')
  //     svg && expect(svg.attributes().style).toBe('width: 666px; height: 666px;')
  //     svg && expect(svg.exists()).toBe(true)
  //   })
  // })

  // it('should have a different color', () => {
  //   icons.forEach(async name => {
  //     const wrapper = createComponent({ name, size: '666px' })
  //     const svg = await wrapper.find('.z-icon')
  //     expect(svg.attributes().style).toBe('width: 666px; height: 666px;')
  //     expect(svg.exists()).toBe(true)
  //   })
  // })

  it('should match snapshot', (done) => {
    icons.forEach(name => {
      const wrapper = mount(ZIcon, {
        propsData: { name },
        AsyncComponent: name,
        slots: { default: 'ZIcon' }
      })
      setTimeout(() => {
        expect(wrapper.html()).toMatchSnapshot()
        done()
      })
    })
  })
})

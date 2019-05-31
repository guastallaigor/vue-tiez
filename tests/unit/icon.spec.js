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
        expect(svg.attributes().width).toBe('20px')
        expect(svg.exists()).toBe(true)
        done()
      })
    })
  })

  it('should have a size of 666px (example add)', () => {
    const wrapper = mount(ZIcon, {
      propsData: { name: 'add', size: '666px' },
      AsyncComponent: 'add',
      slots: { default: 'ZIcon' }
    })
    const svg = wrapper.find('svg')
    expect(svg.exists()).toBe(true)
    expect(svg.attributes().width).toBe('666px')
    expect(svg.attributes().height).toBe('666px')
    expect(svg.attributes()['aria-label']).toBe('add team')
  })

  it('should have a different color (example add)', () => {
    const wrapper = mount(ZIcon, {
      propsData: { name: 'add', size: '666px', color: '#f40' },
      AsyncComponent: 'add',
      slots: { default: 'ZIcon' }
    })
    const circle = wrapper.find('svg > circle')
    expect(circle.exists()).toBe(true)
    expect(circle.attributes().stroke).toBe('#f40')
    const lineFirst = wrapper.find('svg > circle + line')
    expect(lineFirst.exists()).toBe(true)
    expect(lineFirst.attributes().stroke).toBe('#f40')
    const lineLast = wrapper.find('svg > line:last-child')
    expect(lineLast.exists()).toBe(true)
    expect(lineLast.attributes().stroke).toBe('#f40')
  })

  it('should have a dark mode (example add)', () => {
    const wrapper = mount(ZIcon, {
      propsData: { name: 'add', size: '666px', dark: true },
      AsyncComponent: 'add',
      slots: { default: 'ZIcon' }
    })
    const circle = wrapper.find('svg > circle')
    expect(circle.exists()).toBe(true)
    expect(circle.attributes().stroke).toBe('#444')
  })

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

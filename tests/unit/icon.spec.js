import { mount } from '@vue/test-utils'
import ZIcon from '../../src/components/ZIcon'
import add from '../../src/components/icons/add'
import arrow from '../../src/components/icons/arrow'
import arrowDouble from '../../src/components/icons/arrow-double'
import up from '../../src/components/icons/up'
import down from '../../src/components/icons/down'
import left from '../../src/components/icons/left'
import right from '../../src/components/icons/right'
import camera from '../../src/components/icons/camera'
import bigCamera from '../../src/components/icons/big-camera'
import checked from '../../src/components/icons/checked'
import unchecked from '../../src/components/icons/unchecked'
import checkmark from '../../src/components/icons/checkmark'
import cloud from '../../src/components/icons/cloud'
import configuration from '../../src/components/icons/configuration'
import copy from '../../src/components/icons/copy'
import creditCard from '../../src/components/icons/credit-card'
import deleteIcon from '../../src/components/icons/delete'
import directory from '../../src/components/icons/directory'
import close from '../../src/components/icons/close'
import open from '../../src/components/icons/open'
import divider from '../../src/components/icons/divider'
import dropdown from '../../src/components/icons/dropdown'
import closedEmail from '../../src/components/icons/closed-email'
import openEmail from '../../src/components/icons/open-email'
import emoji from '../../src/components/icons/emoji'
import externalLink from '../../src/components/icons/external-link'
import file from '../../src/components/icons/file'
import fullscreen from '../../src/components/icons/fullscreen'
import closeFullscreen from '../../src/components/icons/close-fullscreen'
import infinity from '../../src/components/icons/infinity'
import info from '../../src/components/icons/info'
import lamda from '../../src/components/icons/lamda'
import newProject from '../../src/components/icons/new-project'
import bigOpen from '../../src/components/icons/big-open'
import pause from '../../src/components/icons/pause'
import permaLink from '../../src/components/icons/perma-link'
import play from '../../src/components/icons/play'
import questions from '../../src/components/icons/questions'
import refresh from '../../src/components/icons/refresh'
import reset from '../../src/components/icons/reset'
import search from '../../src/components/icons/search'
import speaker from '../../src/components/icons/speaker'
import upload from '../../src/components/icons/upload'
import users from '../../src/components/icons/users'
import website from '../../src/components/icons/website'
import xlink from '../../src/components/icons/xlink'
import github from '../../src/components/icons/github'
import slack from '../../src/components/icons/slack'
import spectrum from '../../src/components/icons/spectrum'
import twitter from '../../src/components/icons/twitter'
import youtube from '../../src/components/icons/youtube'

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

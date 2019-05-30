import { mount } from '@vue/test-utils'
import ZTable from '../../src/components/ZTable'
import ZAvatar from '../../src/components/ZAvatar'

describe('When I create the ZTable component', () => {
  const createComponent = (propsData = {}, slot) => {
    return mount(ZTable, {
      propsData: propsData,
      stubs: {
        ZAvatar
      },
      slots: {
        default: slot || 'ZTable'
      }
    })
  }

  const headers = [
    {
      name: '',
      key: 'img',
      image: true
    },
    {
      name: 'NAME',
      key: 'name'
    },
    {
      name: 'USERNAME',
      key: 'userName'
    }
  ]

  const items = [
    {
      image: 'https://zeit.co/api/www/avatar/?u=evilrabbit&s=160',
      name: 'Evil Rabbit',
      userName: 'evilrabbit'
    },
    {
      image: 'https://zeit.co/api/www/avatar/?u=rauchg&s=160',
      name: 'Guilermo Rauch',
      userName: 'rauchg'
    }
  ]

  it('should be a Vue instance', () => {
    const wrapper = createComponent()
    expect(wrapper.find(ZTable).isVueInstance()).toBe(true)
  })

  it('should have a default z-table state', () => {
    const wrapper = createComponent({ headers, items })
    const table = wrapper.find('.z-table')
    expect(table.exists()).toBe(true)
    expect(table.classes().length).toBe(1)
    expect(table.classes()).toEqual(['z-table'])
    expect(table.attributes().style).toBe('width: 100%;')
    const thead = wrapper.find('.z-table > thead')
    expect(thead.exists()).toBe(true)
    const ths = wrapper.findAll('.z-table > thead > tr > th')
    expect(ths.at(0).text()).toBe('')
    expect(ths.at(1).text()).toBe('NAME')
    expect(ths.at(2).text()).toBe('USERNAME')
    const tbody = wrapper.find('.z-table > tbody')
    expect(tbody.exists()).toBe(true)
    const tdsFirst = wrapper.findAll('.z-table > tbody > tr:first-child > td')
    expect(tdsFirst.at(0).html()).toBe('<td><div><span class="z-avatar"><img alt="" title="" src="https://zeit.co/api/www/avatar/?u=evilrabbit&amp;s=160"></span></div></td>')
    expect(tdsFirst.at(1).text()).toBe('Evil Rabbit')
    expect(tdsFirst.at(2).text()).toBe('evilrabbit')
    const tdsLast = wrapper.findAll('.z-table > tbody > tr:last-child > td')
    expect(tdsLast.at(0).html()).toBe('<td><div><span class="z-avatar"><img alt="" title="" src="https://zeit.co/api/www/avatar/?u=rauchg&amp;s=160"></span></div></td>')
    expect(tdsLast.at(1).text()).toBe('Guilermo Rauch')
    expect(tdsLast.at(2).text()).toBe('rauchg')
  })

  it('should have a different width', () => {
    const wrapper = createComponent({ headers, items, width: '50%' })
    const table = wrapper.find('.z-table')
    expect(table.exists()).toBe(true)
    expect(table.classes().length).toBe(1)
    expect(table.classes()).toEqual(['z-table'])
    expect(table.attributes().style).toBe('width: 50%;')
  })

  it('should have a dark class', () => {
    const wrapper = createComponent({ headers, items, dark: true })
    const table = wrapper.find('.z-table')
    expect(table.exists()).toBe(true)
    expect(table.classes().length).toBe(2)
    expect(table.classes()).toEqual(['z-table', 'dark'])
  })

  it('should have a table slot instead of headers and items', () => {
    const slot = '<thead><tr><th><div>Test with slot</div></th></tr></thead> <tbody><tr><td>Test with slot</td></tr></tbody>'
    const wrapper = createComponent({}, slot)
    const table = wrapper.find('.z-table')
    expect(table.exists()).toBe(true)
    expect(table.classes().length).toBe(1)
    expect(table.classes()).toEqual(['z-table'])
    const thead = wrapper.find('.z-table > thead')
    expect(thead.html()).toBe(slot.split('> <')[0] + '>')
    const tbody = wrapper.find('.z-table > tbody')
    expect(tbody.html()).toBe('<' + slot.split('> <')[1])
    expect(table.html()).toBe('<table class="z-table" style="width: 100%;"><!----> <thead><tr><th><div>Test with slot</div></th></tr></thead> <tbody><tr><td>Test with slot</td></tr></tbody></table>')
  })

  it('should mount the ZAvatar component', (done) => {
    const wrapper = mount(ZTable, {
      propsData: { headers, items }
    })
    const table = wrapper.find('.z-table')
    expect(table.exists()).toBe(true)
    expect(table.classes().length).toBe(1)
    expect(table.classes()).toEqual(['z-table'])
    setTimeout(() => {
      expect(wrapper.find(ZAvatar).exists()).toBe(true)
      done()
    })
  })

  it('should match snapshot', () => {
    const wrapper = createComponent({
      headers,
      items,
      width: '100%',
      dark: false
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})

import { shallowMount } from '@vue/test-utils'
import ZTable from '../../src/components/ZTable'

describe('When I create the ZTable component', () => {
  const createComponent = (propsData = {}, slot) => {
    return shallowMount(ZTable, {
      propsData: propsData,
      slots: {
        default: slot || 'ZTable'
      }
    })
  }

  it('should be a Vue instance', () => {
    const wrapper = createComponent()
    expect(wrapper.find(ZTable).isVueInstance()).toBe(true)
  })

  it('should have a default z-table state unchecked', () => {
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
    const tds = wrapper.findAll('.z-table > tbody > tr:last-child > td')
    expect(tds.at(1).text()).toBe('Guilermo Rauch')
    expect(tds.at(2).text()).toBe('rauchg')
  })

  // it('should match snapshot', () => {
  //   const wrapper = createComponent({
  //     value: false,
  //     disabled: false,
  //     dark: false
  //   })

  //   expect(wrapper.html()).toMatchSnapshot()
  // })
})

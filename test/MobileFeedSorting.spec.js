/* eslint-disable indent */
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import MobileFeedSorting from '@/components/MobileFeedSorting.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

let wrapper

describe('MobileFeedSorting', () => {
  let store
  let state
  let getters
  let actions
  let stubs
  let computed
  let mocks

  beforeEach(() => {
    getters = {
      'auth/user': () => {
        return {
          role: 'admin'
        }
      }
    }

    actions = {
      'feed/setSorting': jest.fn()
    }
    store = new Vuex.Store({
      state,
      getters,
      actions
    })

    computed = {
      currentSort: () => {
        return {
          role: 'admin'
        }
      }
    }

    stubs = {
      Fa: { template: '<div jest-Fa></div>' },
      IfyIcon: { template: '<div jest-IfyIcon> <slot/></div>' },
      IfyDropdown: { template: '<div jest-IfyDropdown> <slot name="trigger" /> <slot/> </div>' },
      IfyDropdownItem: { template: '<div jest-IfyDropdownItem> <slot/> </div>' }
    }

    mocks = {
      $store: {
        state: {
          feed: {
            sort: 'new'
          }
        }
      },
      setSorting: (val) => { return val }
    }

    wrapper = shallowMount(MobileFeedSorting, {
      mocks,
      store,
      stubs,
      getters,
      computed
    })
  })

  const sortingParams = [
    {
      type: 'new',
      icon: 'certificate',
      label: 'Novos'
    },
    {
      type: 'top',
      icon: 'home',
      label: 'Populares'
    },
    {
      type: 'best',
      icon: 'rocket',
      label: 'Melhores'
    },
    {
      type: 'controversial',
      icon: 'random',
      label: 'Controversos'
    }
  ]
  it('deve o componente deve renderizar', () => {
    expect(wrapper).toBeTruthy()
  })

  it('exibe a lista de IfyDropdownItem com os possíveis sorts', () => {
    const links = wrapper.findAll('[jest-IfyDropdownItem]')
    expect(links.exists()).toBeTruthy()

    for (let i = 0; i < links.length; i++) {
      const link = links.at(i)
      const icon = link.find('[icon]')
      const spann = link.find('span:last-child')
      const spanText = spann.text()
      const iconeAttr = icon.attributes('icon')
            
      expect(
        sortingParams.find((item) => {
          return item.icon === iconeAttr && item.label === spanText
        })
      ).toBeTruthy()
    }
  })

  it.only('Ao clicar num dos sortingintems dispara setSorting', async () => {
    const links = wrapper.findAll('[jest-IfyDropdownItem]')
    expect(links.exists()).toBeTruthy()

    for await (const item of sortingParams) {
    //   const link = links.at(i)
    //   const icon = link.find('[icon]')
    //   const spann = link.find('span:last-child')
    //   const spanText = spann.text()
    //   const iconeAttr = icon.attributes('icon')
     await wrapper.find('[jest-IfyDropdownItem]').trigger('click')
     await wrapper.vm.$nextTick()
    expect(mocks.setSorting).toHaveBeenCalledWith(item.type)
    
      //   expect(
    //     sortingParams.find((item) => {
    //       return item.icon === iconeAttr && item.label === spanText
    //     })
    //   ).toBeTruthy()
    }
  })
})

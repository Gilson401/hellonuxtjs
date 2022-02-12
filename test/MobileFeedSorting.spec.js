/* eslint-disable no-console */
/* eslint-disable indent */
import { config, shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import MobileFeedSorting from '@/components/MobileFeedSorting.vue'

config.showDeprecationWarnings = false
config.methods['setSorting'] = () => {}
const localVue = createLocalVue()
localVue.use(Vuex)

let theMountedComponent

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
        },
        dispatch: jest.fn()
      }
    }

    theMountedComponent = shallowMount(MobileFeedSorting, {
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
    expect(theMountedComponent).toBeTruthy()
  })

  it('exibe a lista de IfyDropdownItem com os possíveis sorts', () => {
    const links = theMountedComponent.findAll('[jest-IfyDropdownItem]')
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
    // o método será chamado no click num dos elementos do find abaixo
    const wrapperArray = theMountedComponent.findAll('[jest-IfyDropdownItem]')
    expect(wrapperArray.exists()).toBeTruthy()

    // Chame o jest.spyOn, passe o wrapper.vm e o nome do método a ser verificado
    const spy = jest.spyOn(theMountedComponent.vm, 'setSorting')

    for (let i = 0; i < wrapperArray.length; i++) {
         const wrapperArrayItem = wrapperArray.at(i)
         
         // O elemento clicado é um COMPONENTE que possui e está @click stubbado
         // Por isso precisa usar $emit ao invés de trigger. Trigger só funciona para elementos nativos html 
         await wrapperArrayItem.vm.$emit('click')
          
         expect(spy).toBeCalled()
         expect(theMountedComponent.vm.setSorting).toBeCalled()
         console.log(wrapperArrayItem.html())
    }
   })
})

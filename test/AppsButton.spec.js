import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import AppsButton from '@/components/AppsButton.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

let wrapper

describe('AppsButton', () => {
  let store
  let stubs
  let getters
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

    store = new Vuex.Store({
      getters
    })

    computed = {
      currentUser: () => {
        return {
          role: 'admin'
        }
      }
    }

    stubs = {
      Fa: { template: '<div jest-Fa></div>' }
    }

    mocks = {
      $serviceURL: e => e
    }

    wrapper = shallowMount(AppsButton, {
      mocks,
      store,
      stubs,
      getters,
      computed
    })
  })

  it('deve exibir um botão de acionamento para o linksButton', async () => {
    expect(wrapper.vm.isOpen).toBeFalsy()
    const btn = wrapper.find('div > button:first-child')
    await btn.trigger('click')

    expect(wrapper.vm.isOpen).toBeTruthy()
  })

  it('exibe a lista de Apps', () => {
    const items = [
      {
        url: '/quant/strength-by-derivatives',
        label: '~/assets/sonar.svg'
      },
      {
        url: '/quant/bgt',
        label: '~/assets/bgt.svg'
      },
      {
        url: '/price-action',
        label: '~/assets/priceaction-logo.svg'
      },
      {
        url: '/console',
        label: '~/assets/logo-mini.svg'
      }
    ]

    const links = wrapper.findAll('[href]')
    expect(links.exists()).toBeTruthy()

    for (let i = 0; i < links.length; i++) {
      const link = links.at(i)
      const url = link.attributes('href')
      const imgSrc = link.find('img').attributes('src')

      expect(
        items.find((item) => {
          return item.label === imgSrc && item.url === url
        })
      ).toBeTruthy()
    }
  })

  it('se o currentUser não é admin, não deve exibir o link do console', () => {
    wrapper = shallowMount(AppsButton, {
      mocks,
      store,
      stubs,
      getters,
      computed: {
        currentUser: () => {
          return {
            role: 'user'
          }
        }
      }
    })
    expect(wrapper.find('a[href="/console"]').exists()).not.toBeTruthy()
  })
})

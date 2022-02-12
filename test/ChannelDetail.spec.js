import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueMeta from 'vue-meta'
import Vuex, { Store } from 'vuex'
import channelDetailPage from '@/pages/channel/_slug.vue'

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(VueMeta, { keyName: 'head' })

const storeMock = Object.freeze({
  actions: {
    'topics/reset': jest.fn(),
    'topics/load': jest.fn()
  },
  getters: {
    'bgt/currentAsset': () => 'ABEV3'
  },
  mutations: {
    'feed/SHOW_FEED_SORTING': jest.fn(),
    'topics/setParams': jest.fn()
  }
})

describe('Bgt', () => {
  let wrapper
  let mountOptions

  beforeEach(() => {
    mountOptions = {
      localVue,
      store: new Store(storeMock),
      stubs: {
        Loading: { template: '<div jest-Loading />' },
        InfiniteLoader: { template: '<div jest-InfiniteLoader> <slot/> </div>' },
        TopicList: { template: '<div jest-TopicList />' },
        BgtTable: { template: '<table />' }
      },
      computed: {
        slug: () => {
          return 'slog_return'
        },
        channel: () => {
          return 'channel_return'
        },
        topics: () => {
          return [{}, {}]
        }
      },
      mocks: {
        $route: {
          path: 'path/somepath',
          query: {
            sort: 'query_route_param'
          }
        }
      }
    }
    wrapper = shallowMount(channelDetailPage, mountOptions)
  })

  it.only('deve renderizar', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  //   it('deve disparar uma action da Store após montado', () => {
  //     expect(storeMock.actions['bgt/getBgtTableData']).toHaveBeenCalled()
  //   })

//   it('deve conter o valor correto para a tag META viewport', () => {
//     const meta = wrapper.vm.$meta().refresh()
//     const viewportData = meta.metaInfo.meta.find((i) => i.name === 'viewport')
//     expect(viewportData.content).toBe('width=device-width, initial-scale=1')
//   })
})

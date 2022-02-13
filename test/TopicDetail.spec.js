import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueMeta from 'vue-meta'
import Vuex, { Store } from 'vuex'
import topicDetailPage from '@/pages/topic/_url.vue'

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(VueMeta, { keyName: 'head' })

const storeMock = Object.freeze({
  actions: {
    'topics/reset': jest.fn(),
    'topics/load': jest.fn(),
    'notifications/markAsRead': jest.fn()
  },
  getters: {
    'topics/getById': () => {
      return (val) => {
        return {
          author: {
            username: 'autor username',
            urls: {
              avatar: 'author urls avatar'
            },
            profile_name: 'author profile name',
            role: 'author role'
          },
          author_id: val,
          content: 'lorem ipsum',
          id: val,
          published_at: '2022-02-12',
          updated_at: '2022-02-12',
          channels: ['hot'],
          url: 'url',
          total_comments: 12,
          my_votes: 12,
          total_votes_diff: 1,
          urls: {
            attach: 'urls.attach'
          }

        }
      }
    },
    'notifications/unread': () => {
      return [{
        topic_id: 1978,
        description: 'notification.topic.mention'
      }]
    }
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
        Fa: { template: '<div jest-Fa />' },
        Loading: { template: '<div jest-Loading />' },
        InfiniteLoader: { template: '<div jest-InfiniteLoader> <slot/> </div>' },
        TopicList: { template: '<div jest-TopicList />' },
        ChannelTags: { template: '<div jest-ChannelTags />' },
        NuxtLink: { template: '<div jest-NuxtLink> <slot/> </div>' },
        MobileHeaderActions: { template: '<div jest-MobileHeaderActions />' },
        SaveButton: { template: '<div jest-SaveButton />' },
        TopicActionsButton: { template: '<div jest-TopicActionsButton />' },
        VoteButtons: { template: '<div jest-VoteButtons />' },
        CommentSection: { template: '<div jest-CommentSection />' },
        Lightbox: { template: '<div jest-Lightbox />' },
        Portal: { template: '<div jest-Portal> <slot/> </div>' },
        CardHeaderProfile: { template: '<div jest-CardHeaderProfile> <slot/> </div>' }
      },
      computed: {
        slug: () => {
          return 'slog_return'
        },
        topicId: () => {
          return 1978
        },
        updated: () => {
          return '2022/01/15'
        }
      },
      mocks: {
        $route: {
          params: {
            url: 'some-topic-6634'
          },
          path: 'path/somepath',
          query: {
            sort: 'query_route_param'
          }
        },
        $store: {
          getters: {
            'notifications/unread': [{
              topic_id: 1978,
              description: 'notification.topic.mention'
            }]
          }
        }
      }
    }
    wrapper = shallowMount(topicDetailPage, mountOptions)
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

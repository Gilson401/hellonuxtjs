/* eslint-disable no-console */
import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueMeta from 'vue-meta'
import Vuex, { Store } from 'vuex'
import topicDetailPage from '@/pages/notifications.vue'

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(VueMeta, { keyName: 'head' })

const storeMock = Object.freeze({
  actions: {
    'notifications/load': jest.fn()
  },
  getters: {
    'notifications/user': () => {
      return (val) => {
        return {
          user: {
            id: '1'
          }
        }
      }
    },
    'notifications/getUserPreferences': () => {
      return [
        {
          key: 'notification_topic_email',
          value: 'true'
        },
        {
          key: 'notification_topic_push',
          value: 'false'
        }
      ]
    }
  },
  mutations: {
    'feed/SHOW_FEED_SORTING': jest.fn(),
    'topics/setParams': jest.fn()
  }
})

describe('Notifications', () => {
  let wrapper
  let mountOptions

  beforeEach(() => {
    mountOptions = {
      localVue,
      store: new Store(storeMock),
      stubs: {
        Loading: { template: '<div jest-Loading />' },
        BaseButton: { template: '<div jest-BaseButton />' }
      }
    }
    wrapper = shallowMount(topicDetailPage, mountOptions)
  })

  it('deve renderizar', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('deve marcar as perferências carregadas na store', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('deve exibir load enquanto carrega', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('deve iniciar exibindo as perferências salvas', () => {
    const mockPreferences = storeMock.getters['notifications/getUserPreferences']()
    mockPreferences.forEach((item) => {
      const wrapperPrefValue = wrapper.vm.preferences[item.key]
      const mockPrefValue = item.value === 'true'
      expect(wrapperPrefValue === mockPrefValue).toBeTruthy()
    })
  })

  it('deve registrar em data.preferences o input correto do usuário ', async () => {
    const preferences = Object.keys(wrapper.vm.preferences)
    await wrapper.findAll('input[type="checkbox"]').setChecked(true)
    preferences.forEach((key) => {
      expect(wrapper.vm.preferences[key]).toBeTruthy()
    })
  })

  it('deve haver um checkbox para cada item de data.preferences', () => {
    const preferencesCheckBoxes = wrapper.findAll('input[type="checkbox"]')
    const dataPreferences = Object.keys(wrapper.vm.preferences)
    expect(preferencesCheckBoxes.length === dataPreferences.length).toBeTruthy()

    for (let i = 0; i < preferencesCheckBoxes.length; i++) {
      const preferenceCheckboxItem = preferencesCheckBoxes.at(i)
      const chekField = preferenceCheckboxItem.attributes('id')
      const matchId = dataPreferences.filter(item => item === chekField)
      expect(matchId.length === 1).toBeTruthy()
    }
  })
})

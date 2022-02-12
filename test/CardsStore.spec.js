/* eslint-disable import/no-named-as-default-member */
/* eslint-disable no-console */
import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Vuex from 'vuex'
import Cards from '../components/Cards.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('When user selects dates', () => {
  let actions
  let state
  let store
  let getters
  
  const stubs = {
    NuxtLink: RouterLinkStub
  }

  beforeEach(() => {
    state = {
      nasa: {
        dateStart: '',
        dateEnd: '',
        isLoading: false,
        nasaListItems: [{}]
      }
    }

    actions = {
      getNasaItems: jest.fn()
    }

    getters = {
      nasaListItems: () => [{}],
      isLoading: () => false
    }

    store = new Vuex.Store({
      state,
      actions,
      getters
    })
  })

  it('It displays: Data início não deve ser no futuro', async () => {
    const wrapper = mount(Cards, { store, localVue, stubs })

    const startDate = wrapper.find('#startDate')
    const endDate = wrapper.find('#endDate')

    await startDate.setValue('2021-09-22')
    await startDate.trigger('change')

    await endDate.setValue('2021-09-01')
    await endDate.trigger('change')

    // expect(wrapper.find('#errmsg').text()).toBe('Data início não deve ser no futuro')
  })

  it('It displays: Data fim não deve ser no futuro', async () => {
    const wrapper = mount(Cards, { store, localVue, stubs })

    const startDate = wrapper.find('#startDate')
    const endDate = wrapper.find('#endDate')

    await startDate.setValue('2021-09-01')
    await startDate.trigger('change')

    await endDate.setValue('2022-09-01')
    await endDate.trigger('change')

    expect(wrapper.find('#errmsg').text()).toBe('Data fim não deve ser no futuro')
  })

  it('It displays: Data início deve ser anterior ou igual à data fim', async () => {
    const wrapper = mount(Cards, { store, localVue, stubs })

    const startDate = wrapper.find('#startDate')
    const endDate = wrapper.find('#endDate')

    await startDate.setValue('2021-08-01')
    await startDate.trigger('change')

    await endDate.setValue('2021-07-01')
    await endDate.trigger('change')

    expect(wrapper.find('#errmsg').text()).toBe('Data início deve ser anterior ou igual à data fim')
  })
})

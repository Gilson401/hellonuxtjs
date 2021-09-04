import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = {
  dateStart: '',
  dateEnd: '',
  isLoading: false,
  nasaListItems: [{
    copyright: 'xxxxx',
    date: '2021-08-31',
    explanation: 'The Moon is normally seen',
    hdurl: 'https://apod.nasa.gov/apod/image/2108/Luna_Fedez_1600.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'A Blue Moon in Exaggerated Colors',
    url: 'https://apod.nasa.gov/apod/image/2108/Luna_Fedez_960.jpg'
  }]
}

export const mutations = {
  SET_NASA_LIST_ITEMS: jest.fn(),
  SET_START_DATE: jest.fn(),
  SET_END_DATE: jest.fn(),
  SET_LOADING_STATE: jest.fn(),
  ADD_NASA_LIST_ITEMS: jest.fn()
}
  
export const actions = {
  getNasaItems: jest.fn()
}

export const getters = {
  nasaListItems: jest.fn().mockReturnValue([
    {
      copyright: 'Robert Fedez',
      date: '2021-08-31',
      explanation: 'The Moon is normally seen',
      hdurl: 'https://apod.nasa.gov/apod/image/2108/Luna_Fedez_1600.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'A Blue Moon in Exaggerated Colors',
      url: 'https://apod.nasa.gov/apod/image/2108/Luna_Fedez_960.jpg'
    }
  ]),
  isLoading: jest.fn().mockReturnValue(true)
}

/** Retorna s store mocada do jest */
export function __createMocks (custom = { getters: {}, mutations: {}, actions: {}, state: {} }) {
  const mockGetters = Object.assign({}, getters, custom.getters)
  const mockMutations = Object.assign({}, mutations, custom.mutations)
  const mockActions = Object.assign({}, actions, custom.actions)
  const mockState = Object.assign({}, state, custom.state)
  
  return {
    getters: mockGetters,
    mutations: mockMutations,
    actions: mockActions,
    state: mockState,
    store: new Vuex.Store({
      getters: mockGetters,
      mutations: mockMutations,
      actions: mockActions,
      state: mockState
    })
  }
}
  
export const store = __createMocks().store

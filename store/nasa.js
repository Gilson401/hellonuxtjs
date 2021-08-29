/* eslint-disable no-debugger */

export const state = () => ({
  dateStart: '',
  dateEnd: '',
  isLoading: false,
  nasaListItems: [{}]
})
  
export const mutations = {

  ADD_NASA_LIST_ITEMS (state, item) {
    state.nasaListItems = item
  },

  SET_START_DATE (state, value) {
    state.dateStart = value
  },

  SET_END_DATE (state, value) {
    state.dateEnd = value
  },
  SET_LOADING_STATE (state, value) {
    state.isLoading = value
  }
}

export const actions = {
  async getNasaItems ({ commit, state }) {
    let data = [{ media_type: '' }]
    const init = state.dateStart
    const end = state.dateEnd

    if (!init || !end) {
      return
    }

    const key = ['DEMO_KEY', 'xbEqj2OOfMoxud9Gaelc2yKpFL123bBVPxBmTrJv']
    data = await this.$axios.$get(`https://api.nasa.gov/planetary/apod?api_key=${key[1]}&start_date=${init}&end_date=${end}`)
   
    commit('ADD_NASA_LIST_ITEMS', data.filter(item => item.media_type === 'image'))
  }
}

export const getters = {
  nasaListItems (state) {
    return state.nasaListItems
  },
  isLoading (state) {
    return state.isLoading
  }
}

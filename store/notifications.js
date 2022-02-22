/* eslint-disable no-debugger */
const delay = async (t) => {
  return await new Promise(resolve => setTimeout(resolve, t))
}

export const state = () => ({
  value: 0,
  preferences: [
    {
      key: 'notification_topic_email',
      value: 'true' // string mesmo, não boolean
    },
    {
      key: 'notification_topic_push',
      value: 'false'
    }
  ],
  user: {
    id: '1'
  }
})

export const mutations = {

  SET_VALUE (state, item) {
    state.value = item
  },
  SET_PREFERENCES (state, preferences) {
    state.preferences = preferences
  }
}

export const actions = {
  changeStoreValue ({ commit, state }) {
    const value = state.value + 1
    commit('SET_VALUE', value)
  },

  async load ({ commit }, id) {
    await delay(100)
    //  this.$axios.$get('https://pokeapi.co/api/v2/pokemon/ditto')

    const resposta = [
      {
        key: 'notification_topic_email',
        value: 'true' // string mesmo, não boolean
      },
      {
        key: 'notification_topic_push',
        value: 'false'
      }
    ]

    commit('SET_PREFERENCES', resposta)
  }
}

export const getters = {
  getItemValue (state) {
    return state.value
  },

  user (state) {
    return state.user
  },
  getUserPreferences (state) {
    return state.preferences
  }

}

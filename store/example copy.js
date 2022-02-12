/* eslint-disable no-debugger */

export const state = () => ({
  value: 0
})
  
export const mutations = {

  SET_VALUE (state, item) {
    state.value = item
  }
}
 
export const actions = {
  changeStoreValue ({ commit, state }) {
    const value = state.value + 1
    commit('SET_VALUE', value)
  }
}

export const getters = {
  getItemValue (state) {
    return state.value
  }
}

/* eslint-disable curly */
/* eslint-disable no-debugger */

export const state = () => ({
  persons: [{
    id: 1,
    name: 'Fulano',
    birthdate: '1978-06-02'
  }],
  current: {}
})

export const mutations = {

  SET_BIRTHDATE_LIST_ITEMS (state, item) {
    state.persons = item
  },

  DELETE_ITEM (state, id) {
    const index = state.persons.findIndex(i => i.id === parseInt(id))
    if (index >= 0) state.persons.splice(index, 1)
  },

  'ADD_BIRTHDATE_LIST_ITEM' (state, item) {
    state.persons.push(item)
  }

}

export const actions = {
  addPerson ({ commit, state }, person) {
    const editedPerson = {
      ...person,
      id: getters.nextIdAvaiable(state),
      birthdate: this.$formatToDayJsStringDate(person.birthdate)
    }

    commit('ADD_BIRTHDATE_LIST_ITEM', editedPerson)
  }
}

export const getters = {

  nextIdAvaiable (state) {
    // debugger
    const novo = [...state.persons]
    const newIndex = novo.length === 0
      ? 1
      : novo.sort(function (a, b) {
        if (a.id < b.id) return 1
        if (a.id > b.id) return -1
        return 0
      })[0].id + 1
    return newIndex
  },

  getPersonById (state) {
    return (paramId) => {
      return state.persons.filter(item => item.id === paramId)[0]
    }
  },

  personsList (state) {
    return ({ id, name, birthday }) => {
      return state.persons.map((item) => {
        const obj = {}
        if (id) obj.id = item.id
        if (name) obj.name = item.name
        if (birthday) obj.birthdate = item.birthdate

        return obj
      })
    }
  }
}

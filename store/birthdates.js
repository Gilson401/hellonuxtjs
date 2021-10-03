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

  'ADD_BIRTHDATE_LIST_ITEM' (state, item) {
    state.persons.push(item)
  }

}

export const actions = {
  addPerson ({ commit, state }, person) {
    const novo = [...state.persons]
    const newIndex = novo.sort(function (a, b) {
      if (a.id < b.id) return 1
      if (a.id > b.id) return -1
      return 0
    })[0].id + 1

    const editedPerson = {
      ...person,
      id: newIndex,
      birthdate: this.$formatToDayJsStringDate(person.birthdate)
    }

    commit('ADD_BIRTHDATE_LIST_ITEM', editedPerson)
  }
}

export const getters = {
  nextIdAvaiable (state) {
    const novo = [...state.persons]
    const newIndex = novo.sort(function (a, b) {
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

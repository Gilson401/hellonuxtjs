<template>
  <div>
    <p class="text-xl pb-4">
      BirthdayList
    </p>
    
    <p class="pb-4">
      Parâmetros passados em getters dentro computed disparam eventos reativos:
    </p>

    <p class="pb-4">
      Clique no checkbox
    </p>

    <div class="space-x-4 flex w-100">
      <div>
        <label for="id">Id: </label>
        <input id="id" v-model="id" type="checkbox" name="id">
      </div>
    
      <div>
        <label for="name">Name</label>
        <input id="name" v-model="name" type="checkbox" name="name">
      </div>
    
      <div>
        <label for="date">Date</label>
        <input id="date" v-model="birthday" type="checkbox" name="date">
      </div>
    </div>

    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Aniversário</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(person, index) in personlist" :key="index">
          <td> {{ person.id || "-" }} </td>
          <td> {{ person.name || "-" }}  </td>
          <td> {{ person.birthdate || "-" }} </td>
          <td> <fa class="cursor-pointer" icon="trash" @click="deleteItem(person.id)" /> </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'BirthdayList',
  data () {
    return {
      id: true,
      name: true,
      birthday: true
    }
  },
  computed: {
    personlist () {
      const paramsd = {
        id: this.id,
        name: this.name,
        birthday: this.birthday
      }
      return this.$store.getters['birthdates/getBirthdayList'](paramsd)
    }
  },
  methods: {
    deleteItem (id) {
      this.$store.commit('birthdates/DELETE_ITEM', id)
    }
  }
}
</script>

<style lang="postcss" scoped>

</style>

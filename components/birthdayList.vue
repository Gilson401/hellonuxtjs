<template>
  <div>
    <p>BirthdayList</p>
    
    <input id="id" v-model="id" type="checkbox" name="id">
    <input id="name" v-model="name" type="checkbox" name="name">
    <input id="date" v-model="birthday" type="checkbox" name="date">

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
      return this.$store.getters['birthdates/personsList'](paramsd)
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

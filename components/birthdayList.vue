<template>
  <div>
    <p>BirthdayList</p>
    
    <input id="id" v-model="id" type="checkbox" name="id">
    <input id="name" v-model="name" type="checkbox" name="name">
    <input id="date" v-model="birthday" type="checkbox" name="date">
    
    <p v-for="(person, index) in personlist" :key="index">
      {{ person.id }} -     {{ person.name }} - {{ person.birthdate }}
    </p>
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
  }
}
</script>

<style lang="postcss" scoped>

</style>

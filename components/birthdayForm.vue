<template>
  <div>
    <input
      id="name"
      v-model="person.name"
      class="input-base"
      type="text"
      name="name"
      autocomplete="off"
    >
    <input
      id="date"
      v-model="person.birthdate"
      class="input-base "
      type="text"
      name="niver"
      autocomplete="off"
    >
    <button :disabled="!person.birthdate || !person.name" class="button-yellow" @click="useAction">
      Action Dispatch
    </button>
    <button :disabled="!person.birthdate || !person.name" class="button-yellow" @click="directCommit">
      Direct Commit
    </button>
    <p>{{ candidateData("Criando: ") }}</p>
    <br>

    <p>{{ dayjsIntance }} - this.$dayjs(this.person.birthdate, 'DD/MM/YYYY').utc()</p>
    <br>
    <p>{{ formatedDate }} - Meu plugin formatToDayJsStringDate: </p>
    <br>
    <p>{{ brformatToUTC }} - Meu plugin brformatToUTC: </p>
    <br>
  </div>
</template>

<script>
export default {
  name: 'BirthForm',
  data () {
    return {
      person: {
        name: 'Gilson',
        birthdate: '03/10/2021'
      }
    }
  },
  computed: {
    brformatToUTC () {
      return this.$brformatToUTC(this.person.birthdate)
    },
    candidateData () {
      return param => `${param} ${this.person.name} ${this.person.birthdate}`
    },
    dayjsIntance () {
      return this.$dayjs(this.person.birthdate, 'DD/MM/YYYY').utc()
    },
    formatedDate () {
      return this.$formatToDayJsStringDate(this.person.birthdate)
    },
    nextIdAvaiable () {
      return this.$store.getters['birthdates/nextIdAvaiable']
    },
    candidatePerson () {
      return {
        name: this.person.name,
        birthdate: this.$formatToDayJsStringDate(this.person.birthdate),
        id: this.nextIdAvaiable
      }
    }
  },
  mounted () {
    console.log('bla.utc()', this.$dayjs('03/10/2021', 'DD/MM/YYYY').utc())
    console.log('utc(bla)', this.$dayjs.utc('03/10/2021', 'DD/MM/YYYY'))
    console.log('no-utc', this.$dayjs('03/10/2021', 'DD/MM/YYYY'))
  },
  methods: {
    useAction () {
      this.$store.dispatch('birthdates/addPerson', this.person)
    },
    directCommit () {
      this.$store.commit('birthdates/ADD_BIRTHDATE_LIST_ITEM', this.candidatePerson)
    }
  }
}
</script>

<style lang="postcss" scoped>

</style>

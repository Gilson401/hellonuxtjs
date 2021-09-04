/* eslint-disable vue/html-indent */
<template>
  <div class="container mx-auto">
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col">
          <div class="flex flex-wrap flex-col py-6 px-4 mb-12">
            <div
              class="button-black mb-2"
            >
              <!-- <NuxtLink to="/">
                Voltar
              </NuxtLink> -->
            </div>
            <h1
              class="
              text-gray-900
              font-medium
              title-font
              text-2xl
              mb-2
              sm:mb-0
            "
            >
              Consumindo a API da Nasa. Veja as fotos do dia de cada dia do período.
            </h1>
            <div class="h-1 bg-gray-200 rounded overflow-hidden" />
            <p class="mt-6">
              A Nasa possui uma <a href="https://api.nasa.gov/" target="blank"> API pública </a> onde que disponibiliza em um de seus endpoints uma lista de fotos
              do dia com imagens de planetas, estrelas, galáxias e informações para cada foto.
            </p>
            <p>
              Nesta página o visitante escolhe um período de dias válido e as fotos e as informações deste período
              são renderizadas abaixo.
            </p>
            <p>
              A pesquisa só será realizada se for escolhido um intervalo válido.
            </p>
            <div class="flex flex-row flex-wrap h-6 oeste space-x-4 mt-6">
              <p class="leading-relaxed text-base">
                Selecione o período da pesquisa:
              </p>
              <input
                id="startDate"
                v-model="startDate"
                class="input text-right"
                type="date"
                @change="setDateStart"
              >
              <input
                id="endDate"
                v-model="endDate"
                class="input text-right"
                type="date"
                @change="setDateEnd"
              >
              <span id="errmsg" class="text-red-700"> {{ errorMessage }}</span>
            </div>
          </div>
        </div>
        <div
          v-show="isLoading"
          class="load-bar tw-center"
        >
          <div class="load-div">
          &nbsp;
          </div>
        </div>
        <div v-show="!isLoading" class="flex flex-row flex-wrap">
          <div
            v-for="(item, index) in dataLoaded"
            :key="index"
            class="sm:w-1/3"
          >
            <Card :nasa-dataitem="item" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import axios from 'axios'
import Card from './Card.vue'

export default {
  name: 'Cards',
  
  fetchOnServer: false,
  components: {
    Card
  },
  data () {
    return {
      startDate: '',
      endDate: '',
      errorMessage: '',
      dataLoaded: [],
      isStripeLoaded: false
    }
  },
  async fetch () {
    const init = this.startDate
    const end = this.endDate

    if (!init || !end) {
      return
    }

    const key = ['DEMO_KEY', 'xbEqj2OOfMoxud9Gaelc2yKpFL123bBVPxBmTrJv']
    const fetcheString = `https://api.nasa.gov/planetary/apod?api_key=${key[1]}&start_date=${init}&end_date=${end}`
   
    this.dataLoaded = await fetch(fetcheString).then(res =>
      res.json()
    )
  },
  head () {
    return {
      title: 'Nasa - Foto do dia.'
    }
  },
  computed: {
    nasaListItems () {
      return this.$store.state.nasa.nasaListItems
    },
    isLoading () {
      return this.$store.state.nasa.isLoading
    }
  },
  methods: {
    async refetch () {
      const init = this.startDate
      const end = this.endDate
     
      if (!init || !end || this.errMessage() !== '') {
        return
      }
      const key = ['DEMO_KEY', 'xbEqj2OOfMoxud9Gaelc2yKpFL123bBVPxBmTrJv']
      const fetcheString = `https://api.nasa.gov/planetary/apod?api_key=${key[1]}&start_date=${init}&end_date=${end}`
      this.$store.commit('nasa/SET_LOADING_STATE', true)
      const load = await fetch(fetcheString).then(res =>
        res.json()
      )
      this.dataLoaded = load.filter(item => item.media_type === 'image')
      this.$store.commit('nasa/SET_LOADING_STATE', false)
    },
    setDateStart (e) {
      this.refetch()
    },
    setDateEnd (e) {
      this.refetch()
    },
    errMessage () {
      const today = new Date()
      const start = new Date(this.startDate)
      const end = new Date(this.endDate)
      let errorMessage = ''
      if (end < start) {
        errorMessage = 'Data início deve ser anterior ou igual à data fim'
      }
      if (today < start) {
        errorMessage = 'Data início não deve ser no futuro'
      }
      if (today < end) {
        errorMessage = 'Data fim não deve ser no futuro'
      }
      this.errorMessage = errorMessage
      return errorMessage
    },
    async doNasaSearch () {
      const today = new Date()
      const start = new Date(this.startDate)
      const end = new Date(this.endDate)
      if (end < start) {
        this.errorMessage = 'Data início deve ser anterior ou igual à data fim'
        return
      }
      if (today < start) {
        this.errorMessage = 'Data início não deve ser no futuro'
        return
      }

      if (today < end) {
        this.errorMessage = 'Data fim não deve ser no futuro'
        return
      }

      this.errorMessage = ''
      if (this.startDate && this.endDate) {
        this.$store.commit('nasa/SET_NASA_LIST_ITEMS', [])
        this.$store.commit('nasa/SET_LOADING_STATE', true)
        await this.$store.dispatch('nasa/getNasaItems')
        this.$store.commit('nasa/SET_LOADING_STATE', false)
      }
    },
    canShow () {
      return (this.startDate && this.endDate)
    }
  }
}
</script>

<style lang="postcss" scoped>
.input{
@apply border-2 border-gray-500;
@apply rounded-sm;
@apply h-full;
}
.load-bar{
    @apply place-items-stretch;
    @apply h-5 w-full;
}
.tw-center {@apply flex justify-center items-center;}
.load-div{
    @apply rounded-full;
    @apply border-blue-500 border-r-2 border-t-2 border-b-2;
    @apply animate-spin;
    @apply h-5 w-5;
}
.oeste{    display: flex;    justify-content:flex-start;  align-items:center;  }
</style>

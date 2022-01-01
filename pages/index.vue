<template>
  <div class="min-h-screen text-white py-20">
    <div class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
      <div class="flex flex-col w-full  justify-center items-start p-8">
        <h1 class="text-3xl md:text-5xl text-yellow-300 tracking-loose">
          Bem-vindo ao Hello Nuxt!
        </h1>
        <h2 class="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
          Uma demonstração de Nuxt JS.
        </h2>

        <ul>
          <li>- Nuxt JS</li>
          <li>- Vuex Store para armazenamento de estados </li>
          <li>- Axios para consumo de api pública</li>
          <li>- Tailwind CSS Framework de estilos </li>
        </ul>
      </div>
      <div class="mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  centro">
        <div class="h-48 centro">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/120px-Vue.js_Logo_2.svg.png" alt="vuelogo">
            
          <img src="~/assets/nuxt-icon-removebg-preview.png" alt="nuxt logo">
          
          <img src="~/assets/tailwind.svg" alt="tailwindlogo">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      randomStartDate: '2021-07-01'
    }
  },
  head: {
    title: 'Hello Nuxt Home',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Veja minhas skills'
      }
    ]
  },
  mounted () {
    this.$store.dispatch('nasa/getNasaItems')
  },
  methods: {
    getlista () {
      this.$axios.$get(`https://api.nasa.gov/planetary/apod?api_key=xbEqj2OOfMoxud9Gaelc2yKpFL123bBVPxBmTrJv&start_date=${this.randomStartDate}&end_date=2021-08-15`)
        .then((res) => {
          this.$store.commit('nasa/SET_NASA_LIST_ITEMS', res.data)
        })
    }
  }
}
</script>

<style lang="postcss" scoped>
li{
@apply text-lg;
@apply mb-2;
}
h3{
    @apply text-3xl;
}
h5{
   @apply text-2xl;
}
img{
    max-width: 33%;
}
.oeste{    display: flex;    justify-content:flex-start;  align-items:center;  }

.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 2px 2px;
  grid-template-areas:
    "a1 b1 c1";
}
.a1 { grid-area: a1; }
.b1 { grid-area: b1; }
.c1 { grid-area: c1; }

</style>

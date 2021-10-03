<template>
  <!-- <div class="container mx-auto">
    <h1 class="text-3xl font-bold text-center mb-4">
      
    </h1>
    <h3>Neste projeto são utilizadas as seguintes libs e frameworks:</h3>
    <ul>
      <li>Nuxt JS</li>
      <li>Vuex Store para Armazenamento de estados </li>
      <li>Axios para Consumo de api pública</li>
      <li>Tailwind CSS Framework de estilos </li>
    </ul>
  </div> -->

  <!-- component -->
  
  <div class="bg-black min-h-screen text-white py-20">
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
          <li>- Axios para consumo de api</li>
          <li>- Tailwind CSS Framework de estilos </li>
        </ul>

        <div
          class="button-yellow"
        >
          <NuxtLink to="/nasa">
            Nasa Apod API
          </NuxtLink>
        </div>

        <div
          class="button-yellow"
        >
          <NuxtLink to="/modalexib">
            Modal e Emit
          </NuxtLink>
        </div>

        <div
          class="button-yellow"
        >
          <NuxtLink to="/plugintest">
            Global Methods
          </NuxtLink>
        </div>

        <div
          class="button-yellow"
        >
          <NuxtLink to="/birthdates">
            Aniversários
          </NuxtLink>
        </div>

      </div>
      <div class="mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  centro">
        <div class="h-48 centro">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/120px-Vue.js_Logo_2.svg.png">
            
          <img src="~/assets/nuxt-icon-removebg-preview.png">
          
          <img src="https://symbols.getvecta.com/stencil_97/3_tailwind-css-icon.43c02f69bf.png">
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
  mounted () {
    this.$store.dispatch('nasa/getNasaItems')
    // this.getlista()
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
</style>

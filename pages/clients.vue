<template>
  <div class="container mx-auto">
    <p class="text-2xl my-4">
      Carregamento de lista de clientes, e exportação dos dados para CSV.
    </p>

    <p class="my-4">
      Esta demonstração contém:
    </p>

    <ul class="my-4">
      <li>
        Consumo de API "mockada" na
        <a href="https://mockapi.io/" target="_blank">mockapi.io</a> com Axios
      </li>
      <li>
        Montagem dinâmica de table, com componente dedicado para este fim.
      </li>
      <li>
        Exportação dos dados da tabela em csv com uso do pacote
        <a
          href="https://www.npmjs.com/package/vue-json-csv?activeTab=readme"
          target="_blank"
        >vue-json-csv</a>
      </li>
    </ul>

    <div class="flex space-x-4">
      <button class="button-black" @click="getlista">
        Carregar lista
      </button>
      <download-csv class="button-black" :data="clients" delimiter=";">
        vue-json-csv - NEW
      </download-csv>
    </div>

    <hr class="my-4">
    <Loading v-if="isLoading" />
    <div v-if="clients.length > 0">
      <Table :clients="clients" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      clients: [],
      isLoading: false,
      resource: 'plans'
    }
  },
  methods: {
    async getlista () {
      this.isLoading = true
      const res = await this.$axios.$get(
        `https://615ff269faa03600179fb7ab.mockapi.io/${this.resource}`
      )
      this.clients = res
      this.isLoading = false
    }
    
  }
}
</script>

<style lang="postcss" scoped>
.button-black {
  @apply bg-transparent hover:bg-gray-900;
  @apply hover:text-white;
  @apply rounded shadow hover:shadow-lg;
  @apply py-2 text-center border border-gray-900 hover:border-transparent;
  @apply w-40;
  @apply transition-all;
}
</style>

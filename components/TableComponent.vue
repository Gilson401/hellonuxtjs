<template>
  <div class="container mx-auto">
    <div
      class="button-black mb-2 mt-2"
    >
      <NuxtLink to="/">
        Voltar
      </NuxtLink>
    </div>
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

    <p>
      Teste a aplicação colando endereços de apis no input abaixo. A api deve retornar um array de objetos simples e padronizados ou um único objeto simples.
      Abaixo temos alguns exemplos de urls de apis públicas que podem ser usadas neste exemplo.
    </p>

    <p>https://api.chucknorris.io/jokes/random</p>
    <p>http://makeup-api.herokuapp.com/api/v1/products.json</p>
    <p>http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1</p>

    <input
      v-model="urlInput"
      class="border-2 border-gray-700 my-4 w-1/3"
      type="text"
      placeholder="Digite a URL do recurso a ser consumido"
    >

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
      resource: 'plans',
      urlInput: ''
    }
  },
  methods: {
    isArray (what) {
      return Object.prototype.toString.call(what) === '[object Array]'
    },
    async getlista () {
      this.clients = []
      this.isLoading = true
      const res = await this.$axios.$get(
        `${this.urlInput}`
      )
      if (this.isArray(res)) {
        this.clients = res
      } else {
        this.clients = [res]
      }

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

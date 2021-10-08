<template>
  <div>
    <button class="button-black" @click="getlista">
      Carregar lista
    </button>

<div v-if="clients.length > 0">
    <Table
    :clients="clients" />
</div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      clients: []
    }
  },
  mounted () {
   
  },
  methods: {
    async getlista () {
      console.log('Get lista')
      const res = await this.$axios.$get('https://615ff269faa03600179fb7ab.mockapi.io/clients')        
      this.clients = res     
    }
  }
}
</script>

<style lang="postcss" scoped>

.button-black{
    @apply bg-transparent hover:bg-gray-900 ;
    @apply hover:text-white;
    @apply rounded shadow hover:shadow-lg ;
    @apply py-2 text-center border border-gray-900 hover:border-transparent;
    @apply w-40;
    @apply transition-all;
}
</style>

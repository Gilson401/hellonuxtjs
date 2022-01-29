<template>
  <div>
    <h2>V-model em componente </h2>
    <p>Os dois componentes abaixo recebem v-model</p>
    <div class="h-12  flex space-x-2 border-2 border-yellow-500">
      <Inputcustom v-model="fatherData" @change="eventoParaChange" />
      <span v-if="fatherData"> {{ fatherData }} </span>
    </div>

    <div class="h-12  flex space-x-2 border-2 border-yellow-500">
      <Divcustom v-model="booleanB" label="Chekbox" />
      <span v-if="booleanB"> {{ fatherData }}</span>
    </div>
  </div>
</template>

<script>

export default {

  data () {
    return {
      booleanB: false,
      fatherData: ''
    }
  },
  head: {
    title: 'V-modelcomponent',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Aplicando v-model em componentes customizados'
      }
    ]
  },
  methods: {
    eventoParaChange (e) {
      console.log('eventoParaChange', e)
    }
  }
}
</script>

<style lang="postcss" scoped>
.btn{
    @apply bg-transparent border border-gray-500 hover:border-indigo-500 text-gray-500 hover:text-indigo-500 font-bold py-2 px-4 rounded-full;
}
</style>

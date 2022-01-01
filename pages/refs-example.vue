<template>
  <div class="px-4 py-4">
    <h1 class="text-2xl my-4">
      Disparo dos métodos filhos usando o atributo ref de cada elemento gerado dinamicamente.
    </h1>
    
    <Son
      v-for="(item, index) in prefs"
      :key="index"
      ref="item"
    />

    <div class="my-2">
      <Button
        text="Fire Method"
        @click="callSonMeth"
      />
    </div>
  </div>
</template>
<script>

export default {
  data () {
    return {
      prefs: ['aa', 'bb', 'cc']
    }
  },
  head: {
    title: 'Usando Refs',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'uso de refs'
      }
    ]
  },
  methods: {
    callSonMeth () {
      this.prefs.forEach((line, index) => {
        this.$refs.item[index].sonDo()
      })
    }
  }
}
</script>

<style lang="postcss" scoped>

</style>

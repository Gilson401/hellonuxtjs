<template>
  <div class="px-4 py-4">
    <h1 v-if="h1show" ref="alvo" class="text-2xl my-4">
      Disparo dos métodos filhos usando o atributo ref de cada elemento gerado
      dinamicamente.
    </h1>

    <Son v-for="(item, index) in prefs" :key="index" ref="item" />

    <div class="my-2">
      <Button text="Fire Method" @click="callSonMeth" />
    </div>

    <div class="w-64 h-35 bg-blue-500">
      Não coincide

      <div class="w-32 h-32 bg-red-500">
        Não coincide
      </div>
      <div class="w-32 h-32 bg-green-600">
        Não coincide
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      prefs: ['aa', 'bb', 'cc'],
      h1show: true
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
  mounted () {
    document.addEventListener('click', this.clickListenerFunction)
  },
  methods: {
    callSonMeth () {
      this.prefs.forEach((line, index) => {
        this.$refs.item[index].sonDo()
      })
    },
    clickListenerFunction (e) {
      e.stopPropagation()

      if (this.$refs.alvo && !e.target.contains(this.$refs.alvo)) {
        this.h1show = false
      }
    }
  }
}
</script>

<style lang="postcss" scoped></style>

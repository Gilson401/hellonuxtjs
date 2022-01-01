<template>
  <div>
    <div v-if="showModal" class="full-modal-bg centro " @click="closeFromOutside">
      <div class="modal-content flex-col " @click="inside">
        <div class="grid grid-cols-1 gap-2 place-content-center h-full border rounded espaco-maximo-entre-vert">
          <p class="mx-auto pt-4">
            Conteúdo do Modal
          </p>
          <hr>

          <p v-if="counter" class="mx-auto">
            <span class="inline-block border rounded text-white bg-indigo-500 px-2 py-1 text-xs font-bold mr-3">
              Clicou {{ counter }} vezes e não propagou o evento disparando o fechar.
            </span>
          </p>

          <button
            class="mx-auto"
            @click="stopPropagation"
          >
            Click-me
          </button>

          <p v-if="counterInside" class="mx-auto">
            <span class="inline-block border rounded text-white bg-indigo-500 px-2 py-1 text-xs font-bold mr-3">
              Clicou na área do modal {{ counterInside }} vezes e não propagou o evento disparando o fechar.
            </span>
          </p>

          <button
            class="mx-auto"
            @click="closeModal"
          >
            Fechar modal
          </button>
        </div>
      </div>
    </div>
    <HnTitle
      text="Modal e propagação de eventos"
      selected-component="h1"
    />
    <p> Esta page implementa uma gestão de eventos click para evitar que o fechamento do modal ocorra fora do esperado. </p>
    <Button
      text="Abrir Modal"
      @click="showModal = true"
    />
  </div>
</template>

<script>
export default {
  name: 'Basemodal',
  data () {
    return {
      showModal: true,
      counter: 0,
      counterInside: 0
    }
  },
  head: {
    title: 'Tabelas e Csv',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Verifica propagação de eventos ao clicar no modal'
      }
    ]
  },
  methods: {
    inside (e) {
      this.counterInside += 1
      e.stopPropagation()
    },
    closeFromOutside () {
      this.showModal = false
    },
    stopPropagation (e) {
      this.counter += 1
      e.stopPropagation(e)
    },
    closeModal (e) {
      this.counterInside = 0
      this.counter = 0
      this.showModal = false
      e.stopPropagation()
    }
  }
}
</script>

<style lang="postcss" scoped>

.full-modal-bg {
  position: absolute;
  top: 0; left: 0;
  z-index: 50;
  width: 100vw; height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
}

.center-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  width: 500px;
  height: 300px;
  background-color: white;
}

button{
    @apply w-36 transition-all my-2 bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black ;
    @apply rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent;
}

.espaco-maximo-entre-vert{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>

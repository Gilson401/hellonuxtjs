<template>
  <div>
    <div>OUTSIDE CONTENT 1</div>
    <!-- // eslint-disable-next-line no-console -->
    <div v-if="showModal" class="full-modal-bg centro" @click="outside">
      <div class="modal-content flex-col" @click="inside">
        <p>Conteúdo da div Full modal bg</p>
        <button class="bg-blue-400" value="valueBtn1" @click="botao1">
          Form Botão 1
        </button>
        <button class="bg-blue-400" value="valueBtn1" @click="closeModal">
          Form Fechar
        </button>
      </div>
    </div>
    <div>OUTSIDE CONTENT 2</div>
    <button class="bg-blue-700" @click="showModal = true">
      Botão 1
    </button>
  </div>
</template>

<script>
export default {
  name: 'Basemodal',
  data () {
    return {
      showModal: true
    }
  },
  methods: {
    inside (e) {
      // no onclick, impede propagação
      e.stopPropagation()
    },
    outside (e) {
      this.showModal = false
    },
    botao1 (e) {
      e.stopPropagation(e)
    },
    closeModal (e) {
      this.showModal = false
      e.stopPropagation()
    }
  }
}
</script>

<style>

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
</style>

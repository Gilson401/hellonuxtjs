<template>
  <div>
    <!-- // eslint-disable-next-line no-console -->
    <div>
      OUTSIDE CONTENT 1
    </div>
    <button class="bg-blue-700 " @click="showModal=true">
      Botão  1
    </button>
    <button class="bg-green-800"  @click="outsidebtn2">
      Outro botão externo que não deve ser acionado
    </button>
    <div v-if="showModal" class="full-modal-bg centro" @click="outside">
      <div value="conteúdo" class="modal-content flex-col" @click="inside">
        <p>Conteúdo da div Full modal bg</p>
        <button class="bg-blue-400" value="valueBtn1" @click="botao1">
          Botão  1
        </button>
        <button class="bg-blue-400" value="valueBtn1" @click="closeModal">
          Fechar
        </button>
      </div>
    </div>
    <div>
      OUTSIDE CONTENT 2
    </div>
  </div>
</template>

<script>
export default {
  name: 'Basemodal',
  data () {
    return {
      showModal: false
    }
  },
  methods: {
    inside (e) {
      // eslint-disable-next-line no-console
      console.log('INSIDE FUNCTION DOES NOTHING')
      e.stopPropagation()
    },
    outside (e) {
      // eslint-disable-next-line no-console
      console.log('OUTSIDE FUNCTION CLOSES MODAL')
      this.showModal = false
    },
    botao1 (e) {
      // eslint-disable-next-line no-console
      console.log('BTN1 FUNCTION DOES WHATEVER YOU WANT')
      e.stopPropagation(e)
    },
    closeModal (e) {
      this.showModal = false
      e.stopPropagation()
    },
    outsidebtn2 (e) {
      // eslint-disable-next-line no-console
      console.log('outsidebtn2 did not have to act')
    }

  }
}
</script>

<style>
.full-modal-bg {
    position: absolute;
    top:0px;
    left:0px;
    z-index:50;
    width: 100vw;
    height: 100vh;
  background-color: #333333;
  opacity: 0.7;
}

.modal-content{
  width: 500px;
  height: 300px;
  background-color:white;
  border: 3px solid #090909;
  /* z-index:49; */
}
</style>

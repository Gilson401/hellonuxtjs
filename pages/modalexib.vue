/* eslint-disable no-console */
/* eslint-disable no-console */
<template>
  <div class="bg-gray-200">
    <div v-show="showModal" class="relative h-full w-full">
      <modal
        :config="modalConfig"
        @closeModal="fecharModal"
        @customChange="updateFatherData"
      />
    </div>
    <div class="w-full flex justify-center items-center">
      <div>
        <h1 class="text-2xl ">
          Emiter feature
        </h1>
      
        <a href="https://www.youtube.com/watch?v=RXldGbtzZdI&t=239s" target="blank">
          Video Aula
        </a>
      </div>
    </div>
    <div class="bg-gray-200 flex items-center justify-center h-screen">
      <div class="w-1/3 flex flex-col justify-center items-center">
        <h1 class="text-2xl ">
          fatherData: {{ fatherData }}
        </h1>
        <br>
        <button class="btn" @click="showModal=true">
          Show Modal
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from '../components/Modal.vue'
export default {
  components: {
    Modal
  },
  data () {
    return {
      showModal: true,
      fatherData: '',
      modalConfig: {
        title: 'Modal Invocado pelo Pai',
        description: 'Este modal recebe uma props objeto passada pelo seu pai ',
        mode: 'input-text',
        confirmButton: true,
        cancelButton: true
      }
    }
  },
  methods: {
    fecharModal () {
      this.fatherData = ''
      this.showModal = false
    },
    updateFatherData (val) {
      this.fatherData = val
      this.showModal = false
    }

  }
}
</script>

<style lang="postcss" scoped>
.btn{
    @apply bg-transparent border border-gray-500 hover:border-indigo-500 text-gray-500 hover:text-indigo-500 font-bold py-2 px-4 rounded-full;
}
</style>

<template>
  <div>
    <div v-show="showModal" class="relative h-full w-full">
      <Modal
        :config="modalConfig"
        @closeModal="fecharModal"
        @customChange="updateFatherData"
        @click.native="meuEvento"
      />
    </div>
    <div class="w-full flex justify-center items-center">
      <div>
        <h1 class="text-2xl ">
          Aplicando Emmit
        </h1>
        <p>
          O método  updateFatherData é passado para o filho para disparar um emit.
        </p>
      </div>
    </div>
    <div class="flex items-center justify-center h-screen">
      <div class="w-1/3 flex flex-col justify-center items-center">
        <h1 class="text-2xl ">
          fatherData: {{ fatherData }}
        </h1>
        <br>
        <Button text="Show Modal" @click="showModal=true" />
      </div>
    </div>

    <div class="h-12 w-1/4">
      <Divcustom v-model="booleanA" @change="eventoParaChange" />
    </div>

    <div class="h-12 w-1/4">
      <Divcustom v-model="booleanA" />
    </div>
  </div>
</template>

<script>
// import Divcustom from '~/components/Divcustom.vue'
export default {
//   components: { Divcustom },
  data () {
    return {
      showModal: false,
      booleanA: false,
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
  head: {
    title: 'Usando modais',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Aplicando modais'
      }
    ]
  },
  methods: {
    fecharModal () {
      this.fatherData = ''
      this.showModal = false
    },
    updateFatherData (val) {
      this.fatherData = val
      this.showModal = false
    },
    meuEvento () {
      console.log('method from modalexib.vue meuEvento')
    },
    eventMouseEnterFather () {
      console.log('method from modalexib.vue eventMouseEnterFather')
    },
    eventoParaChange () {
      console.log('eventoParaChange')
    }
  }
}
</script>

<style lang="postcss" scoped>
.btn{
    @apply bg-transparent border border-gray-500 hover:border-indigo-500 text-gray-500 hover:text-indigo-500 font-bold py-2 px-4 rounded-full;
}
</style>

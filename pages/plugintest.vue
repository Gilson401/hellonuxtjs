<template>
  <div class="centro h-screen flex-col">
    <div>
      <div class="w-full ">
        <div
          class="button-black mb-2"
        >
          <NuxtLink to="/">
            Voltar
          </NuxtLink>
        </div>
      </div>
      <h1 class="mb-4 text-4xl">
        Implementando métodos e variáveis globais no Nuxt
      </h1>
      <p>
        O texto ao lado dos inputs utilizam um método global. A vantagem deste modo é que não é necessário
        fazer um import  para cada page ou componente vue
      </p>
      <p>
        Também tem a vantagem de poder usar o método diretamente dentro da tag sem precisar passar por
        methods ou computed methods do componente ou page.
      </p>
      <div class="flex my-2">
        <input
          id="i1"
          v-model="input1"
          class="input-base"
          type="text"
          name="input1"
          autocomplete="off"
        >
        <h1>{{ this.$countCaracters(input1) }}</h1>
      </div>
      <div class="flex  my-2">
        <input
          id="i2"
          v-model="input2"
          class="input-base"
          type="text"
          name="input2"
          autocomplete="off"
        >
        <h1>{{ $countCaracters(input2) }}</h1>
      </div>

      <div class="w-full  my-7">
        <p>
          Este parágrafo usa uma variável declarada globalmente ($varOne):
          <span class="text-blue-800 font-bold">
            {{ $varOne }}
          </span>
        </p>
      </div>

      <div class="w-full  my-7">
        <p>
          Este parágrafo usa uma variável declarada globalmente ($varTwo):
          <span class="text-red-800 font-bold">
            {{ $varTwo }}
          </span>
        </p>
      </div>
    </div>
    <p class="mt-24">
      Feito com auxílio <a href="https://github.com/Medhanini/Nuxtjs-global-functions-or-variables"> deste repositório.</a>
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      input1: '',
      input2: ''
    }
  }
}
</script>

<style>

</style>

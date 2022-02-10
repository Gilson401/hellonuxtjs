<template>
  <div class="py-4 filhoEnglobe">
    <div v-if="!esconder" class="border-2 border-red-300 px-2 mb-3">
      <p>FILHO</p>
      <hr>
      <p>Valores reativos do pai sendo enxergados no filho</p>
      <p> numberfatherVar: {{ something }} </p>
      <hr>
      <p> something: {{ something }} </p>
    </div>

    <slot />

    <div class="bluebg">
      Esta div está no componente  filho e está chamando a classe bgazul declarada no pai que tem scoped
    </div>

    <p v-if="mensagemrecebida">
      <strong>
        mensagem recebida no filho: </strong>{{ mensagemrecebida }}
    </p>

    <div v-if="filhoinbluebg" class="filho-in-bluebg">
      <p>
        <strong>
          filhoinbluebg: </strong>{{ filhoinbluebg }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['reactive'],
  //   inject: {
  //     outronome: {
  //       from: 'numberfatherVar()',
  //       default: 'Filho edited value'
  //     },
  //     numberfatherVar: {
  //       from: 'numberfatherVar()'
  //     }
  //   },
  props: {
    esconder: {
      type: Boolean,
      default: false
    },
    mensagemrecebida: {
      type: String,
      default: ''
    },
    filhoinbluebg: {
      type: String,
      default: ''
    }

  },

  computed: {
    something () {
      return this.reactive.value
    }
  }

}
</script>

<style  scoped>

.father-class-conditional .filho-in-bluebg {
    color: yellow;
    font-size: 1.5rem;
}

</style>

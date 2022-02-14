<template>
  <div class="py-4 filhoEnglobe">
    <div v-if="!esconder" class="border-2 border-red-300 px-2 mb-3">
      <h1>FILHO</h1>
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


h1 {
  --b: .08em; /* line thickness */
  color: #1095c1;
  
  --_g: #0000 90deg,currentColor 0;
  background:
    conic-gradient(from 180deg at top var(--b) right var(--b),var(--_g)) calc(200% - var(--_s,0%)) 0;
    /* conic-gradient(from 0deg at bottom var(--b) left var(--b),var(--_g)) calc(var(--_s,0%) - 100%) 100%; */
  background-size: 200% var(--_s,var(--b));
  background-repeat: no-repeat;
  transition: .3s var(--_t,0s), background-position .3s calc(.3s - var(--_t,0s));
}
h1:hover {
  --_s: 100%;
  --_t: .3s;
}


body {
  height: 100vh;
  margin: 0;
  display: grid;
  place-content: center;
}
h1 {
  font-family: system-ui, sans-serif;
  font-size: 5rem;
  cursor: pointer;
  padding: 0 .15em;
}
</style>

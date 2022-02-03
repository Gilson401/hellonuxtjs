<template>
  <div>
    <div class="border-2 border-red-300 px-2 mb-3">
      <p>FILHO</p>
      <hr>
      <p>Valores reativos do pai sendo enxergados no filho</p>
      <p> numberfatherVar: {{ something }} </p>
      <hr>
      <p> something: {{ something }} </p>
    </div>

    <slot />
  </div>
</template>

<script>
export default {
//   inject: {
//     outronome: {
//       from: 'numberfatherVar()',
//       default: 'Filho edited value'
//     },
//     numberfatherVar: {
//       from: 'numberfatherVar()'
//     }
//   },

  inject: ['reactive'],

  computed: {
    something () {
      return this.reactive.value
    }
  }

}
</script>

<style>

</style>

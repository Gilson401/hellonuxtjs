<template>
  <div class="bg-green-300 rounded-sm w-full p-4">
    <p>NETO</p>
    <p>{{ foo }}</p>
    <p>O número a seguir é resultado da função declarada no pai providedFunction com parametro 2022: {{ providedFunction(2022) }}</p>
    <p>fatherinMethodFunction: {{fatherinMethodFunction('PARAMETRO')}} </p>
    <p>fatherDataVar: {{fatherDataVar}}</p>
  </div>
</template>

<script>
export default {
  inject: [
    'foo',
    'providedFunction',
    'fatherinMethodFunction',
    'fatherDataVar'
  ]
}
</script>

<style lang="postcss" scoped>

p{
    @apply text-2xl;
}

</style>

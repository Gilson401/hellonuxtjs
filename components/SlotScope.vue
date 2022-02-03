
<template>
  <div class="w-full rounded-md border-2 bg-green-300 p-6 ">
    <slot v-bind:slotScopedVariables="slotScopedVariables">
      {{ slotScopedVariables.varA }}
    </slot>

 

    <div />
  </div>
</template>

<script>
export default {
  data () {
    return {
      slotScopedVariables: {
        varA: 'Fallback text from slotScopedVariables var A',
        varB: 'Fallback text from slotScopedVariables var B',
        otherScopedData: {
          keyA: 'NESTED: otherScopedData_key_A_value',
          keyB: 'NESTED: otherScopedData_key_B_value'
        }
      }
    }
  }
}
</script>

<style lang="postcss" scoped>

</style>

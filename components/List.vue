<template>
  <div>
    <slot
      v-for="arrayItem in items"
      :visibleSlotData="arrayItem"
    >
      fallback content here from list
    </slot>
  </div>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style>

</style>

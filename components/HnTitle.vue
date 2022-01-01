<template>
  <component
    :is="selectedComponent"
    class="text-2xl"
  >
    {{ text }}
  </component>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'default text'
    },
    selectedComponent: {
      type: String,
      default: 'h1'
    }
  }
}

</script>

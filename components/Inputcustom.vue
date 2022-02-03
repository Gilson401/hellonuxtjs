<template>
  <label>
    <span>Input text custom</span>
    <input
      v-bind="$attrs"
      class="textarea"
      type="text"
      :text="text"
      v-on="$listeners"
      @change="$emit('change', $event.target.value)"
    >
  </label>
</template>

<script>

export default {
  model: { prop: 'text', event: 'change' },
  props: { text: { type: String, default: '' } }
}
</script>

<style lang="postcss" scoped>

.textarea {
@apply border-2 border-gray-500  rounded-sm h-full;
}
</style>

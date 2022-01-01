<template>
  <button
    class="w-36 transition-all my-2 bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
    @click="$emit('click', $event.target.value)"
  >
    {{ text }}
  </button>
</template>

<script>

export default {
  props: {
    text: {
      type: String,
      default: 'default text'
    }
  },
  emits: ['click']
}
</script>

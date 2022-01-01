<template>
  <div class="bg-black min-h-screen text-white py-20 place-items-center grid grid-cols-1 gap-2">
    <h1 v-if="error.statusCode === 404">
      Página não encontrada
    </h1>
    <h1 v-else>
      Ocorreu um erro - {{ error.statusCode }}
    </h1>

    <Button
      text="Voltar para a homepage"
      @click="$router.push('/')"
    />
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="postcss" scoped>
h1{
    @apply text-2xl;
}
</style>

<template>
  <div>
    <div
      class="button-yellow"
    >
      <NuxtLink to="/">
        Home
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.button-yellow{
    @apply bg-transparent hover:bg-yellow-300 ;
    @apply text-yellow-300 hover:text-black text-center;
    @apply rounded shadow hover:shadow-lg ;
    @apply mb-4 py-2 px-4 border border-yellow-300 hover:border-transparent;
    @apply transition-all;
    @apply w-36;
}
</style>

<template>
  <BaseButton
    type="primary"
    custom-class="button"
    rounded="full"
    @click="$router.push('/topic/create'); doOtherThing()"
  >
    <span class="hidden lg:inline-block">
      Novo Tópico
    </span>
    <span class="inline-block lg:hidden ">
      +
    </span>
  </BaseButton>
</template>

<style lang="postcss" scoped>

.button{
@apply bg-gray-900;
}

@media screen and (min-width: 1024px) {
  .button {
    @apply static w-1/2 h-8 p-0
    lg:mb-2 lg:w-full lg:h-10 lg:px-4 lg:py-2
    whitespace-nowrap text-sm lg:text-base
    border-2 border-indigo-600;
  }
}

@media screen and (max-width: 1023px) {
 .button {
    @apply fixed
    w-10
    h-10
    tracking-wider
    bottom-5
    right-5
   border-indigo-600
   border inline-flex items-center justify-center font-bold box-border
   transition-colors duration-300 hover:text-white
    py-2 rounded-full;
    }
}

</style>

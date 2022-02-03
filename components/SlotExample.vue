<template>
  <div class="flex flex-wrap w-full shadow-lg ">
    <div class="flex-grow w-1/3">
      <slot name="start">
        START Fallback
      </slot>
    </div>
    <div class="flex-grow w-1/3">
      <slot>
        Defalt Fallback
      </slot>
    </div>
    <div class="flex-grow w-1/3">
      <slot name="end">
        END fallback
      </slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="postcss" scoped>

</style>

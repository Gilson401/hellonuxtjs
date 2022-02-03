<template>
  <div>
    <div class="space-y-4  bg-gray-500 p-4 my-3 w-full rounded-md">
      <slot v-for="(_, name) in $slots" :name="name" />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    islotes () {
      return this.$slots
    }
  }
}
</script>

<style lang="postcss" scoped>

</style>

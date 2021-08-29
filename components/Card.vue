<template>
  <div class="flex flex-wrap -m-4 -mx-4 -mb-10 -mt-4 px-4">
    <div v-if="true" class="p-4  sm:mb-0 mb-6">
      <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
        {{ nasaDataitem.date }}
      </h2>
      <div class="rounded-lg overflow-hidden">
        <img
          :alt="nasaDataitem.url"
          class="object-cover object-center h-full w-full"
          :src="nasaDataitem.url"
        >
      </div>
      <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
        {{ nasaDataitem.title }}
      </h2>
      <p class="text-base leading-relaxed mt-2">
        {{ nasaDataitem.explanation }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',

  props: {
    nasaDataitem: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>

</style>

<template>
  <div>
    <Button
      text="setComputed"
      @click="setComputed"
    />

    <div class="dark px-1 lg:px-4">
      <div class="container">
        <div class="pt-16 min-h-screen">
          <Button
            text="setComputed"
            @click="setComputed"
          />
          <div>
            <div v-if="currentAsset">
              <p>{{ currentAsset }}</p>
            </div>

            <div class="flex">
              <Button
                text="setComputed"
                @click="setComputed"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head () {
    return {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  },
  computed: {
    currentAsset () {
      return this.$store.getters['example/getItemValue']
    }
  },

  mounted () {
    this.$store.dispatch('example/changeStoreValue')
  },
  methods: {
    setComputed () {
      this.$store.dispatch('example/changeStoreValue')
    }
  }
  
}
</script>

<style lang="postcss" scoped>
.dark {
  --tw-bg-opacity: 1;
  background-color: white;
  --tw-text-opacity: 1;
  color: black;
}

.min-height {
  min-height: 400px;
}
</style>

<template>
  <div ref="apps" class="relative">
    <button
      type="button"
      title="Aplicativos"
      class="relative flex items-center justify-center w-10 h-14 text-brand focus:outline-none hover:bg-gray-100 focus:bg-gray-100"
      @click="isOpen = !isOpen"
    >
      <Fa icon="th" />
    </button>

    <div v-show="isOpen" class="balloon z-50 top-16">
      <Fa icon="caret-up" size="lg" class="caret-balloon -top-3.5" />

      <div class="p-2 w-48">
        <a
          v-if="currentUser.role === 'admin'"
          :href="$serviceURL('/console')"
          class="app-button"
        >
          <!-- <img src="~/assets/logo-mini.svg" alt="Console" class="w-full"> -->
        </a>
        <a
          :href="$serviceURL('/quant/strength-by-derivatives')"
          class="app-button"
        >
          <!-- <img src="~/assets/sonar.svg" alt="Sonar" class="w-full"> -->
        </a>
        <a :href="$serviceURL('/quant/bgt')" class="app-button">
          <!-- <img src="~/assets/bgt.svg" alt="BGT" class="w-full"> -->
        </a>
        <a :href="$serviceURL('/price-action')" class="app-button">
          <!-- <img
            src="~/assets/priceaction-logo.svg"
            alt="Price Action"
            class="w-full"
          > -->
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLoading: false,
      isOpen: false
    }
  },

  computed: {
    currentUser () {
      return this.$store.getters['auth/user']
    }
  },

  watch: {
    $route () {
      this.isOpen = false
    }
  },

  mounted () {
    document.addEventListener('click', this.close)
  },

  beforeDestroy () {
    document.removeEventListener('click', this.close)
  },

  methods: {
    close (e) {
      if (this.$refs.apps && !this.$refs.apps.contains(e.target)) {
        this.isOpen = false
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
.app-button {
  @apply inline-flex justify-center items-center
    w-16 h-16 m-1 p-1 box-content
    overflow-hidden
    hover:bg-gray-200;
}
</style>

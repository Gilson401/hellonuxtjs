
<template>
  <div ref="dropdown" class="dropdown">
    <div v-if="$slots.trigger" @click="toggle">
      <slot name="trigger" />
    </div>

    <template v-if="$slots.default">
      <transition name="slide">
        <div v-show="isActive" class="dropdown-menu">
          <slot />
        </div>
      </transition>
    </template>
  </div>
</template>

<script>
export default {

  props: {
    active: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      isActive: false
    }
  },

  watch: {
    active (newVal) {
      this.isActive = newVal
    }
  },

  mounted () {
    document.addEventListener('click', this.close)
    this.isActive = this.active
  },

  beforeDestroy () {
    document.removeEventListener('click', this.close)
  },

  methods: {
    toggle () {
      this.isActive = !this.isActive
    //   this.$emit('update:active', this.isActive)
    },
    close (e) {
      // Previne que o click no próprio trigger dispare o fechamento do dropdown
      if (this.$refs.dropdown && !this.$refs.dropdown.contains(e.target)) {
        this.isActive = false
        // this.$emit('update:active', this.isActive)
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
.dropdown {
  @apply relative inline-block text-left;
}
.dropdown-menu {
  @apply origin-top-right transition-transform absolute z-20 -right-2 mt-1 bg-white
    border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none;
}
.slide-enter,
.slide-leave-to {
  transform: scaleY(0);
}
</style>

<template>
  <div class="my-4">
    <IfyDropdown :active.sync="isOpen">
      <template #trigger>
        <div class="w-40">
          <button type="button" class="ml-2 text-brand-700 flex items-center">
            <IfyIcon :icon="currentSortLabel.icon" size="sm" />
            <span class="ml-1 text-brand-700 text-base font-bold"> {{ currentSortLabel.label }}</span>
            <IfyIcon icon="chevron-down" size="sm" class="ml-7" />
          </button>
        </div>
      </template>

      <div class="w-40">
        <IfyDropdownItem
          v-for="(btn, key) in sortingParams"
          :key="key"
          @click="setSorting(key)"
        >
          <div>
            <span class="mr-2">
              <Fa :icon="btn.icon" />
            </span>
            <span
              :class="{
                'font-bold': currentSort === key,
                'group-hover:font-bold': currentSort !== key,
              }"
              v-text="btn.label"
            />
          </div>
        </IfyDropdownItem>
      </div>
    </IfyDropdown>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isOpen: null,
      sortingOptions: {
        new: {
          icon: 'certificate',
          label: 'Novos'
        },
        top: {
          icon: 'home',
          label: 'Populares'
        },
        best: {
          icon: 'rocket',
          label: 'Melhores'
        },
        controversial: {
          icon: 'random',
          label: 'Controversos'
        }
      }
    }
  },
  computed: {
    currentSort () {
      return this.$store.state.feed.sort
    },
    currentSortLabel () {
      return this.sortingOptions[this.$store.state.feed.sort]
    },
    sortingParams () {
      return this.sortingOptions
    }
  },

  methods: {
    setSorting (sortValue) {
      this.$store.dispatch('feed/setSorting', sortValue)
      this.isOpen = false
    }
  }
}
</script>
<style lang="postcss" scoped>
.ml-7{
  margin-left: 0.438rem;
}
</style>

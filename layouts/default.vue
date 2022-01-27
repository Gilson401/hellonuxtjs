<template>
  <div class="container mx-auto">
    <div class="flex w-full bg-gray-600 md:hidden justify-end">
      <drawer-base>
        <template #conteudo>
          <Linkslist />
        </template>

        <template #triggerelement>
          <p>
            "opennavb"
          </p>
        </template>
      </drawer-base>
    </div>
    <div
      class="container mx-auto px-8 space-x-2 hidden md:flex"
    >
      <Button
        v-for="(routeItem, index) in routesList"
        :key="index"
        :text="routeItem.label"
        @click="$router.push(routeItem.route)"
      />
    </div>

    <div>
      <Nuxt />
    </div>
  </div>
</template>

<script>

import { routes } from '../resources/routes'
import DrawerBase from '~/components/DrawerBase.vue'

export default {
  components: { DrawerBase },
  computed: {
    currentRouteName () {
      return this.$route.name
    },
    paths () {
      return this.$test.pages
    },
    routesList () {
      return routes.pages
    }
  }
}
</script>

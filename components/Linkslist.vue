<template>
  <div>
    <ul>
      <li v-for="(routeItem, index) in routesList" :key="index">
        <nuxt-link class="text-indigo-50" :to="routeItem.route">
          {{ routeItem.label }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { routes } from '../resources/routes'

export default {
  computed: {
    routesList () {
      return routes.pages
    }
  }
}
</script>

<style>

</style>

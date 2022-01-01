<template>
  <div>
    <div
      class="container mx-auto px-8 flex space-x-2"
    >
      <Button
        text="Home"
        @click="$router.push('/')"
      />

      <Button
        text="Nasa Apod API"
        @click="$router.push('/nasa')"
      />

      <Button
        text="Modal e Emit"
        @click="$router.push('/modalexib')"
      />

      <Button
        text="Table"
        @click="$router.push('/dinamictable')"
      />
        
      <Button
        text="Refs-example"
        @click="$router.push('/refs-example')"
      />

      <Button
        text="Positions"
        @click="$router.push('/positions')"
      />
    </div>

    <div class="container mx-auto px-8">
      <Nuxt />
    </div>
  </div>
</template>

<script>

export default {
  computed: {
    currentRouteName () {
      return this.$route.name
    }
  }
}
</script>

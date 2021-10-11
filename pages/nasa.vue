<template>
  <Cards />
</template>

<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
    this.$store.dispatch('nasa/getNasaItems')
  },
  methods: {}
}
</script>

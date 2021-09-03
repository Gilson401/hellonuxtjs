<template>
  <Cards />
</template>

<script>
export default {
  data () {
    return {
      randomStartDate: '2021-07-01'
    }
  },
  mounted () {
    this.$store.dispatch('nasa/getNasaItems')
  },
  methods: {
    getlista () {
      this.$axios.$get(`https://api.nasa.gov/planetary/apod?api_key=xbEqj2OOfMoxud9Gaelc2yKpFL123bBVPxBmTrJv&start_date=${this.randomStartDate}&end_date=2021-08-15`)
        .then((res) => {
          this.$store.commit('nasa/SET_NASA_LIST_ITEMS', res.data)
        })
    }
  }
}
</script>

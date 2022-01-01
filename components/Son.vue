<template>
  <div>
    <p>Eu sou filho e meu valor atual é {{ number }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      number: 1
    }
  },
  methods: {
    sonDo () {
      this.number++
    }
  }
}
</script>

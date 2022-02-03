<template>
  <div>
    <p>MAPACTONS EXAMPLE</p>
    <p>Mapactions associa diretamente os métodos das stores aos métodos que vc define no componente sem precisar usar <strong>this.$store.dispatch</strong> </p>
    <Button
      text="mappedChange"
      @click="mappedChange"
    />

    <p>Computed comum value: {{ exampleStorevalue }}</p>

    <hr>
    <h6 class="text-2xl mt-3">Abaixo dados das stores obtidos com getters</h6>
    <p>map getters - getItemValue: {{ getItemValue }}</p>
    <p>map getters -  nasaIsLoading: {{ nasaIsLoading }}</p>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      // map `this.doneCount` to `this.$store.getters.doneTodosCount`
      getItemValue: 'example/getItemValue',
      nasaIsLoading: 'nasa/isLoading'
    }),
    exampleStorevalue () {
      return this.$store.getters['example/getItemValue']
    }
  },
  methods: {
    ...mapActions(
      {
        mappedChange: 'example/changeStoreValue'
      }
    )
  }

}
</script>

<style>

</style>

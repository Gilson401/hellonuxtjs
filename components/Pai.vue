<template>
  <div>
    <p>PAI</p>
    <Button v-if="!esconder" :text="'father BTN Increase ' + numberfatherVar " @click="fatherinMethodIncrease" />
    <slot />
  </div>
</template>

<script>

export default {

  provide () {
    return {
      foo: 'I am the string stored in father foo provide',
      providedFunction: (value) => {
        return value * this.numberfatherVar
      },
      fatherinMethodFunction: this.fatherinMethodFunction,
      fatherDataVar: this.fatherDataVar,
      nullValueFather: this.nullValueFather,
      numberfatherVar: this.numberfatherVar,
      reactive: this.reactive
    }
  },
  props: {
    esconder: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      fatherDataVar: 'I am a string stored in father data',
      nullValueFather: 'null',
      numberfatherVar: 0,
      reactive: {
        value: 'Hello there'
      }
    }
  },
  methods: {
    fatherinMethodFunction (value) {
      return 'I am return of fatherinMethodFunction ' + value
    },
    fatherinMethodIncrease () {
      this.numberfatherVar++
      this.$set(this.reactive, 'value', `Hello there ${this.numberfatherVar}`)
    }
  }
}
</script>

<style>

</style>

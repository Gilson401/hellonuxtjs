<template>
  <label for="">
    <span>{{ label }}</span>
    <input
      type="checkbox"
      :checked="checked"
      @change="$emit('change', $event.target.checked)"
    >
  </label>
</template>

<script>

export default {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean,
    label: {
      type: String,
      default () {
        return ''
      }
    }
  },
  methods: {
    eventFromComponent () {
      console.log('clicou na div')
    }
  }
}
</script>

<style>

</style>

<template>
  <div>
    <birthday-form />
    <birthday-list />
  </div>
</template>

<script>
import birthdayForm from '~/components/birthdayForm.vue'
import BirthdayList from '~/components/birthdayList.vue'
export default {
  components: { birthdayForm, BirthdayList }

}
</script>

<style>

</style>

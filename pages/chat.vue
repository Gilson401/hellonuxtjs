<template>
  <div class="bg-indigo-900 mb-72 py-7">
    <Chatcomponentsvg
      v-for="(message, index) in messages"
      :key="index"
      :message="message"
    />

    <div class="tail"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      messages: [
        {
          comment: 'Tupy é para buy hold forever.',
          reactions: [
            { type: '&#128512;', count: 2 },
            { type: '&#10084;&#65039;', count: 1 },
            { type: '&#128169;', count: 2000 }],
          userName: 'Emmanuel',
          time: '15:15',
          isMy: false
        },
        {
          comment: 'Vara é 30.',
          reactions: [
            { type: '&#128512;', count: 2 }],
          userName: 'José',
          time: '15:15',
          isMy: true
        },
        {
          comment: 'Entra vendido no BTC',
          reactions: [
            { type: '&#128512;', count: 2 },
            { type: '&#10084;&#65039;', count: 4 },
            { type: '&#128169;', count: 2000 }],
          userName: 'Maria',
          time: '15:15',
          isMy: false
        },
        {
          comment: 'no Reactions',
          reactions: [],
          userName: 'Ignorado da Silva',
          time: '15:15',
          isMy: false
        },
        {
          comment: 'Its time to buy BCT and hold in as long as possible because the time is forever alone in thios spring. Cant belive its so hard',
          reactions: [{ type: '&#10084;&#65039;', count: 1 }],
          userName: 'Ignorado da Silva',
          time: '15:15',
          isMy: true
        }

      ]
    }
  }
}
</script>

<style lang="postcss" scoped>

.tail {
@apply w-8 h-16 ;

  background-image: radial-gradient(ellipse  at 0 0, transparent 80%, white 20%);
}

</style>

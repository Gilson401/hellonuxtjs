<template>
  <div>
    <Dropdown
      :props1="data1"
      :active="active"
    >
      <template #trigger>
        <p>
          click -me to show modal component with a special message
        </p>
      </template>
      <div class="w-72 h-96 ">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quidem temporibus doloribus ab amet
          quod consequuntur debitis nemo eligendi!
          Assumenda, velit. Id eaque vel consequuntur voluptatem commodi voluptate veniam non?
        </p>
      </div>
    </Dropdown>
    
    <section class="py-5">
      <h2> Computed com get e set. computedValue: {{ someVarData }} + {{ otherVarData }} = {{ computedValue }}</h2>

      <Button
        text="setComputed"
        @click="setComputed"
      />
    </section>

    <section>
      <h1>Conferir positions absolute. O elemento absolute vai se referir ao body ou ao primeiro ascendente não static?</h1>

      <div class="w-9/12 p-8 border-2 border-gray-900">
        <div class="w-9/12 p-8 border-2 border-gray-900">
          <div class="w-9/12 p-8 border-2 border-gray-900">
            <div class="absolute border-2 border-gray-900 top-0 left-0 bg-red-600">
              Descendente absoluto
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {

  data () {
    return {
      someVarData: 1,
      otherVarData: 2,
      boolA: false,
      boolB: true,
      active: false,
      data1: 1
    }
  },
  computed: {
    computedValue: {
      get () {
        return this.someVarData + this.otherVarData
      },
      set (value) {
      // também pode fazer outras coisas dentro do set como disparar eventos/emit
        alert('Isso irá mudar o valor de computedValue')
        this.someVarData = value
        this.otherVarData = value * 2
      }
    }
  },
  methods: {
    setComputed () {
      this.computedValue = 3
    }
  }

}
</script>

<style lang="postcss" scoped>
.help.is-info {
  @apply text-indigo-500;
}
</style>

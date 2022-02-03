<template>
  <div class="space-y-6 m-6">
    <SlotExample>
      <template v-if="showa" #start>
        <p>Eu sou start vindo de PAI</p>
      </template>

      <template v-if="showb">
        <p>uso o default value Vindo de PAI</p>
      </template>
    
      <template v-if="showc" slot="end">
        <p>Eu sou end Vindo de PAI</p>
      </template>
    </SlotExample>

    <SlotExample>
      <template #start>
        <Button
          text="Muda A"
          @click="showa = !showa"
        />
      </template>

      <template #default>
        <Button
          text="Muda B"
          @click="showb = !showb"
        />
      </template>
    
      <template slot="end">
        <Button
          text="Muda C"
          @click="showc = !showc"
        />
      </template>
    </SlotExample>

    <HnTitle
      selected-component="H2"
      text="Slot com v-bind (props)"
    />

    <!-- Componente SlotScope Possui um slot default -->
    <p> Aqui passamos um conteúdo </p>
    <SlotScope>
      {{ fathertext }}
    </SlotScope>

    <p> Aqui não passamos um conteúdo será renderizado o padrão </p>
    <SlotScope />

    <p> XXX Aqui estamos escolhendo, dentre as opções do componente SlotScope, qual fallback será exibido : </p>
    <SlotScope>
      <template #default="info">
        {{ info.slotScopedVariables.varB }}
      </template>
    </SlotScope>


    <p> O mesmo exemplo acima mas com outra sintaxe : </p>
    <SlotScope>
      <template slot-scope="info">
        {{ info.slotScopedVariables.varB }}
      </template>
    </SlotScope>



<p> O mesmo exemplo acima só que com outra sintaxe, v-slot:default ao invés de #default: </p>
    <SlotScope>
      <template v-slot:default="info">
        {{ info.slotScopedVariables.varB }}
      </template>
    </SlotScope>

    <p> Quando vc usa só um slot do componente, não informa qual o nome vc nem precisa dizer que está atribuindo ao default: </p>
    <SlotScope v-slot="info">
      {{ info.slotScopedVariables.varA }}
    </SlotScope>

    <p> Vc pode decompor a prop que vem do slot</p>
    <SlotScope v-slot=" { slotScopedVariables }">
      {{ slotScopedVariables.varB }}
    </SlotScope>

<section>
            <h2>The below items are dinamic slot generated.</h2>
            <DinamicSlots>
                <p slot="slotNameA" class="text-red-700 font-bold">
                Slot  content from father A
            </p>
            
            <template #slotNameB>
                <Button
                text="Button for dinamic slot      B"
                @click="showc = !showc"
                />
            </template>
            <template #slotNameC>
                <p> Slot  content  from father C</p>
            </template>
            </DinamicSlots>
</section>
  </div>
</template>

<script>

export default {

  data () {
    return {
      showa: false,
      showb: false,
      showc: false,
      fathertext: 'Text from father data variables'
    }
  },
  head: {
    title: 'V-modelcomponent',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Aplicando v-model em componentes customizados'
      }
    ]
  },

  computed: {
    computedSize () {
      switch (this.size) {
        case 'xs':
          return this.booleanB + ' - ' + 'w-50'
        case 'sm':
          return 'w-8 h-8'
        default:
          return 'w-10 h-10'
      }
    }
  },
  methods: {
    eventoParaChange (e) {
      console.log('eventoParaChange', e)
    }
  }
}
</script>

<style lang="postcss" scoped>
.btn{
    @apply bg-transparent border border-gray-500 hover:border-indigo-500 text-gray-500 hover:text-indigo-500 font-bold py-2 px-4 rounded-full;
}
</style>

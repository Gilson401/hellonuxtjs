<template>
  <div
    class="z-40 w-screen h-screen centro absolute bg-black-opacity"
    @click="$emit('closeModal')"
  >
    <div
      class="
        bg-white
        w-1/3
        md:max-w-md
        mx-auto
        rounded
        shadow-lg
        z-50
        overflow-y-auto
      "
      @click="handlePropagation"
    >
      <div class="py-4 text-left px-6">
        <div class="flex justify-between items-center">
          <p class="text-2xl font-bold">
            {{ config.title }}
          </p>
          <div class="cursor-pointer z-50" @click="$emit('closeModal')">
            <svg
              class="fill-current text-black"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <path
                d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
              />
            </svg>
          </div>
        </div>

        <p>
          {{ config.description }}
        </p>
        <input
          v-model="modalInputValue"
          class="border-2 border-gray-700 my-4 w-full"
          type="text"
          placeholder="Digite aqui"
        >

        <div class="flex justify-end pt-2">
          <button
            v-if="config.confirmButton"
            class="btn0"
            @click="resetmodalInputValue"
          >
            Confirm
          </button>
          <button v-if="config.cancelButton" class="btn1" @click="$emit('closeModal')">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    config: {
      type: Object,
      default () {
        return {
          title: 'default title',
          description: 'default description text',
          mode: 'input-text',
          confirmButton: true,
          cancelButton: true
        }
      }
    }
  },
  emits: ['closeModal', 'customChange'],
  data () {
    return {
      modalInputValue: ''
    }
  },
  methods: {
    resetmodalInputValue () {
      this.$emit('customChange', this.modalInputValue)
      this.modalInputValue = ''
    },
    handlePropagation (e) {
      e.stopPropagation()
    }
  }
}
</script>

<style lang="postcss" scoped>
.modal {
  transition: opacity 0.25s ease;
}
body.modal-active {
  overflow-x: hidden;
  overflow-y: visible !important;
}
.btn0{
    @apply bg-green-500 hover:bg-gray-600;
    @apply  p-3 px-4 mr-2;
    @apply  rounded-lg;
    @apply  text-white;
}
.btn1 {
    @apply bg-red-500  hover:bg-gray-600;
    @apply  p-3 px-4 mr-2;
    @apply  rounded-lg;
    @apply  text-white;
}
.bg-black-opacity {
     background-color: rgba(0, 0, 0, 0.4);
}
</style>

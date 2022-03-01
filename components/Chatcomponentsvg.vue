/* eslint-disable vue/no-v-html */
/* eslint-disable vue/no-v-html */
/* eslint-disable vue/no-v-html */
<template>
  <div>
    <p>SVG LIKE</p>
    <!-- user não autor -->
    <div
      v-if="!isMy"
      class="flex px-2 mb-2 other-message"
    >
      <div
        class="avatar rounded-full h-8 w-8 bg-gray-800 self-end flex-shrink-0 overflow-hidden mr-1"
      >
        <img src="https://picsum.photos/32/32" alt="avatar">
      </div>

      <div
        class="ballon bg-white rounded-r-sm rounded-tl-sm pt-1 pb-px pl-1.5 pr-1 relative w-full"
      >
        <span
          :class="[nameColor]"
          class="text-sm leading-5 font-bold break-words"
        >
          {{ userName }}
        </span>
        <p class="text-brand-700 text-base leading-6 break-words">
          {{ comment }}
        </p>

        <div class="flex justify-between">
          <ul class="flex">
            <li
              v-for="(reaction, index) in reactions"
              :key="index"
              class="rounded-full reaction-tag py-0.5 px-1.5 mr-1"
            >
              <span class="h-1 mr-0.5" v-html="reaction.type" />
              <span
                v-if="reaction.count"
                class="text-gray-500 text-xs leading-none"
              >
                {{ reaction.count | thousandFormatter }}
              </span>
            </li>
          </ul>
          <p
            class="text-gray-500 text-xs leading-none self-end font-normal mb-0.5"
          >
            {{ time }}
          </p>
        </div>
        <div class="tail-left" />
      </div>
    </div>
    <!-- User é o author -->
    <div
      v-if="isMy"
      class="flex px-2 mb-2"
      :class="{
        'my-message': isMy,
      }"
    >
    <!-- bg-white -->
      <div
        class="ballon  rounded-l-sm rounded-tr-sm pt-1 pb-px pl-1.5 pr-1 relative w-full"
      >
        <span
          :class="[nameColor]"
          class="text-sm leading-5 font-bold break-words"
        >
          {{ userName }}
        </span>
        <p class="text-brand-700 text-base leading-6 break-words">
          {{ comment }}
        </p>

        <div class="flex justify-between">
          <ul class="flex">
            <li
              v-for="(reaction, index) in reactions"
              :key="index"
              class="rounded-full reaction-tag py-0.5 px-1.5 mr-1"
            >
              <span class="h-1 mr-0.5" v-html="reaction.type" />
              <span
                v-if="reaction.count"
                class="text-gray-500 text-xs leading-none"
              >
                {{ reaction.count | thousandFormatter }}
              </span>
            </li>
          </ul>
          <p
            class="text-gray-500 text-xs leading-none self-end font-normal mb-0.5"
          >
            {{ time }}
          </p>
        </div>
        <div class="tail-right" />
      </div>
    </div>
  </div>
</template>

<script>
import thousandFormatter from '../helpers/numbers/thousandformatter'

export default {
  filters: {
    thousandFormatter (value) {
      if (value === 1) {
        return ''
      } else {
        return thousandFormatter(value)
      }
    }
  },
  props: {
    message: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      validEmotions: {
        screaming: '&#128561;',
        'star-struck': '&#129321;',
        smiling: '&#128516;',
        tongue: '&#128541;',
        crying: '&#128546;',
        like: '&#128077;',
        dislike: '&#128078;',
        vomit: '&#129326;',
        heart: '&#10084;&#65039;',
        poop: '&#128169;',
        fire: '&#128293;',
        party: '&#127881;'
      }
    }
  },
  computed: {
    userName () {
      return this.message.userName
    },
    comment () {
      return this.message.comment
    },
    reactions () {
      return this.message.reactions
    },
    time () {
      return this.message.time
    },
    nameColor () {
      return this.message.nameColor || 'text-green-600'
    },
    isMy () {
      return this.message.isMy
    }
  }
}
</script>

<style lang="postcss" scoped>
.reaction-tag {
  background: rgba(0, 0, 0, 0.1);
}

.tail-ballon {
  @apply absolute left-1 h-8 bottom-0 w-6 bg-no-repeat transform -translate-x-full;
  /* background-image: url('~assets/corner-fill.svg'); */
  background-size: 100% 150%;
}

.my-message {
width: calc(100% - 64px);
@apply ml-9;
}

.my-message .avatar {
  @apply hidden;
}

.my-message .ballon {
  /* @apply border border-red-200; */
  @apply bg-indigo-100;
}

.tail-right {
  position: absolute;
  bottom: 0;
  right: 0;
  height: 17px;
  width: 7px;
  transform: translateX(95%);
  background-repeat: no-repeat;
  background-image: url('../assets/img/corner-fill-right.svg')
}

.tail-left {
  position: absolute;
  bottom: 0;
  left: 0;
  border: none;
  height: 17px;
  width: 7px;
  transform: translateX(-100%);
  background-repeat: no-repeat;
  background-image: url('../assets/img/corner-fill-left.svg')
}

</style>

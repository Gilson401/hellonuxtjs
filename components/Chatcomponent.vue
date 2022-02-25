/* eslint-disable vue/no-v-html */
/* eslint-disable vue/no-v-html */
/* eslint-disable vue/no-v-html */
<template>
  <div>
    <!-- user não autor -->
    <div
      v-if="!isMy"
      class="flex px-2 mb-2 other-message"
    >
      <div
        class="avatar rounded-full h-16 w-16 bg-gray-800 self-end flex-shrink-0 overflow-hidden mr-2"
      >
        <img src="https://picsum.photos/200/300" alt="avatar">
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
        <div class="tail-ballon" />
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
  @apply bg-indigo-100;
}

.my-message .ballon:after {
  content: "";
  position: absolute;
  bottom: 0px;
  right: -30px;
  /* width: 32px;
  height: 32px; */
  @apply w-8 h-16 ;
  /* background: radial-gradient(circle at top right, transparent 65%, rgb(224, 231, 255) 50%); */
  background-image: radial-gradient(ellipse  at top right, transparent 80%, rgb(224, 231, 255) 10%);
}

.other-message .ballon:before {
  content: "";
  position: absolute;
  z-index: 0;
  bottom: 0px;
  left: -30px;
  /* width: 32px;
  height: 32px;
  background: radial-gradient(circle at top left, transparent 65%, white 50%); */
  @apply w-8 h-16 ;

  /* background-image: radial-gradient(ellipse  at 0 0, transparent 80%, white 20%); ok */

  background-image: radial-gradient(ellipse  at 0 3px, transparent 80%, white 10%);
}

</style>

<template>
  <div>
    <Loading v-if="isLoading" class="text-center" />
    <template v-else>
      <div class="flex justify-between -mt-1 mb-1 lg:mb-7">
        <h1
          class="text-2xl font-bold text-brand w-full hidden md:flex flex-row items-center "
        >
          {{ channel.name }}
          <small
            class="text-sm font-normal text-gray-500 hidden lg:block lg:ml-2 lg:mt-2"
          >
            &mdash; {{ feedSorting }}
          </small>
        </h1>
      </div>

      <div
        class="overflow-hidden bg-white border border-t-0 border-gray-300 md:rounded"
      >
        <template v-if="showHeader">
          <div
            class="h-20 md:h-40 overflow-hidden bg-center bg-no-repeat bg-cover bg-brand md:rounded md:rounded-b-none"
            :style="{ backgroundImage }"
          />

          <div
            class="flex items-end justify-between mx-4"
            :class="{
              '-mt-8 mb-5': channel.avatar,
              'my-2': !channel.avatar,
            }"
          >
            <p class="ml-0 font-bold text-left md:hidden topic-name text-blue">
              {{ channel.name }}
            </p>

            <img
              v-if="channel.avatar"
              :src="channel.avatar"
              class="w-16 h-16 md:w-24 md:h-24 bg-black TODO border-2 border-white border-solid rounded-full"
            >

            <p class="tag mr-0 md:hidden">
              #{{ channel.name }}
            </p>
            <p class="hidden md:flex">
              {{ channel.name }}
            </p>
          </div>
          <div>
            <p class="mx-4 text-sm text-left  md:hidden">
              {{ channel.description }}
            </p>

            <div class="m-4 leading-5 flex md:hidden">
              <span class="font-bold text-sm text-blue mr-1">
                {{ channel.topics_count }}
              </span>
              <span class="text-sm font-normal text-gray-500"> Tópicos</span>
            </div>
            <div class="mx-4 mt-4">
              <ul class="flex space-x-6">
                <li class="tabs-items active-tab">
                  Tópicos
                </li>
                <li class="tabs-items" />
              </ul>
            </div>
          </div>
        </template>

        <div class="border-t border-gray-300">
          <InfiniteLoader
            :stop="stop"
            :params="params"
            :loading="isLoadingTopics"
            :load-data="loadTopics"
          >
            <TopicList v-if="topics.length > 0" :topics="topics" />
            <div v-else-if="!isLoadingTopics" class="p-5">
              Nenhum tópico encontrado.
            </div>
          </InfiniteLoader>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  async asyncData ({ route, store }) {
    await store.dispatch('channels/index', {
      filter: { slug: route.params.slug }
    })
  },

  data () {
    return {
      isLoading: true,
      isLoadingTopics: true
    }
  },

  head () {
    return {
      title: `Canal ${this.channel.name}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Canal ${this.channel.description}`
        }
      ]
    }
  },

  computed: {
    showHeader () {
      return (
        this.channel.avatar || this.channel.banner || this.channel.description
      )
    },
    backgroundImage () {
      return this.channel.banner ? `url('${this.channel.banner}')` : null
    },
    slug () {
      return this.$route.params.slug
    },
    channel () {
      return this.$store.getters['channels/getBySlug'](this.slug)
    },
    feedSorting () {
      return this.$store.getters['feed/sortingLabel']
    },
    params () {
      return {
        filter: { channel: this.slug },
        sort: this.$route.query.sort || this.$store.state.feed.sort || 'top',
        page: { number: 1, size: 10 }
      }
    },
    topics () {
      return this.$store.getters['topics/feed']
    },
    stop () {
      return this.$store.getters['topics/stop']
    }
  },

  watch: {
    async $route () {
      this.$store.dispatch('topics/reset')
      this.$store.commit('topics/setParams', this.params)
      await this.loadTopics()
    }
  },

  async mounted () {
    this.isLoading = true

    this.$store.commit('feed/SHOW_FEED_SORTING', true)
    this.$store.dispatch('topics/reset')
    this.$store.commit('topics/setParams', this.params)
    await this.loadTopics()

    this.isLoading = false
  },

  beforeDestroy () {
    this.$store.commit('feed/SHOW_FEED_SORTING', false)
  },

  methods: {
    async loadTopics () {
      this.isLoadingTopics = true
      await this.$store.dispatch('topics/load')
      this.isLoadingTopics = false
    }
  }
}
</script>

<style lang="postcss" scoped>
.topic-name {
  font-size: 1.125rem;
  line-height: 1.125rem;
}

.topic-name::first-letter {
  text-transform: uppercase;
}

.tag {
  line-height: 0.875rem;
  font-size: 0.875rem;
  @apply text-gray-500 lowercase;
}
.tabs-items {
  @apply inline-block
  font-bold text-base text-gray-500 leading-8;
}

.tabs-items.active-tab {
  @apply  border-b-2 border-green-500 ;
}

</style>

<template>
  <div class="topic-details">
    <Loading v-if="isLoading" class="text-center" />
    <template v-else-if="topic">
      <MobileHeaderActions />
      <div class="topic-container">
        <header class="topic-header">
          <NuxtLink
            to="/"
            class="my-auto hidden lg:flex justify-center items-center w-10 h-10 mx-3"
          >
            <Fa icon="arrow-left" />
          </NuxtLink>

          <CardHeaderProfile
            :name="author.profile_name"
            :username="author.username"
            :avatar="avatar"
            :datetime="published"
            :role="author.role"
          />

          <div class="flex ml-auto items-center">
            <SaveButton :id="topic.id" :favorite="topic.my_favorites" />
            <TopicActionsButton :topic="topic" />
          </div>

          <div class="vote-buttons-box">
            <div class="px-3">
              <VoteButtons
                resource-type="topic"
                :resource-id="topic.id"
                :votes="topic.total_votes_diff"
                :my-votes="topic.my_votes"
                orientation="flex-row"
              />
            </div>
          </div>
        </header>

        <div class="topic-content">
          <p class="font-bold text-2xl clamp mb-4 break-words">
            {{ topic.title }}
          </p>

          <div ref="content" class="w-full mt-4 prose" v-html="topic.content" />

          <div v-if="topic.urls && topic.urls.attach" class="mt-4">
            <object
              :data="topic.urls.attach"
              class="w-full h-screen"
              type="application/pdf"
            >
              <iframe
                :src="`https://docs.google.com/viewer?url=${topic.urls.attach}&embedded=true`"
                class="w-full h-screen"
                frameborder="0"
              />
            </object>
          </div>

          <p v-if="updated" class="mt-4 text-xs italic text-gray-400">
            &mdash; Última atualização: {{ updated }}
          </p>
        </div>

        <footer>
          <div class="meta-footer">
            <div class="flex lg:hidden mr-4 lg:mr-2">
              <VoteButtons
                resource-type="topic"
                :resource-id="topic.id"
                :votes="topic.total_votes_diff"
                :my-votes="topic.my_votes"
                orientation="flex-row"
              />
            </div>

            <NuxtLink
              :to="`/topic/${topic.url}#comments`"
              class="flex items-center hover:underline mr-4 lg:mr-2"
            >
              <Fa icon="comment" class="mr-1" />
              {{ topic.total_comments }} Comentários
            </NuxtLink>

            <button
              v-if="false"
              class="flex items-center hover:underline mr-4 lg:mr-2"
            >
              <Fa icon="share-alt" class="mr-1" /> Compartilhar
            </button>

            <ChannelTags
              v-if="topic.channels.length > 0"
              :channels="topic.channels"
            />
          </div>

          <div class="disclaimer-box">
            <p>
              <span class="text-red-600">DISCLAIMER:</span> O investimento em
              ações é um investimento de risco e rentabilidade passada não é
              garantia de rentabilidade futura. Na realização de operações com
              derivativos existe a possibilidade de perdas superiores aos
              valores investidos, podendo resultar em significativas perdas
              patrimoniais. O informativo tem caráter totalmente educacional e
              não é recomendação de compra ou venda, apenas opinião pessoal do
              autor sobre o ativo financeiro em questão. Nenhum das informações
              contidas neste tópico, em alguma atualização ou em algum
              comentário deve ser interpretada como recomendação de investimento
              em qualquer ativo financeiro.
            </p>
          </div>
        </footer>
      </div>

      <div id="comments" class="comments-container mt-3">
        <CommentSection :topic="topic.id" />
      </div>
    </template>

    <Portal to="body">
      <Lightbox :active.sync="lightbox.active" :image="lightbox.image" />
    </Portal>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLoading: false,
      lightbox: {
        active: false,
        image: ''
      }
    }
  },

  async fetch () {
    this.isLoading = true
    await this.$store.dispatch('topics/show', this.topicId)
    this.isLoading = false
  },

  head () {
    let title = ''
    let preview = ''

    if (this.topic) {
      title = this.topic.title
      preview = this.topic.preview
    }

    return {
      title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: preview
        }
      ]
    }
  },

  computed: {
    topic () {
      return this.$store.getters['topics/getById'](this.topicId)
    },
    topicId () {
      return parseInt(this.$route.params.url.match(/(\d+)$/)[0])
    },
    author () {
      return this.topic.author
    },
    user () {
      return this.$store.getters['auth/user'] || {}
    },
    isAdmin () {
      return this.user.role === 'admin'
    },
    isMine () {
      return this.topic && this.topic.author_id === this.user.id
    },
    avatar () {
      return this.author.urls && this.author.urls.avatar
        ? this.author.urls.avatar
        : null
    },
    published () {
      return this.topic.published_at
    },
    updated () {
      return this.$dayjs(this.topic.published_at).isBefore(
        this.topic.updated_at
      )
        ? this.$fullDateTime(this.topic.updated_at)
        : null
    }
  },

  mounted () {
    // Aguarda até que o conteúdo do tópico esteja carregado,
    // para então aplicar o lightbox nas imagens.
    const interval = setInterval(() => {
      if (this.$refs.content) {
        this.lightboxInit()
        clearInterval(interval)
      }
    }, 50)

    this.markNotificationsAsRead()
  },

  methods: {
    lightboxInit () {
      const elements = Array.from(
        this.$refs.content.getElementsByTagName('img')
      )

      elements.forEach((el) => {
        el.classList.add('lightbox')
        el.onclick = () => {
          this.lightbox.image = el.getAttribute('src')
          this.lightbox.active = true
        }
      })
    },

    markNotificationsAsRead () {
    //   const filters = [
    //     'notification.topic.upvote',
    //     'notification.topic.mention'
    //   ]
    //   const notifications = this.$store.getters['notifications/unread']
      // .filter(
      //   item =>
      //     item.topic_id === this.topicId && filters.includes(item.description)
      // )
      // .map((item) => {
      //   return String(item.id)
      // })

    //   if (notifications.length > 0) {
    //     this.$store.dispatch('notifications/markAsRead', notifications)
    //   }
    }
  }
}
</script>

<style lang="postcss" scoped>
.topic-container,
.comments-container {
  @apply md:overflow-hidden bg-white  md:rounded border md:border-gray-300;
}

.topic-header {
  @apply flex p-5 lg:p-0 lg:my-2;
}

.vote-buttons-box {
  @apply ml-4 mr-2 hidden lg:flex lg:flex-col;
}

.topic-content {
  @apply px-5 lg:px-16;
}

.meta-footer {
  @apply flex flex-wrap items-stretch mt-2 mb-2 px-5 text-sm text-gray-500 lg:ml-16 lg:px-0;
}

.disclaimer-box {
  @apply px-5 py-3 text-xs italic font-medium text-justify text-gray-500 border-t border-gray-300;
}
</style>

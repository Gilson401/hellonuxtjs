<template>
  <div class="my-8 p-6 bg-white border border-gray-300 rounded">
    <h2 class="text-xl font-bold text-brand">
      Notificações
    </h2>

    <p class="mb-6 text-sm font-normal">
      Defina como você quer receber suas notificações.
    </p>

    <div v-if="isLoading" class="flex justify-center items-center">
      <Loading />
    </div>

    <div v-else class="m-auto space-y-4">
      <form @submit.prevent="submitPreferences">
        <div class="p-5 border border-gray-300 rounded-2xl mb-3">
          <h3 class="text-sm font-medium text-brand">
            Tópico
          </h3>
          <h4 class="text-sm font-normal">
            Você será notificado sempre que um membro da curadoria publicar um
            tópico relevante.
          </h4>

          <div class="mt-3">
            <div class="flex mb-2">
              <label class="text-xs inline-block font-medium">
                <input
                  id="notification_topic_email"
                  v-model="preferences.notification_topic_email"
                  type="checkbox"
                >
                Email.
              </label>
            </div>

            <div class="flex mb-2">
              <label class="text-xs inline-block font-medium">
                <input
                  id="notification_topic_push"
                  v-model="preferences.notification_topic_push"
                  type="checkbox"
                >
                Notificação desktop e mobile.
              </label>
            </div>
          </div>
        </div>

        <div class="p-5 border border-gray-300 rounded-2xl mb-3">
          <h3 class="text-sm font-medium text-brand">
            Menções
          </h3>
          <h4 class="text-sm font-normal">
            Você será notificado sempre que for mencionado.
          </h4>

          <div class="mt-3">
            <div class="flex mb-2">
              <label class="text-xs inline-block font-medium">
                <input
                  id="notification_mention_email"
                  v-model="preferences.notification_mention_email"
                  type="checkbox"
                >
                Email.
              </label>
            </div>

            <div class="flex mb-2">
              <label class="text-xs inline-block font-medium">
                <input
                  id="notification_mention_push"
                  v-model="preferences.notification_mention_push"
                  type="checkbox"
                >
                Notificação desktop e mobile.
              </label>
            </div>
          </div>
        </div>

        <div class="p-5 border border-gray-300 rounded-2xl mb-3">
          <h3 class="text-sm font-medium text-brand">
            Comentários
          </h3>
          <h4 class="text-sm font-normal">
            Você será notificado sempre que seu tópico receber comentários.
          </h4>

          <div class="mt-3">
            <div class="flex mb-2">
              <label class="text-xs inline-block font-medium">
                <input
                  id="notification_comment_email"
                  v-model="preferences.notification_comment_email"
                  type="checkbox"
                >
                Email.
              </label>
            </div>

            <div class="flex mb-2">
              <label class="text-xs inline-block font-medium">
                <input
                  id="notification_comment_push"
                  v-model="preferences.notification_comment_push"
                  type="checkbox"
                >
                Notificação desktop e mobile.
              </label>
            </div>
          </div>
        </div>

        <div class="flex">
          <div class="ml-auto">
            <BaseButton
              type="primary"
              native-type="submit"
              :loading="isLoading"
            >
              Salvar
            </BaseButton>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
//   middleware({ redirect }) {
//     // Página em construção; Redirecionar para o feed.
//     redirect('/')
//   },

  data () {
    return {
      isLoading: false,
      preferences: {
        notification_topic_email: false,
        notification_topic_push: false,
        notification_comment_email: false,
        notification_comment_push: false,
        notification_mention_email: false,
        notification_mention_push: false
      }
    }
  },

  meta: {
    title: 'Notificações'
  },

  computed: {
    userPreferences () {
      return this.$store.getters['notifications/getUserPreferences']
    },
    user () {
      return this.$store.getters['notifications/user']
    }
  },

  watch: {
    userPreferences () {
      this.loadStoredPreferences()
    }
  },

  async beforeMount () {
    await this.loadUserPreferences()
  },

  mounted () {
    this.loadStoredPreferences()
  },

  methods: {
    loadStoredPreferences () {
      const notificationsPreferences = this.userPreferences.filter(item =>
        item.key.startsWith('notification_')
      )

      if (notificationsPreferences.length === 0) {
        Object.keys(this.preferences).forEach((element) => {
          this.preferences[element] = true
        })
        return
      }

      notificationsPreferences.forEach((element) => {
        this.preferences[element.key] = element.value === 'true'
      })
    },
    
    async loadUserPreferences () {
      this.isLoading = true
      const { id } = this.user
      await this.$store.dispatch('notifications/load', id)
      this.isLoading = false
    },

    async submitPreferences () {
      const preferencesArray = []
      this.isLoading = true

      for (const [key, value] of Object.entries(this.preferences)) {
        preferencesArray.push({
          key,
          value: value.toString()
        })
      }

      const payload = {
        id: this.user.id,
        data: {
          preferences: preferencesArray
        }
      }

      try {
        await this.$store.dispatch('notifications/save', { ...payload })
        this.$toast.success('Preferências atualizadas com sucesso!')
      } catch (error) {
        this.$toast.error('Houve um erro na atualização das preferências.')
      }

      this.isLoading = false
    }
  }
}
</script>

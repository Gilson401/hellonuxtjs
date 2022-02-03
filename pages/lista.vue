<template>
  <div>
    <h1 class="text-3xl">
      O exemplo aqui é demonstrar que as classes do componente importado
      interagem com a classe do pai. Assim os seletores condicionais
      se comportam como previsto, como se estivessem no mesmo css.
    </h1>
    <Button
      :text="isDark ? 'Light' : 'Dark'"
      @click="isDark = !isDark"
    />
    <div
      :class="{'w-96':true, 'bg-gray-900': isDark}"
    >
      <nav :class="{'nav':true, 'nav-dark': isDark}">
        <span class="nav-title">Título da navegação</span>
        <ul class="nav-list">
          <ListItem
            text="Item 1 text"
          />

          <ListItem
            text="Notificações"
          />
          
          <ListItem
            text="Canais"
          />

          <ListItem
            text="Favoritos"
          />
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isDark: true
    }
  }
}
</script>

<style lang="postcss" scoped>

.container{
    border: 1px solid grey;
    min-height: 30rem;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
}

      .nav {
        color: #334155;
      }
      .nav.nav-dark {
        color: #bcc8d2;
      }
      .nav-title {
        display: block;
        padding: 0 1rem;
        margin-bottom: 0.5rem;
        font-size: 12px;
        line-height: 20px;
        text-transform: uppercase;
        font-weight: 700;
      }

      /* Não pertence ao Nav */
      .icon {
        display: block;
        width: 20px;
        height: 20px;
        text-align: center;
      }
      .badge {
        line-height: 12px;
        font-size: 12px;
        color: #fff;
        display: inline-block;
        margin-left: 8px;
        background-color: #dc2626;
        padding: 1px 4px;
        border-radius: 9999px;
      }

</style>

<template>
  <div class="container px-8 absolute">
    <div>
      <HnTitle selected-component="h1" text="Drawer sem Javascript" />
      <p>
        Esta é uma demonstração de um menu lateral cujo comportamento é definido exclusivamente com css.
      </p>

      <h2>Como Funciona?</h2>
      <p>
        Um input checkbox hidden é setado quando o seu label é clicado. O seletor identifica a classe do drawer que
        vem após o input checkbox que está hidden. Conforme o estado do checkbox o seletor adiciona ou remove o transform do
        drawer que faz o deslocamento.
      </p>
      <p>
        O seletor identifica se o usuário clicou fora do menu e o recolhe.
      </p>
    </div>

    <div class="centro ">
      <drawer-base class="pl-2 my-9 border border-yellow-300 w-52 rounded">
        <template #triggerelement>
          <p>
            Open
          </p>
        </template>
        
        <template #conteudo>
          <p class="pl-2 my-9 border border-yellow-300 w-52 rounded">
            O seletor identifica se o usuário clicou fora do menu e o recolhe.
          </p>
        </template>
      </drawer-base>
    </div>
  </div>
</template>

<script>
import DrawerBase from '~/components/DrawerBase.vue'

export default {
  components: { DrawerBase }

}
</script>

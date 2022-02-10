<template>
  <div class="container mx-auto space-y-3">
    <h1>Exemplificar como se comportam estilos scoped entre filhos e slots</h1>
    <div class="bluebg">
      Esta div está no pai e está com estilo azul que declarado no pai (this page) que possui scoped
    </div>

    <Filho esconder />
  
    <Filho class="bluebg" esconder mensagemrecebida="Filho com a classe do pai declarada na impementação do componente" />

    <div class="bluebg">
      <Filho esconder mensagemrecebida="Filho encapsulado numa div do pai que tem a classe bgazul" />
    </div>

    <div class="father-class-conditional">
      <Filho esconder filhoinbluebg="filho dentro de father-class-conditional" />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="postcss" scoped>

.bluebg{
    background-color: blue;
}

.father-class-conditional{
border: red solid 1px;
}
</style>

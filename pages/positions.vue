<template>
  <div>
    <div class="root">
      <div class="w-96 h-96 relative border-2 border-indigo-600">
        bloco 1
        <div class="positioning">
          Serei posicionado!
        </div>
      </div>

      <div class="w-96 h-96 border-2 border-indigo-600">
        Bloco 2 sem relative
        <div class="positioning w-96 h-10">
          <p>Meu pai BLOCO 2 não tem relative</p>
        </div>
      </div>

      <div class="w-96 h-96 relative border-2 border-indigo-600">
        Bloco 3 &#9989;
        <div class="positioning">
          Serei posicionado! &#129321;
        </div>
      </div>
      <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">
        Er
      </div>
    </div>
    <div id="div1">
      bla
    </div>

    <a class="googlefont" href="https://www.npmjs.com/package/@nuxtjs/google-fonts">Como colocar fontes do google no Nuxt - Npm</a>
    <a class="block" href="https://stackoverflow.com/questions/68165911/how-to-efficiently-load-google-fonts-in-nuxt">Como colocar fontes do google no Nuxt -StackOverflow</a>
    
    <section>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3551.2519947735864!2d-48.610243184950725!3d-27.116871783040022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8b1cff7caaa1d%3A0xfc4a5f0a6ae200d8!2sR.%20205%20-%20Morretes%2C%20Itapema%20-%20SC%2C%2088220-000!5e0!3m2!1spt-BR!2sbr!4v1641135040055!5m2!1spt-BR!2sbr"
        width="100%"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
      />
    </section>
    <footer :style="footerStyles">
      <p>&copy; 2020</p>
    </footer>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeColor: 'red',
      fontSize: 30,
      footerStyles: {
        display: 'block',
        backgroundColor: 'black',
        color: 'white',
        height: '200px',
        textAlign: 'center',
        padding: '5rem'
      }
    }
  }
}
</script>
<style lang="postcss" scoped>

a{
    font-size: x-large;
}
.googlefont{
    font-family: Mali;
}

#div2 {
  background-color: var(--main-bg-color);
}

.positioning {
  position: absolute;
  top: 210px;
  left: 30px;
  right: 70px;
  bottom: 100px;
  background-color: brown;
}

#div1 {
  height: 100px;
  width: max(50%, 300px);
}

p:hover {
    border-color: #088C19;
}
.root {
  display: flex;
}
</style>

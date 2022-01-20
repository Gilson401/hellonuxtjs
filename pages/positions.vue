<template>
  <div class="degrade">
    <h3 class="class-h3">
      Aplicando conceiros do curso Alura
    </h3>
    <div class="root">
      <div class="cflex">
        <div class="w-1/3 h-96 relative border-2 border-indigo-600">
          Bloco 1 possui relative
          <div class="positioning">
            Serei posicionado!
          </div>
        </div>

        <div class="w-1/3  h-96 border-2 border-indigo-600">
          Bloco 2 sem relative
          <div class="positioning w-96 h-10">
            <p>Meu pai BLOCO 2 não tem relative</p>
          </div>
        </div>

        <div class="w-1/3  h-96 relative border-2 border-indigo-600">
          Bloco 3 &#9989;
          <div class="positioning">
            Serei posicionado! &#129321;
          </div>
        </div>
      </div>
    </div>
    <div
      :style="{ color: activeColor, fontFamily: 'Mali', fontSize: fontSize + 'px',
                fontWeight: fontWeightMain,
                marginTop: '30px' }"
    >
      Esta div está usando style inline com v-bind (:style)
    </div>

    <div id="div1">
      <p>
        Esta div (#div1) está usando width: max(50%, 300px);
      </p>
      <p>
        CSS aceita funções.
      </p>
    </div>

    <h3 class="class-h3">
      Fontes externas
    </h3>
    
    <a class="googlefont" href="https://www.npmjs.com/package/@nuxtjs/google-fonts">Como colocar fontes do google no Nuxt - Npm</a>
    <a class="block" href="https://stackoverflow.com/questions/68165911/how-to-efficiently-load-google-fonts-in-nuxt">Como colocar fontes do google no Nuxt -StackOverflow</a>
    
    <section class="py=20">
      <h3 class="class-h3 mt-20">
        Atualmente eu trabalho na Investfy em Itapema
      </h3>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3551.2519947735864!2d-48.610243184950725!3d-27.116871783040022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8b1cff7caaa1d%3A0xfc4a5f0a6ae200d8!2sR.%20205%20-%20Morretes%2C%20Itapema%20-%20SC%2C%2088220-000!5e0!3m2!1spt-BR!2sbr!4v1641135040055!5m2!1spt-BR!2sbr"
        width="100%"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
      />
    </section>

    <section>
      <section>
        <footer :style="footerStyles">
          <a v-for="(item, index) in links" :key="index" :href="item.address">{{ item.name }}</a>

          <p>&copy; Gilson Paulo DEV 2021</p>
        </footer>
      </section>
    </section>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeColor: 'black',
      fontSize: 30,
      fontWeightMain: 700,
      footerStyles: {
        display: 'block',
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center',
        padding: '1rem',
        fontFamily: 'Mali'
      },
      links: [
        { name: 'Site pessoal', address: 'https://gilsonpaulo.com.br' },
        { name: 'Linkedin', address: 'https://www.linkedin.com/in/gpsc/' },
        { name: 'Gitlab', address: 'https://gitlab.com/GilsonInfet' },
        { name: 'GitHub', address: 'https://github.com/Gilson401' },
        { name: 'Youtube', address: 'https://www.youtube.com/channel/UC_K6s6sn9z0Tam-cvwL_mGg' },
        { name: 'Instagram', address: 'https://www.instagram.com/gp.web/?igshid=2toohtb69gfp' },
        { name: 'Curriculo', address: 'https://verified.cv/en/verify/16805790887987' },
        { name: 'Twitter', address: 'https://twitter.com/DeveloperGp' }],
      skills: [{ skill: 'HTML', picture: '' },
        { skill: 'CSS', picture: '' },
        { skill: 'JAVASCRIPT', picture: '' },
        { skill: 'REACT', picture: '' },
        { skill: 'REDUX', picture: '' },
        { skill: 'VUEJS', picture: '' },
        { skill: 'VUEX', picture: '' },
        { skill: 'AXIOS', picture: '' },
        { skill: 'NUXTJS', picture: '' },
        { skill: 'MONGODB', picture: '' },
        { skill: 'FIGMA', picture: '' },
        { skill: 'TESTES E2E CYPRESS', picture: '' },
        { skill: 'TESTES UNITÁRIOS FRONT END COM JEST', picture: '' },
        { skill: 'OPENAPI', picture: '' },
        { skill: 'SWAGGER', picture: '' },
        { skill: 'AXIOS', picture: '' },
        { skill: 'VSCODE', picture: '' },
        { skill: 'BOOTSTRAP', picture: '' },
        { skill: 'STYLED COMPONENTS em REACT', picture: '' },
        { skill: 'TAILWINDCSS', picture: '' },
        { skill: 'SCRUM', picture: '' },
        { skill: 'GITHUB EM EQUIPE', picture: '' },
        { skill: 'DOCKER e DOCKERFILE', picture: '' },
        { skill: 'NGINX', picture: '' }]
    }
  }
}
</script>
<style lang="postcss" scoped>

 .cflex{
     display:flex;
 }

@media screen and (max-width: 780px ){
 .cflex{
     display:block;
 }
}

.degrade{
    background: linear-gradient(#cbf1f5, #a6e3e9);
}
.class-h3 {
    font-size: x-large;
    font-family: Mali;
    font-weight: 700;
}

a{
    font-size: x-large;
    display: block;
}

a:first-child{
    color:aqua;
}
.googlefont{
    font-family: Mali;
}

#div2 {
  background-color: var(--main-bg-color);
}

.positioning {
  position: absolute;
  bottom: 100px;
  left: 30px;
  right: 70px;
  top: 210px;
  background-color: brown;
  transition: background-color 5s, top 5s;
}
.positioning:hover{
  transition: background-color 2s, top 2s;
  top: 20px;
  background-color: black;
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

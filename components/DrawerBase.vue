<template>
  <div>
    <label
      id="openmenu"
      for="menu-opener"
      tabindex="0"
      aria-haspopup="true"
      role="button"
      aria-controls="menu"
      class=""
    >
    
      <slot name="triggerelement">
        SLOT triggerelement
      </slot>
    </label>
 
    <input
      id="menu-opener"
      type="checkbox"
      data-menu
    
    >
  
    <aside
      id="menu"
      class="DrawerMenu border-4 border-red-300"
      role="menu"
      aria-labelledby="openmenu"
    >
      <nav class="Menu  border-4 border-yellow-300 ">
        <div class="w-full flex justify-between pb-4 border-4 border-green-600">
          <div class="inline-block">
            <h2>Puro CSS Menu</h2>
          </div>
          <label
            for="menu-opener"
            class="inline "
          > X </label>
        </div>
        <div class="pl-2 py-9 border border-yellow-300 w-52 rounded">
          <slot name="conteudo">
            42 slotconteudo em nav
          </slot>
        </div>
      </nav>
      <label
        for="menu-opener"
        class="MenuOverlay"
      />
    </aside>
  </div>
</template>

<style lang="postcss" scoped>

.OpenMenuButton {
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 900;
  word-spacing: 140%;
  letter-spacing: 4px;
  
}

.DrawerMenu {
  position: fixed;
  z-index: 99;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  bottom: 0;
  transform: translateX(-100%);
  transition: transform 0.5s cubic-bezier(0.4, 0.0, 0.2, 1);
  display: grid;
  grid-template-areas: 'MENU OVERLAY';
  grid-template-columns: 15fr 5fr
  
}

@media (min-width: 30em) {

.DrawerMenu {
    grid-template-columns: auto 1fr
  
}
  }

[data-menu]:checked ~ .DrawerMenu {
    transform: none
  
}

.Menu {
  display: block;
  flex-flow: column wrap;
  transform: translateX(-30%);
  opacity: 0.1;
  color: #fff;
  transition: all 500ms cubic-bezier(0.4, 0.0, 0.2, 1);
  transition-delay: 0;
  contain: content;
  grid-area: 'MENU';
  background-color: rebeccapurple;
  box-sizing: border-box;
  padding: 24px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;

}

@media (min-width: 30em) {

.Menu {
    min-width: 400px
}
  }

[data-menu]:checked ~ .DrawerMenu .Menu {
    transform: none;
    opacity: 1;
    transition-delay: 300ms
}

.Menu a {
    text-decoration: none;
    color: #FFFFFF80;
    display: block;
    padding: 16px 0
  }

.Menu a:hover {
      color: #69F0AE;
    }

.Menu > * + * {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

.MenuOverlay {
  display: block;
  grid-area: 'OVERLAY'
}

[data-menu]:not(:checked) ~ .DrawerMenu .MenuOverlay {
    pointer-events: none
}
</style>

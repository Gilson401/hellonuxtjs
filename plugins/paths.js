const test = {
  pages: [
    { route: '/modalexib', label: 'Modais' },
    { route: '/dinamictable', label: 'Tabela' },
    { route: '/refs-example', label: 'Refs' },
    { route: '/propagations', label: 'Propagations' },
    { route: '/positions', label: 'Positions' },
    { route: '/drawerexample', label: 'Css drawer' }
  ]
}
  
export default ({ app }, inject) => {
  inject('test', test)
}

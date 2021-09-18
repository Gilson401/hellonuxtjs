export default (context, inject) => {
  const varOne = 'I am varOne'
  inject('varOne', varOne)
  context.$varOne = varOne

  const varTwo = 'I am varTwo'
  inject('varTwo', varTwo)
  context.$varTwo = varTwo
}

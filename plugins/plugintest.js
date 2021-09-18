export default (context, inject) => {
  const countCaracters = (msg = '') => {
    const size = msg.length
    return `O texto ${msg} contém ${size} caracteres.`
  }
  inject('countCaracters', countCaracters)
  context.$countCaracters = countCaracters
}

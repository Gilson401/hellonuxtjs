/**
 * Abrevia o número especificado e adiciona o marcador de milhar no final.
 * @param {Number} num Número que será formatado
 * @param {Number} digits Quantidade de dígitos após a vírgula
 * @return {String} Número abreviado e formatado
 */
export default function thousandFormatter (num, digits) {
  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'K' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'G' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' }
  ]
  
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/
  
  const item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value
    })
  
  return item
    ? (num / item.value).toFixed(digits).replace(rx, '$1') + item.symbol
    : '0'
}

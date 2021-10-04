
const cgtFomObj = key => ({
  a: 'Valor de A',
  b: 'valorde b',
  'c-c': 'valor de c-c'
})[key] || 'Key inexistente'

console.log(cgtFomObj('c-c')) 


const cgtFomObj = key => ({
  a: 'Valor de A',
  b: 'valorde b',
  'c-c': 'valor de c-c'
})[key] || 'Key inexistente'

const bla = (par, { objPar2, objPar }) => {
  return { par, objPar, objPar2 }
}

const obj = {
  objPar: 'OBJPV',
  objPar2: 'OBJPV2'
}

console.log(bla(1, obj))

async function loadStickyTopic () {
  try {
    const response = await apiService.get('topics', {
      params: {
        page: {
          number: 1,
          size: 1
        }
      }
    })

    commit('setStickTopic', response.data.data[0])
  } catch (error) {
    throw new Error('Não foi possível carregar o tópico fixo')
  }
}

export default (context, inject) => {
  const brlCurrencyFormat = (val) => {
    return 'R$ ' +
            val.toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })
  }

  inject('brlCurrencyFormat', brlCurrencyFormat)
  context.$brlCurrencyFormat = brlCurrencyFormat
}

import dayjs from 'dayjs'
export default (context, inject) => {
  const formatToDayJsStringDate = (date) => {
    if (!date) { return dayjs('0000-00-00') }
        
    const day = date.split('/')[0]
    const month = date.split('/')[1]
    const year = date.split('/')[2]
        
    return year + '-' + ('0' + month).slice(-2) + '-' + ('0' + day).slice(-2)
  }
  inject('formatToDayJsStringDate', formatToDayJsStringDate)
  context.$formatToDayJsStringDate = formatToDayJsStringDate

  const brlCurrencyFormat = (val) => {
    return 'R$ ' +
            val.toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })
  }

  inject('brlCurrencyFormat', brlCurrencyFormat)
  context.$brlCurrencyFormat = brlCurrencyFormat

  const formatDate = (date, dayJsFormat = 'DD/MM/YYYY') => {
    if (date === null) { return '-' }
    return dayjs(date).format(dayJsFormat)
  }

  inject('formatDate', formatDate)
  context.$formatDate = formatDate

  const dateRangeOverlapsp = (searchStart, searchEnd, itemStart, itemEnd) => {
    if (itemEnd.diff(searchStart) >= 0 && searchEnd.diff(itemEnd) >= 0) { return true }
    if (searchEnd.diff(itemStart) >= 0 && itemEnd.diff(searchEnd) >= 0) { return true }
    if (itemStart.diff(searchStart) >= 0 && searchEnd.diff(itemEnd) >= 0) { return true }
    if (searchStart.diff(itemStart) >= 0 && itemEnd.diff(searchEnd) >= 0) { return true }
  
    return false
  }

  inject('dateRangeOverlapsp', dateRangeOverlapsp)
  context.$dateRangeOverlapsp = dateRangeOverlapsp

  const isSomeInvalidDate = (paramDates = []) => {
    let dates = paramDates
    dates = dates.map((item) => {
      return formatToDayJsStringDate(item)
    })
        
    const isDatesInvalid = dates.some((item) => {
      return isNaN(Date.parse(item))
    })
    return isDatesInvalid
  }

  inject('isSomeInvalidDate', isSomeInvalidDate)
  context.$isSomeInvalidDate = isSomeInvalidDate
}

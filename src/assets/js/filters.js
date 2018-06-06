import Vue from 'vue'

Vue.filter('sliceTo', (num, n) => {
  if (Number.isNaN(+num)) return '--'
  if (num < 0) return num.toFixed(n)
  let decimalHolder = Math.pow(10, n)
  return (Math.floor(num * decimalHolder) / decimalHolder).toFixed(n)
})

Vue.filter('fixedTo', (num, n) => {
  if (Number.isNaN(+num)) return '--'
  return (+num).toFixed(n)
})

Vue.filter('signed', (n) => {
  if (n === undefined || Number.isNaN(n)) return '--'
  return n > 0
    ? '+' + n.toFixed(2)
    : '' + n.toFixed(2)
})

Vue.filter('changeClass', mkt => {
  let {close, open} = mkt
  if (close > open) return 'color-buy'
  else if (close < open) return 'color-sell'
  else return ''
})

import Vue from 'vue'

Vue.filter('sliceTo', (num, n) => {
  if (Number.isNaN(+num)) return '--'
  let decimalHolder = Math.pow(10, n)
  return (Math.floor(num * decimalHolder) / decimalHolder).toFixed(n)
})

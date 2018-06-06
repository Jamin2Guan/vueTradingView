import {$get} from '@/axios'

export default {
  namespaced: true,
  state: {
    baseCoin: 'USDT',
    targetCoin: 'BTC',
    allPairSymbols: {}
  },
  getters: {
    klineSymbol (state) {
      return (state.targetCoin + state.baseCoin).toLowerCase()
    },
    allBaseCoins (state) {
      let obj = {}
      let result = []
      state.allPairSymbols.forEach(pair => {
        let baseCoin = pair['quote-currency']
        if (!obj[baseCoin]) {
          obj[baseCoin] = true
          result.push(baseCoin)
        }
      })
      return result
    }
  },
  mutations: {
    updateBaseCoin (state, newBaseCoin) {
      state.baseCoin = newBaseCoin
    },
    updateTargetCoin (state, newTargetCoin) {
      state.targetCoin = newTargetCoin
    },
    updateGetAllSymbols (state, arrSymbols) {
      state.allPairSymbols = arrSymbols
    },
    marketOverview (state, arrData) {
      let allSbls = state.allPairSymbols
      let baseCoins = Object.keys(allSbls)
      arrData.forEach(pair => {
        baseCoins.forEach(bc => {
          let idx = pair.symbol.lastIndexOf(bc.toLowerCase())
          if (idx !== 0 && ~idx) {
            allSbls[bc][pair.symbol.slice(0, idx).toUpperCase()] = pair
          }
        })
      })
    }
  },
  actions: {
    async getAllSymbols ({commit}) {
      let res = await $get('https://api.huobipro.com/v1/common/symbols')
      if (res.status === 'ok') {
        let obj = {}
        res.data.forEach(pair => {
          obj[pair['quote-currency'].toUpperCase()] = {
            [pair['base-currency'].toUpperCase()]: {
              amount: null,
              close: null,
              count: null,
              high: null,
              low: null,
              open: null,
              symbol: null,
              vol: null,
            }
          }
        })
        console.log(obj)
        commit('updateGetAllSymbols', obj)
      }
    }
  }
}

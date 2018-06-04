export default {
  namespaced: true,
  state: {
    baseCoin: 'USDT',
    targetCoin: 'BTC'
  },
  getters: {
    pairSymbol (state) {
      return `${state.targetCoin}_${state.baseCoin}`.toUpperCase()
    },
    klineSymbol (state) {
      return (state.targetCoin + state.baseCoin).toLowerCase()
    }
  },
  mutations: {
    updateBaseCoin (state, newBaseCoin) {
      state.baseCoin = newBaseCoin
    },
    updateTargetCoin (state, newTargetCoin) {
      state.targetCoin = newTargetCoin
    }
  },
  actions: {}
}

<template>
  <div id="page-pairs">
    <div class="pd-10 clear-fix">
      <div class="fl w25 pr-10 border-box">
        <pairs-info-comp></pairs-info-comp>
        <news-comp></news-comp>
      </div>
      <div class="fl w75">
        <kline-comp></kline-comp>
        <div class="clear-fix">
          <div class="w70 fl pr-10 border-box">
            <operation-comp></operation-comp>
          </div>
          <div class="w30 fr">
            <market-depth-comp></market-depth-comp>
          </div>
        </div>
        <div class="clear-fix">
          <div class="fl w60 pr-10 border-box">
            <depth-char-comp></depth-char-comp>
          </div>
          <div class="fr w40">
            <trades-list-comp></trades-list-comp>
          </div>
        </div>
        <coin-info-comp></coin-info-comp>
      </div>
    </div>
  </div>
</template>

<script>
import CoinInfoComp from '@c/Pairs/CoinInfoComp'
import DepthCharComp from '@c/Pairs/DepthCharComp'
import KlineComp from '@c/Pairs/KlineComp'
import MarketDepthComp from '@c/Pairs/MarketDepthComp'
import NewsComp from '@c/Pairs/NewsComp'
import OperationComp from '@c/Pairs/OperationComp'
import PairsInfoComp from '@c/Pairs/PairsInfoComp'
import TradesListComp from '@c/Pairs/TradesListComp'

export default {
  name: "pairs",
  components: {
    CoinInfoComp,
    DepthCharComp,
    KlineComp,
    MarketDepthComp,
    NewsComp,
    OperationComp,
    PairsInfoComp,
    TradesListComp,
  },
  data () {
    return {}
  },
  computed: {},
  watch: {},
  methods: {},
  created () {
  }
}
</script>

<style scoped>

</style>

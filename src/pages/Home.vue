<template>
  <div>
    <banners-comp></banners-comp>
    <line-news-comp></line-news-comp>
    <div class="ph-60 pv-30">
      <coin-list-comp></coin-list-comp>
    </div>
    <exchange-desc-comp></exchange-desc-comp>
    <entrance-comp></entrance-comp>
  </div>
</template>

<script>
import BannersComp from '@c/Home/BannersComp'
import LineNewsComp from '@c/Home/LineNewsComp'
import CoinListComp from '@c/Home/CoinListComp'
import ExchangeDescComp from '@c/Home/ExchangeDescComp'
import EntranceComp from '@c/Home/EntranceComp'
export default {
  name: "home",
  components: {
    BannersComp,
    LineNewsComp,
    CoinListComp,
    ExchangeDescComp,
    EntranceComp
  }
}
</script>

<style scoped>

</style>

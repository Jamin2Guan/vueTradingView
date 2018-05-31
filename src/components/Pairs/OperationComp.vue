<template>
  <div class="cont-box">
    <div class="cont-title pb-0">
      <span class="link is-active">限价交易</span>
      <span class="link">限价交易</span>
    </div>
    <div class="clear-fix ph-15 pv-25 block-height">
      <div class="fl w50 pr-15 border-box">
        <limit-order-form base-coin="USDT" target-coin="BTC" buy-or-sell="buy"></limit-order-form>
      </div>
      <div class="fr w50 pl-15 border-box">
        <limit-order-form base-coin="USDT" target-coin="BTC" buy-or-sell="sell"></limit-order-form>
      </div>
    </div>
  </div>
</template>

<script>
import LimitOrderForm from '@c/Pairs/LimitOrderForm'
export default {
  name: "operation-comp",
  components: {LimitOrderForm},
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
.link{
  padding-bottom: 14px;
}
</style>

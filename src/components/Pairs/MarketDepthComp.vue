<template>
  <div class="cont-box">
    <div class="cont-title">最新价 7471.47 {{baseCoin}}</div>
    <div class="pv-10 ph-5 block-height">
      <table class="market-depth-table"
             cellpadding="0"
             cellspacing="0">
        <colgroup>
          <col class="w10">
          <col class="w25">
          <col class="w25">
          <col class="w25">
        </colgroup>
        <thead class="color-weak">
          <tr>
            <td></td>
            <td>价格({{baseCoin}})</td>
            <td>数量({{targetCoin}})</td>
            <td>总额({{baseCoin}})</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(order, idx) in selling" :key="idx">
            <td class="color-sell">卖 {{selling.length - idx}}</td>
            <td>{{order.price}}</td>
            <td>{{order.amount}}</td>
            <td>{{(order.price * order.amount).toFixed(4)}}</td>
          </tr>
        </tbody>
      </table>
      <div class="divider"></div>
      <table class="market-depth-table"
             cellpadding="0"
             cellspacing="0">
        <colgroup>
          <col class="w10">
          <col class="w25">
          <col class="w25">
          <col class="w25">
        </colgroup>
        <tbody>
          <tr v-for="(order, idx) in buying" :key="idx">
            <td class="color-buy">买 {{idx+1}}</td>
            <td>{{order.price}}</td>
            <td>{{order.amount}}</td>
            <td>{{(order.price * order.amount).toFixed(4)}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "market-depth-comp",
  props: [
    'baseCoin',
    'targetCoin'
  ],
  data () {
    return {
      selling: [
        {
          price: 7469.01,
          amount: 0.0010
        },
        {
          price: 7469.01,
          amount: 0.0010
        },
        {
          price: 7469.01,
          amount: 0.0010
        },
        {
          price: 7469.01,
          amount: 0.0010
        },
        {
          price: 7469.01,
          amount: 0.0010
        },
        {
          price: 7469.01,
          amount: 0.0010
        },
        {
          price: 7469.01,
          amount: 0.0010
        }
      ],
      buying: [
        {
          price: 7469.01,
          amount: 0.0010
        },
        {
          price: 7469.01,
          amount: 0.0010
        },
        {
          price: 7469.01,
          amount: 0.0010
        },
        {
          price: 7469.01,
          amount: 0.0010
        },
        {
          price: 7469.01,
          amount: 0.0010
        },
        {
          price: 7469.01,
          amount: 0.0010
        },
        {
          price: 7469.01,
          amount: 0.0010
        }
      ]
    }
  },
  computed: {},
  watch: {},
  methods: {},
  created () {
  }
}
</script>

<style scoped>
  .market-depth-table{
    width: 100%;
    text-align: center;
    font-size: 12px;
  }
  .market-depth-table td {
    line-height: 22px;
  }
  .divider {
    border-top-color: #1f2943;
    margin: 5px;
  }
</style>

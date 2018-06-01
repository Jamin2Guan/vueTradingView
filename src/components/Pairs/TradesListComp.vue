<template>
  <div class="cont-box">
    <div class="cont-title">实时成交</div>
    <div class="block-height tbody-wrap">
      <table class="w100">
        <colgroup>
          <col class="w25">
          <col class="w25">
          <col class="w25">
          <col class="w25">
        </colgroup>
        <tbody>
        <tr class="color-weak">
          <td>时间</td>
          <td>方向</td>
          <td>价格({{baseCoin}})</td>
          <td>数量({{targetCoin}})</td>
        </tr>
        <tr v-for="(order,idx) in list" :key="idx">
          <td>{{order.time}}</td>
          <td>{{order.direction}}</td>
          <td>{{order.price}}</td>
          <td>{{order.amount}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "trades-list-comp",
  props: ['baseCoin', 'targetCoin'],
  data () {
    return {
      list: [
        {
          time: '10:53:24',
          direction: 'buy',
          price: 0.00164071,
          amount: 227.56
        },
        {
          time: '10:53:24',
          direction: 'buy',
          price: 0.00164071,
          amount: 227.56
        },
        {
          time: '10:53:24',
          direction: 'buy',
          price: 0.00164071,
          amount: 227.56
        },
        {
          time: '10:53:24',
          direction: 'buy',
          price: 0.00164071,
          amount: 227.56
        },
        {
          time: '10:53:24',
          direction: 'buy',
          price: 0.00164071,
          amount: 227.56
        },
        {
          time: '10:53:24',
          direction: 'buy',
          price: 0.00164071,
          amount: 227.56
        },
        {
          time: '10:53:24',
          direction: 'buy',
          price: 0.00164071,
          amount: 227.56
        },
        {
          time: '10:53:24',
          direction: 'buy',
          price: 0.00164071,
          amount: 227.56
        },
        {
          time: '10:53:24',
          direction: 'buy',
          price: 0.00164071,
          amount: 227.56
        },
        {
          time: '10:53:24',
          direction: 'buy',
          price: 0.00164071,
          amount: 227.56
        },
        {
          time: '10:53:24',
          direction: 'buy',
          price: 0.00164071,
          amount: 227.56
        },
        {
          time: '10:53:24',
          direction: 'buy',
          price: 0.00164071,
          amount: 227.56
        },
        {
          time: '10:53:24',
          direction: 'buy',
          price: 0.00164071,
          amount: 227.56
        },
        {
          time: '10:53:24',
          direction: 'buy',
          price: 0.00164071,
          amount: 227.56
        },
        {
          time: '10:53:24',
          direction: 'buy',
          price: 0.00164071,
          amount: 227.56
        },
        {
          time: '10:53:24',
          direction: 'buy',
          price: 0.00164071,
          amount: 227.56
        },
        {
          time: '10:53:24',
          direction: 'buy',
          price: 0.00164071,
          amount: 227.56
        },
        {
          time: '10:53:24',
          direction: 'buy',
          price: 0.00164071,
          amount: 227.56
        },
        {
          time: '10:53:24',
          direction: 'buy',
          price: 0.00164071,
          amount: 227.56
        },
        {
          time: '10:53:24',
          direction: 'buy',
          price: 0.00164071,
          amount: 227.56
        },
        {
          time: '10:53:24',
          direction: 'buy',
          price: 0.00164071,
          amount: 227.56
        },
        {
          time: '10:53:24',
          direction: 'buy',
          price: 0.00164071,
          amount: 227.56
        },
        {
          time: '10:53:24',
          direction: 'buy',
          price: 0.00164071,
          amount: 227.56
        },
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
.tbody-wrap{
  line-height: 22px;
  text-align: center;
  font-size: 12px;
  padding: 5px 0;
}
</style>

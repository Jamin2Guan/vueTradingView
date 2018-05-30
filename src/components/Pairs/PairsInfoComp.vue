<template>
  <div>
    <div class="cont-box">
      <div class="cont-title">
        <div>
          <strong>市场</strong>
        </div>
        <div class="pair-symbols">
          <span class="link"
                @click="baseCoin='USDT'"
                :class="{'is-active': baseCoin==='USDT'}">USDT</span>
          <span class="link"
                @click="baseCoin='BTC'"
                :class="{'is-active': baseCoin==='BTC'}">BTC</span>
          <span class="link"
                @click="baseCoin='ETH'"
                :class="{'is-active': baseCoin==='ETH'}">ETH</span>
        </div>
      </div>
      <div class="pt-15">
        <div class="ph-15">
          <table class="table-head" cellspacing="0" cellpadding="0">
            <colgroup>
              <col class="w30">
              <col class="w30">
              <col class="w30">
            </colgroup>
            <tr>
              <th class="coin-symbol">币种</th>
              <th>最新价</th>
              <th class="coin-change">涨跌幅</th>
            </tr>
          </table>
        </div>
        <div class="tbody-wrap">
          <table class="table-body " cellspacing="0" cellpadding="0">
            <colgroup>
              <col class="w30">
              <col class="w30">
              <col class="w30">
            </colgroup>
            <tr v-for="(coin,idx) in coinList" :key="idx">
              <td class="coin-symbol">{{coin.symbol.slice(0,3)}}</td>
              <td>{{coin.close}}</td>
              <td class="coin-change">{{coin.change}}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pairs-info-comp",
  data () {
    return {
      baseCoin: 'USDT',
      coinList: [
        {
          symbol: 'BTC_USDT',
          close: 1578.45,
          change: -6.32
        },
        {
          symbol: 'BTC_USDT',
          close: 1578.45,
          change: -6.32
        },
        {
          symbol: 'BTC_USDT',
          close: 1578.45,
          change: -6.32
        },
        {
          symbol: 'BTC_USDT',
          close: 1578.45,
          change: -6.32
        },
        {
          symbol: 'BTC_USDT',
          close: 1578.45,
          change: -6.32
        },
        {
          symbol: 'BTC_USDT',
          close: 1578.45,
          change: -6.32
        },
        {
          symbol: 'BTC_USDT',
          close: 1578.45,
          change: -6.32
        },
        {
          symbol: 'BTC_USDT',
          close: 1578.45,
          change: -6.32
        },
        {
          symbol: 'BTC_USDT',
          close: 1578.45,
          change: -6.32
        },
        {
          symbol: 'BTC_USDT',
          close: 1578.45,
          change: -6.32
        },
        {
          symbol: 'BTC_USDT',
          close: 1578.45,
          change: -6.32
        },
        {
          symbol: 'BTC_USDT',
          close: 1578.45,
          change: -6.32
        },
        {
          symbol: 'BTC_USDT',
          close: 1578.45,
          change: -6.32
        },
        {
          symbol: 'BTC_USDT',
          close: 1578.45,
          change: -6.32
        },
        {
          symbol: 'BTC_USDT',
          close: 1578.45,
          change: -6.32
        },
        {
          symbol: 'BTC_USDT',
          close: 1578.45,
          change: -6.32
        },
        {
          symbol: 'BTC_USDT',
          close: 1578.45,
          change: -6.32
        },
        {
          symbol: 'BTC_USDT',
          close: 1578.45,
          change: -6.32
        },
        {
          symbol: 'BTC_USDT',
          close: 1578.45,
          change: -6.32
        },
        {
          symbol: 'BTC_USDT',
          close: 1578.45,
          change: -6.32
        },
        {
          symbol: 'BTC_USDT',
          close: 1578.45,
          change: -6.32
        },
        {
          symbol: 'BTC_USDT',
          close: 1578.45,
          change: -6.32
        },
        {
          symbol: 'BTC_USDT',
          close: 1578.45,
          change: -6.32
        },
        {
          symbol: 'BTC_USDT',
          close: 1578.45,
          change: -6.32
        },
        {
          symbol: 'BTC_USDT',
          close: 1578.45,
          change: -6.32
        },
        {
          symbol: 'BTC_USDT',
          close: 1578.45,
          change: -6.32
        },
        {
          symbol: 'BTC_USDT',
          close: 1578.45,
          change: -6.32
        },
        {
          symbol: 'BTC_USDT',
          close: 1578.45,
          change: -6.32
        },
        {
          symbol: 'BTC_USDT',
          close: 1578.45,
          change: -6.32
        },
        {
          symbol: 'BTC_USDT',
          close: 1578.45,
          change: -6.32
        },
        {
          symbol: 'BTC_USDT',
          close: 1578.45,
          change: -6.32
        },
        {
          symbol: 'BTC_USDT',
          close: 1578.45,
          change: -6.32
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
  .pair-symbols{
    margin: 20px 0 -15px;
  }
  .table-head, .table-body{
    width: 100%;
    text-align: center;
    font-size: 12px;
  }
  .table-head th {
    padding-bottom: 5px;
    border-bottom: 1px solid #323546;
    font-weight: normal;
  }
  .tbody-wrap {
    padding: 0 15px 10px;
    max-height: 560px;
    overflow-y: auto;
  }
  .table-body tr {
    cursor: pointer;
  }
  .table-body tr:hover td{
    background-color: #1E2235;
  }
  .table-body td {
    border-bottom: 1px solid #1f2943;
    line-height: 22px;
    transition: .2s;
  }
  .table-body tr:last-child td {
    border-bottom-color: transparent;
  }
  .coin-symbol{
    padding-left: 15px;
    text-align: left;
  }
  .coin-change{
    padding-right: 15px;
    text-align: right;
  }
</style>

<template>
  <div class="comp-coin-list">
      <el-tabs v-model="activeBaseCoin" type="card">
        <el-tab-pane v-for="(list, baseCoin) in pairs"
                     :name="baseCoin"
                     :key="baseCoin">
          <div slot="label" class="tab-label">
            <img width="22"
                 height="22"
                 class="mr-10"
                 :src="`/static/img/coin/icon-${baseCoin}.png`" alt="">
            {{baseCoin}}
          </div>
          <div class="border">
            <el-table :data="Object.values(list)"
                      row-class-name="pointer font-14"
                      size="small">
              <el-table-column label="交易对" prop="targetCoin">
                <template slot-scope="scope">
                  <span>{{scope.row.targetCoin}} <span class="color-weak">/ {{baseCoin}}</span></span>
                </template>
              </el-table-column>
              <el-table-column label="最新价" prop="close"></el-table-column>
              <el-table-column label="涨幅" prop="change"></el-table-column>
              <el-table-column label="最高价" prop="high"></el-table-column>
              <el-table-column label="最低价" prop="low"></el-table-column>
              <el-table-column label="24H量" prop="vol"></el-table-column>
            </el-table>
          </div>
        </el-tab-pane>
      </el-tabs>
  </div>
</template>

<script>
export default {
  name: "coin-list-comp",
  data () {
    return {
      pairs: {
        USDT: [
          {
            targetCoin: 'BTC',
            close: 0.128845,
            change: -1.69,
            high: 7431.12,
            low: 7176.29,
            vol: 15108
          },
          {
            targetCoin: 'BCH',
            close: 0.128845,
            change: -1.69,
            high: 7431.12,
            low: 7176.29,
            vol: 15108
          },
          {
            targetCoin: 'ETH',
            close: 0.128845,
            change: -1.69,
            high: 7431.12,
            low: 7176.29,
            vol: 15108
          },
          {
            targetCoin: 'ETC',
            close: 0.128845,
            change: -1.69,
            high: 7431.12,
            low: 7176.29,
            vol: 15108
          },
          {
            targetCoin: 'LTC',
            close: 0.128845,
            change: -1.69,
            high: 7431.12,
            low: 7176.29,
            vol: 15108
          },
          {
            targetCoin: 'BTC',
            close: 0.128845,
            change: -1.69,
            high: 7431.12,
            low: 7176.29,
            vol: 15108
          },
          {
            targetCoin: 'BCH',
            close: 0.128845,
            change: -1.69,
            high: 7431.12,
            low: 7176.29,
            vol: 15108
          },
          {
            targetCoin: 'ETH',
            close: 0.128845,
            change: -1.69,
            high: 7431.12,
            low: 7176.29,
            vol: 15108
          },
          {
            targetCoin: 'ETC',
            close: 0.128845,
            change: -1.69,
            high: 7431.12,
            low: 7176.29,
            vol: 15108
          },
          {
            targetCoin: 'LTC',
            close: 0.128845,
            change: -1.69,
            high: 7431.12,
            low: 7176.29,
            vol: 15108
          },
          {
            targetCoin: 'BTC',
            close: 0.128845,
            change: -1.69,
            high: 7431.12,
            low: 7176.29,
            vol: 15108
          },
          {
            targetCoin: 'BCH',
            close: 0.128845,
            change: -1.69,
            high: 7431.12,
            low: 7176.29,
            vol: 15108
          },
          {
            targetCoin: 'ETH',
            close: 0.128845,
            change: -1.69,
            high: 7431.12,
            low: 7176.29,
            vol: 15108
          },
          {
            targetCoin: 'ETC',
            close: 0.128845,
            change: -1.69,
            high: 7431.12,
            low: 7176.29,
            vol: 15108
          },
          {
            targetCoin: 'LTC',
            close: 0.128845,
            change: -1.69,
            high: 7431.12,
            low: 7176.29,
            vol: 15108
          },

        ],
        BTC: [],
        ETH: []
      },
      favoritePairs: [],
      activeBaseCoin: 'USDT'
    }
  }
}
</script>

<style scoped>
  .tab-label {
    padding: 0 20px;
    color: #c7cce6;
  }
  .el-tabs__item.is-active .tab-label {
    color: #7a98f7;
  }
  .border {
    border: 1px solid #4e5b85;
  }
</style>
<style>
  .comp-coin-list .el-table__body-wrapper {
    overflow-y: auto;
    max-height: 500px;
  }
</style>

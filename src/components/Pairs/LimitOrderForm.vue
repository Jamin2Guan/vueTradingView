<template>
  <div>
    <el-form size="medium">
      <el-form-item :label="formLabel.price">
        <el-input class="order-price">
          <span slot="suffix">
            <span class="color-weak pr-10">{{baseCoin}}</span>
          </span>
        </el-input>
      </el-form-item>
      <el-form-item :label="formLabel.amount">
        <el-input>
          <span slot="suffix">
            <span class="color-weak pr-10">{{targetCoin}}</span>
          </span>
        </el-input>
      </el-form-item>
      <slider-comp></slider-comp>
      <div class="mb-25">
        <div class="clear-fix font-12" v-if="buyOrSell==='buy'">
          <span class="fl">0 {{baseCoin}}</span>
          <span class="fr">0.0000 {{baseCoin}}</span>
        </div>
        <div class="clear-fix font-12" v-else>
          <span class="fl">0 {{targetCoin}}</span>
          <span class="fr">0.0000 {{targetCoin}}</span>
        </div>
      </div>
      <el-form-item>
        <span>交易额 0.00000000 {{baseCoin}}</span>
      </el-form-item>
      <el-form-item>
        <a href="javascript:" class="order-btn" :class="bgColor">{{formLabel.type}} BTC</a>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import SliderComp from '@c/Pairs/SliderComp'
export default {
  name: "limit-order-form",
  components: {SliderComp},
  props: [
    'buyOrSell',
    'baseCoin',
    'targetCoin'
  ],
  data () {
    return {
      formData: {
      }
    }
  },
  computed: {
    formLabel () {
      switch (this.buyOrSell) {
        case 'buy':
          return {
            type: '买入',
            price: '买入价',
            amount: '买入量'
          }
        case 'sell':
          return {
            type: '卖出',
            price: '卖出价',
            amount: '卖出量'
          }
      }
    },
    bgColor () {
      switch (this.buyOrSell) {
        case 'buy':
          return 'bg-buy'
        case 'sell':
          return 'bg-sell'
      }
    }
  },
  watch: {},
  methods: {

  },
  created () {
  }
}
</script>

<style scoped>
.order-btn {
  display: block;
  color: #c7cce6;
  border-radius: 3px;
  text-align: center;
  transition: .3s;
}
.order-btn.bg-buy:hover{
  background-color: rgba(88,144,101,.8);
}
.order-btn.bg-buy:active{
  background-color: rgba(88,144,101,.6);
}

.order-btn.bg-sell:hover{
  background-color: rgba(174,78,84,.8);
}
.order-btn.bg-sell:active{
  background-color: rgba(174,78,84,.6);
}
</style>
<style>
  .el-input--suffix .el-input__inner{
    padding-right: 60px;
  }
</style>

<template>
  <div>
    <el-form size="medium">
      <el-form-item :label="formLabel.price">
        <el-input></el-input>
      </el-form-item>
      <el-form-item :label="formLabel.amount">
        <el-input></el-input>
      </el-form-item>
      <el-form-item style="margin-top: -10px">
        <el-slider v-model="formData.slider"
                   :format-tooltip="sliderFormat"
        ></el-slider>
      </el-form-item>
      <el-form-item>
        <span>交易额 0.00000000 {{baseCoin}}</span>
      </el-form-item>
      <el-form-item>
        <div class="order-btn">{{formLabel.type}} BTC</div>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "limit-order-form",
  props: [
    'buyOrSell',
    'baseCoin',
    'targetCoin'
  ],
  data () {
    return {
      formData: {
        slider: 0
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
    }
  },
  watch: {},
  methods: {
    sliderFormat (n) {
      return n + '%'
    }
  },
  created () {
  }
}
</script>

<style scoped>
.order-btn {
  width: 100%;
  background-color: #4e5b85;
  border-radius: 3px;
  text-align: center;
  transition: .3s;
  cursor: pointer;
}
  .order-btn:hover {
    background-color: rgba(78, 91, 133, .7);
  }
</style>

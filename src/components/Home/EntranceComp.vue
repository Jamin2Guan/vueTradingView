<template>
  <div class="text-center pv-50 comp-entrance">
    <h1 class="pv-20 fw-nm">马上交易</h1>
    <p class="text-center font-18 opacity-8">在全球领先的数字资产交易平台</p>
    <div class="mt-30 pv-30">
      <a class="entrance-login">登录</a>
      <a class="entrance-register">注册</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "entrance-comp",
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
  .comp-entrance{
    background-color: #202437;
  }
  .entrance-login, .entrance-register {
    display: inline-block;
    border: 1px solid;
    border-radius: 5px;
    padding: 12px 75px;
    color: #c7cce6;
    font-size: 16px;
    cursor: pointer;
    transition: .3s;
  }
  .entrance-login{
    border-color: #c7cce6;
    margin-right: 40px;
  }
  .entrance-register {
    border-color: #7a98f7;
    background-color: #7a98f7;
    color: #ffffff;
  }
  .entrance-login:hover {
    background-color: rgba(0,0,0,.3);
  }
  .entrance-register:hover {
    background-color: rgba(122,152,247,.7);
  }
</style>

<template>
  <div class="comp-navbar">
    <div class="clear-fix">
      <div class="fl">
        <ul class="nav-menu">
          <li class="nav-item link">
            <img src="/static/img/huobilogo.svg" alt="">
          </li>
          <li class="nav-item link">
            法币交易
          </li>
          <li class="nav-item link">
            币币交易
          </li>
        </ul>
      </div>
      <div class="fr">
        <ul>
          <li class="nav-item mr-0 link">登录</li>
          <li class="nav-item link">注册</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar-comp"
}
</script>

<style scoped>
.comp-navbar{
  height: 60px;
  line-height: 60px;
  padding: 0 30px;
  box-sizing: border-box;
  position: absolute;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  /*background-color: rgba(38, 42, 66, .5);*/
  background-color: rgba(0, 0, 0, .1);
}
  .nav-item{
    display: inline-block;
    margin: 0 10px;
    padding: 0 5px;
  }
</style>

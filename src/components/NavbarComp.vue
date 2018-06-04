<template>
  <div class="comp-navbar">
    <div class="clear-fix">
      <div class="fl">
        <ul class="nav-menu">
          <router-link tag="li"
                       :to="{name: 'Home'}"
                       class="nav-item link">
            <!--<img src="/static/img/logo-db.png" alt="" height="40">-->
            <img src="/static/img/huobilogo.svg" alt="">
          </router-link>
          <li class="nav-item link">
            法币交易
          </li>
          <router-link tag="li"
                       :to="{name: 'Pairs'}"
                       class="nav-item link">
            币币交易
          </router-link>
        </ul>
      </div>
      <div class="fr">
        <ul>
          <router-link tag="li"
                       :to="{name: 'Login'}"
                       class="nav-item mr-0 link">登录</router-link>
          <router-link tag="li"
                       :to="{name: 'Register'}"
                       class="nav-item link">注册</router-link>
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
  width: 100%;
  min-width: 1200px;
  margin: 0 auto;
  height: 56px;
  line-height: 56px;
  padding: 0 15px;
  box-sizing: border-box;
}
  .nav-item{
    display: inline-block;
    margin: 0 10px;
    padding: 0 5px;
  }
</style>

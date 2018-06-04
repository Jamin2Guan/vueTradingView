<template>
  <div id="app">
    <navbar-comp :class="navbarClass"></navbar-comp>
    <div id="page-main">
      <router-view/>
    </div>
    <footer-comp></footer-comp>
  </div>
</template>

<script>
import NavbarComp from '@c/NavbarComp'
import FooterComp from '@c/FooterComp'

export default {
  name: 'App',
  components: {
    NavbarComp,
    FooterComp
  },
  data () {
    return {
      WS_URL: 'wss://api.huobi.pro/ws'
    }
  },
  computed: {
    navbarClass () {
      switch (this.$route.name) {
        case 'Home':
          return 'home-navbar'
        case 'Pairs':
          return 'pairs-navbar'
      }
    }
  },
  methods: {
    subscribeWs (ws) {
    },
    init () {
    }
  },
  created () {
    // this.init()
  }
}
</script>

<style>
#app {
}
  #page-main{
    /*margin-top: 56px;*/
  }
  .home-navbar{
    position: absolute;
    z-index: 5;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    background-color: rgba(0, 0, 0, .1);
  }
  .pairs-navbar{
    background-color: #181b2a;
  }
</style>

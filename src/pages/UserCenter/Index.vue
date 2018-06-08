<template>
  <div id="page-user-center">
    <div class="cont-box font-20 pv-15">
      {{$route.name}}
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "user-center",
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
#page-user-center{
  width: 1200px;
  margin: 30px auto;
}
</style>
<style>
  #page-user-center .cont-box{
    padding-left: 30px;
    padding-right: 30px;
    margin-bottom: 20px;
  }
  #page-user-center .cont-title{
    font-size: 16px;
    line-height: 48px;
    padding: 0 30px;
    margin: 0 -30px;
  }
</style>

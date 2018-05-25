<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    let ws = window.ws = new WebSocket('wss://www.huobipro.com/-/s/pro/ws')
    ws.onopen = () => {
      console.log('wss connected!')
      // ws.onmessage = ev => {
      //   let fileReader = new FileReader()
      //   fileReader.readAsArrayBuffer(ev.data)
      //   fileReader.onloadend = () => {
      //     console.log(fileReader.result)
      //     let res = new Uint8Array(fileReader.result)
      //     let result = res.map(t => parseInt('' + t, 8))
      //     console.log(result)
      //     console.log(String.fromCharCode.apply(null, result))
      //   }
      // }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

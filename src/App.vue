<template>
  <div id="app">
    <navbar-comp></navbar-comp>
    <router-view/>
    <footer-comp></footer-comp>
  </div>
</template>

<script>
import NavbarComp from '@c/NavbarComp'
import FooterComp from '@c/FooterComp'
import * as pako from 'pako'

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
  methods: {
    subscribeWs (ws) {
      var symbols = ['btcusdt'];
      // 订阅深度
      // 谨慎选择合并的深度，ws每次推送全量的深度数据，若未能及时处理容易引起消息堆积并且引发行情延时
      for (let symbol of symbols) {
        ws.send(JSON.stringify({
          "sub": `market.${symbol}.depth.step0`,
          "id": `${symbol}`
        }));
      }
      // 订阅K线
      for (let symbol of symbols) {
        ws.send(JSON.stringify({
          "sub": `market.${symbol}.kline.1min`,
          "id": `${symbol}`
        }));
      }
      // 获取k线历史
      for (let symbol of symbols) {
        ws.send(JSON.stringify({
          req: `market.${symbol}.kline.1min`,
          id: `${symbol}`
        }))
      }
    },
    init () {
      let ws = new WebSocket(this.WS_URL);
      ws.onopen = () => {
        console.log('open');
        this.subscribeWs(ws);
      }
      ws.onmessage = (ev) => {
        let fileReader = new FileReader()
        fileReader.readAsArrayBuffer(ev.data)
        fileReader.onloadend = () => {
          let buffer8 = new Uint8Array(fileReader.result)
          //
          let text = pako.inflate(buffer8, {
            to: 'string'
          });
          let msg = JSON.parse(text);
          console.log(msg)
          if (msg.ping) {
            ws.send(JSON.stringify({
              pong: msg.ping
            }));
          } else if (msg.tick) {
            console.log(msg);
          } else {
            console.log(text);
          }
        }
      }
      ws.onclose = () => {
        console.log('close')
        this.init()
      }
      ws.onerror = err => {
        console.log('error', err);
        this.init();
      }
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
</style>

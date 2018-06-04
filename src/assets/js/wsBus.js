import Vue from 'vue'
import store from '@/store'
import * as pako from 'pako'
import {promiseBreaker} from "./tools";

const WS_URL = 'wss://www.huobipro.com/-/s/pro/ws'

let wsBus = window.wsBus = new Vue({
  store,
  data: {
    ws: null,
    WS_URL: '',
    connectReady: promiseBreaker() // 将是可外部决议的promise
  },
  computed: {
    klineSymbol () { // 币币交易symbol
      return this.$store.getters['pairs/klineSymbol']
    }
  },
  watch: {
    klineSymbol (newSymbol, oldSymbol) {
      this.ws.unsubscribe(oldSymbol)
      this.ws.subscribe(newSymbol)
    }
  },
  methods: {
    init () {
      let ws = this.ws = new WebSocket(WS_URL);
      ws.onopen = () => {
        this.connectReady.resolve()
        console.log('ws open');
        this.subscribe(this.klineSymbol);
      }
      ws.onmessage = (ev) => {
        let fileReader = new FileReader()
        fileReader.readAsArrayBuffer(ev.data)
        fileReader.onloadend = () => {
          let buffer8 = new Uint8Array(fileReader.result)
          let text = pako.inflate(buffer8, {
            to: 'string'
          })
          let msg = JSON.parse(text)
          // console.log(msg)
          msg.id === this.klineSymbol && console.log(msg)
          // k线数据
          if (msg.id === `kline_${this.klineSymbol}`) {
            console.log(msg)
            this.$emit('klineHistoryData', msg)
            return
          }
          //
          if (msg.ping) {
            ws.send(JSON.stringify({
              pong: msg.ping
            }))
          } else if (msg.tick) {
            // console.log(msg)
          } else {
            // console.log(text)
          }
        }
      }
      ws.onclose = () => {
        this.connectReady = promiseBreaker()
        console.log('ws close')
        this.init()
      }
      ws.onerror = err => {
        console.log('ws error', err);
        this.init();
      }
    },
    subscribe (symbol) { // 0: (Array: symbols)
      // 获取k线历史
      // this.ws.send(JSON.stringify({
      //   req: `market.${symbol}.kline.1min`,
      //   id: `${symbol}`
      // }))
      // 订阅深度
      // 谨慎选择合并的深度，ws每次推送全量的深度数据，若未能及时处理容易引起消息堆积并且引发行情延时
      this.ws.send(JSON.stringify({
        "sub": `market.${symbol}.depth.step0`,
        "id": `${symbol}`
      }))
      // 订阅实时数据
      this.ws.send(JSON.stringify({
        "sub": `market.${symbol}.kline.1min`,
        "id": `${symbol}`
      }))
    },
    unsubscribe (symbol) {
      // 取消订阅
      // 市场深度
      this.ws.send(JSON.stringify({
        "unsub": `market.${symbol}.depth.step0`,
        "id": `${symbol}`
      }))
      // 订阅K线
      this.ws.send(JSON.stringify({
        "unsub": `market.${symbol}.kline.1min`,
        "id": `${symbol}`
      }))
    },
    async reqKlinHistory (symbol, resolution, from, to) { // 请求k线历史数据
      await this.connectReady
      let period
      if (+resolution > 0) {
        period = resolution + 'min'
      } else {
        period = {
          D: '1day',
          W: '1week',
          M: '1mon',
          Y: '1year'
        }[resolution]
      }
      let res = await new Promise((resolve, reject) => {
        this.$on('klineHistoryData', (msg) => {
          resolve(msg)
        })
        this.ws.send(JSON.stringify({
          req: `market.${symbol}.kline.${period}`,
          id: `kline_${symbol}`,
          from: from,
          to: to
        }))
      })
      return res
    }
  },
  created () {
    console.log('wsBus created!')
    console.log(this)
    this.init()
  }
})

export default wsBus

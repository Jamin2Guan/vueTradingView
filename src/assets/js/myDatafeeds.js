import Axios from 'axios'
let axios = Axios.create({
  timeout: 1000 * 30
})

export default class {
  constructor () {
    this.lastBar = null
  }
  //
  async onReady (callback) {
    let config = await Promise.resolve({
      supports_search: false,
      supports_group_request: false,
      supported_resolutions: ['5', '15', '30', '60', 'D', 'W', 'M'],
      supports_marks: false,
    })
    callback(config)
  }

  searchSymbols (userInput, exchange, symbolType, onResultReadyCallback) {
    console.log('searchSymbols =====>\n', ...arguments)
  }

  async resolveSymbol (symbolName, onSymbolResolvedCallback, onResolveErrorCallback) {
    console.log('resolveSymbol =====>\n', ...arguments)
    let res = await Promise.resolve({
      name: symbolName,
      ticker: symbolName,
      type: 'bitcoin',
      "timezone": 'Asia/Hong_Kong',
      "minmov": 0.01, // 最小波动
      "pricescale": 0.01, // 价格刻度
      // "minmov2":0,
      // "pointvalue":1,
      "session": "24x7",
      "has_intraday": true,
      // "has_no_volume":false,
      // "description":"Apple Inc.",
      "supported_resolutions": ['5', '15', '30', '60', 'D', 'W', 'M'],
      "intraday_multipliers": ['5', '15', '30', '60'],
      'has_empty_bars': true
    })
    onSymbolResolvedCallback(res)
  }

  async getBars (symbolInfo, resolution, from, to, onHistoryCallback, onErrorCallback, firstDataRequest) {
    console.log('getBars', ...arguments)
    let {data: res} = await axios.get(`/tv/history?symbol=AAPL&resolution=${resolution}&from=${from}&to=${to}`)
    if (res.s !== 'ok' && res.s !== 'no_data') return
    //
    var bars = [];
    var meta = {
      noData: false,
    };
    if (res.s === 'no_data') {
      meta.noData = true;
      meta.nextTime = res.nextTime; // 如果没有数据，应该有nextTime
    } else {
      var volumePresent = res.v !== undefined;
      var ohlPresent = res.o !== undefined;
      for (var i = 0; i < res.t.length; ++i) {
        var barValue = {
          time: res.t[i] * 1000,
          close: Number(res.c[i]),
          open: Number(res.c[i]),
          high: Number(res.c[i]),
          low: Number(res.c[i]),
        };
        if (ohlPresent) {
          barValue.open = Number(res.o[i]);
          barValue.high = Number(res.h[i]);
          barValue.low = Number(res.l[i]);
        }
        if (volumePresent) {
          barValue.volume = Number(res.v[i]);
        }
        bars.push(barValue);
      }
    }
    // if (!this.lastBar) {
    //   this.lastBar = bars[bars.length - 1]
    // }
    // console.log(res)
    onHistoryCallback(bars, meta)
  }

  subscribeBars (symbolInfo, resolution, onRealtimeCallback, subscriberUID, onResetCacheNeededCallback) {
    console.log('subscribeBars =====>\n', ...arguments)
    // setInterval(() => {
    //   let lBar = this.lastBar
    //   let newBar = {
    //     time: lBar.time + Math.ceil(Math.random() * 1000 * 10),
    //     close: lBar.close + (Math.random() - 0.5),
    //     open: lBar.open,
    //     high: Math.max(lBar.high, lBar.close),
    //     low: Math.min(lBar.low, lBar.close),
    //   }
    //   this.lastBar = newBar
    //   onRealtimeCallback(newBar)
    // }, 500)
  }

  unsubscribeBars (subscriberUID) {
    console.log('unsubscribeBars =====>\n', ...arguments)
  }

  calculateHistoryDepth (resolution, resolutionBack, intervalBack) {
    console.log('calculateHistoryDepth =====>\n', ...arguments)
  }

  getMarks (symbolInfo, startDate, endDate, onDataCallback, resolution) {
    console.log('getMarks =====>\n', ...arguments)
  }

  getTimescaleMarks (symbolInfo, startDate, endDate, onDataCallback, resolution) {
    console.log('getTimescaleMarks =====>\n', ...arguments)
  }

  getServerTime (callback) {
    console.log('getServerTime =====>\n', ...arguments)
  }
}

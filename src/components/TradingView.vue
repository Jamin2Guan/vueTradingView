<template>
  <div class="trade-view-comp">
    <div class="container" id="trade-view-root">
    </div>
  </div>
</template>

<script>
import Datafeeds from '../assets/js/datafeeds'
console.log(Datafeeds)
export default {
  name: 'trade-view',
  methods: {
    tradingViewInit () {
      // new TradingView.widget( // eslint-disable-line
      //   {
      //     'autosize': true,
      //     'symbol': 'COINBASE:BTCUSD',
      //     'interval': 'D',
      //     'timezone': 'Etc/UTC',
      //     'theme': 'Dark',
      //     'style': '3',
      //     'locale': 'zh_CN',
      //     'toolbar_bg': '#f1f3f6',
      //     'enable_publishing': false,
      //     'hide_side_toolbar': false,
      //     'allow_symbol_change': true,
      //     'save_image': false,
      //     'details': true,
      //     'studies': [
      //       'MACD@tv-basicstudies'
      //     ],
      //     'container_id': 'trade-view-root'
      //   }
      // )
      window.TradingView.onready(() => {
        window.tvWidget = new window.TradingView.widget({ // eslint-disable-line
          debug: true, // uncomment this line to see Library errors and warnings in the console
          time_frames: [
            { text: '1y', resolution: 'D' }
          ],
          fullscreen: false,
          symbol: 'AAPL',
          interval: 'D',
          container_id: 'trade-view-root',
          datafeed: new Datafeeds('https://demo_feed.tradingview.com'),
          library_path: '/static/chartTool/',
          locale: 'zh',
          drawings_access: { type: 'black', tools: [ { name: 'Regression Trend' } ] },
          disabled_features: ['compare_symbol', 'display_market_status', 'go_to_date', 'header_chart_type', 'header_compare', 'header_interval_dialog_button', 'header_resolutions', 'header_screenshot', 'header_symbol_search', 'header_undo_redo', 'legend_context_menu', 'show_hide_button_in_legend', 'show_interval_dialog_on_key_press', 'snapshot_trading_drawings', 'symbol_info', 'use_localstorage_for_settings', 'volume_force_overlay'],
          enabled_features: ['timeframes_toolbar', 'dont_show_boolean_study_arguments', 'hide_last_na_study_output', 'same_data_requery', 'side_toolbar_in_fullscreen_mode', 'disable_resolution_rebuild'],
          // charts_storage_url: 'http://saveload.tradingview.com',
          charts_storage_api_version: '1.2',
          client_id: 'tradingview.com',
          user_id: 'public_user_id',
          loading_screen: {
            backgroundColor: '#262626'
          },
          toolbar_bg: '#181b2a',
          overrides: {
            'paneProperties.background': '#181b2a',
            'paneProperties.vertGridProperties.color': '#1f2943',
            'paneProperties.horzGridProperties.color': '#1f2943',
            'symbolWatermarkProperties.transparency': 90,
            'scalesProperties.textColor': '#61688a',
            'mainSeriesProperties.candleStyle.upColor': '#589065',
            'mainSeriesProperties.candleStyle.downColor': '#ae4e54',
            'mainSeriesProperties.candleStyle.drawWick': true,
            'mainSeriesProperties.candleStyle.drawBorder': true,
            'mainSeriesProperties.candleStyle.borderColor': '#C400CB',
            'mainSeriesProperties.candleStyle.borderUpColor': '#589065',
            'mainSeriesProperties.candleStyle.borderDownColor': '#ae4e54',
            'mainSeriesProperties.candleStyle.wickUpColor': '#589065',
            'mainSeriesProperties.candleStyle.wickDownColor': '#ae4e54',
            'mainSeriesProperties.hollowCandleStyle.upColor': '#589065',
            'mainSeriesProperties.hollowCandleStyle.downColor': '#ae4e54',
            'mainSeriesProperties.hollowCandleStyle.drawWick': true,
            'mainSeriesProperties.hollowCandleStyle.drawBorder': true,
            'mainSeriesProperties.hollowCandleStyle.borderColor': '#C400CB',
            'mainSeriesProperties.hollowCandleStyle.borderUpColor': '#589065',
            'mainSeriesProperties.hollowCandleStyle.borderDownColor': '#ae4e54',
            'mainSeriesProperties.hollowCandleStyle.wickUpColor': '#589065',
            'mainSeriesProperties.hollowCandleStyle.wickDownColor': '#ae4e54',
            'scalesProperties.lineColor': '#61688a'
          },
          custom_css_url: './night.css'
        })
      })
    }
  },
  mounted () {
    this.tradingViewInit()
  }
}
</script>

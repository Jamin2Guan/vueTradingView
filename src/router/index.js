import Vue from 'vue'
import Router from 'vue-router'
import TradingView from '@/components/TradingView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TradingView',
      component: TradingView
    }
  ]
})

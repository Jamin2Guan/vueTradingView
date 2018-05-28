import Vue from 'vue'
import Router from 'vue-router'
import TradingView from '@c/TradingView'
import Home from '@p/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: 'TradingView',
      name: 'TradingView',
      component: TradingView
    }
  ]
})

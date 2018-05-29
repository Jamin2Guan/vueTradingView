import Vue from 'vue'
import Router from 'vue-router'
import TradingView from '@c/TradingView'
import Home from '@p/Home'
import Register from '@p/Register'
import Login from '@p/Login'
import Pairs from '@p/Pairs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/TradingView',
      name: 'TradingView',
      component: TradingView
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Pairs',
      name: 'Pairs',
      component: Pairs
    },

  ]
})

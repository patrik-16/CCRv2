import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import Dashboard from '../components/Dashboard'
import Converter from '../components/Converter'
import Account from '../components/Account'
import FAQ from '../components/FAQ'
import Home from '../components/Home'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/converter',
      name: 'Converter',
      component: Converter
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    },
    {
      path: '/faq',
      name: 'FAQ',
      component: FAQ
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})

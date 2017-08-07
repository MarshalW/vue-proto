import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from '@/views/dashboard/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'dashboard',
    component: Dashboard
  }]
})

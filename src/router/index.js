import Vue from 'vue'
import Router from 'vue-router'
import Live from '@/components/Live'
import Login from '@/components/Login'
import Record from '@/components/Record'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Live',
      name: 'Live',
      component: Live,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/Record',
      name: 'Record',
      component: Record
    }
  ]
})

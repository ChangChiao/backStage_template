import Vue from 'vue'
import Router from 'vue-router'
import mainPage from '@/components/mainPage'
import orderList from '@/components/orderList'
import orderDetail from '@/components/orderDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: mainPage
    },
    {
      path: '/orderList',
      name: 'orderList',
      component: orderList
    },
    {
      path: '/orderDetail',
      name: 'orderDetail',
      component: orderDetail
    },
  ]
})

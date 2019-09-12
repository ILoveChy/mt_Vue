import Vue from 'vue'
import Router from 'vue-router'
import DefaultPage from './views/Default'
import Index from './page/index'
import ChangeCity from './page/changeCity'
import GoodsList from './page/goodsList'
import Login from './page/login'
import Register from './page/register'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'default',
      component: DefaultPage,
      redirect: '/index',
      children: [{
        path: '/index',
        name: 'index',
        component: Index
      }, {
        path: '/changeCity',
        name: 'changeCity',
        component: ChangeCity
      }, {
        path: 's/:name',
        name: 'goods',
        component: GoodsList
      }]
    },
    {
      path: '/blank',
      name: 'blank',
      component: () => import('./views/Blank'),
      children:[{
        path:'login',
        name:'login',
        component:Login
      },{
        path:'register',
        name:'register',
        component:Register
      }]
    }
  ]
})

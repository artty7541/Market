import Vue from 'vue'
import VueRouter from 'vue-router'
import Menu from '../components/menu.vue'
import Details from '../components/Details.vue'
import Market from '../components/Market.vue'
import Other from '../components/Myother.vue'
import money from '../components/ิmoney.vue';
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Menu',
    component: Menu
  },
  {
  path: '/details',
  name: 'details',
  component: Details
  },
  {
    path: '/details/market',
    name: 'market',
    component: Market
  },
  {
    path: '/Other',
    name: 'Other',
    component: Other
  },
  {
    path: '/Other/money',
    name: 'Money',
    component: money
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../src/pages/layout/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '', component: Layout,
    children: [
      { path: '', name: 'Home', meta: { title: 'Home' }, component: () => import('../src/pages/home') }
    ]
  },
  {
    path: '/camera', component: Layout,
    children: [
      { path: '', name: 'Camera', meta: { title: 'Camera' }, component: () => import('../src/pages/camera') }
    ]
  },
  { path: '/lodash', name: 'Lodash', meta: { title: 'Lodash' }, component: () => import('../src/pages/lodash') }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

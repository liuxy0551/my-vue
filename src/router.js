import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../src/pages/layout/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '', component: Layout,
    children: [
      { path: '', name: 'Home', component: () => import('../src/pages/home') }
    ]
  },
  {
    path: '/camera', component: Layout,
    children: [
      { path: '', name: 'Camera', meta: { title: 'Camera' }, component: () => import('../src/pages/camera') }
    ]
  },
  { path: '/lodash', name: 'Lodash', meta: { title: 'Lodash' }, component: () => import('../src/pages/lodash') },
  { path: '/element', name: 'Element', meta: { title: 'Element' }, component: () => import('../src/pages/element') },

  { path: '/css/triangle', name: 'CSSTriangle', meta: { title: '钝角三角形' }, component: () => import('./pages/css/triangle') },
  { path: '/css/rectangle', name: 'CSSRectangle', meta: { title: '矩形' }, component: () => import('./pages/css/rectangle') },
  { path: '/css/bubble', name: 'CSSBubble', meta: { title: '气泡对话框' }, component: () => import('./pages/css/bubble') },

  { path: '/bubble', name: 'Bubble', meta: { title: '冒泡排序' }, component: () => import('./pages/bubble') }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

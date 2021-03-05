import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../src/pages/layout/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '', component: Layout,
    children: [
      { path: '', name: 'Camera', meta: { title: 'Camera' }, component: () => import(/* webpackChunkName: 'camera' */ '../src/pages/camera') }
    ]
  },
  {
    path: '/home', component: Layout,
    children: [
      { path: '', name: 'Home', component: () => import(/* webpackChunkName: 'home' */ '../src/pages/home') }
    ]
  },
  { path: '/lodash', name: 'Lodash', meta: { title: 'Lodash' }, component: () => import(/* webpackChunkName: 'home' */ '../src/pages/lodash') },
  { path: '/element', name: 'Element', meta: { title: 'Element' }, component: () => import(/* webpackChunkName: 'home' */ '../src/pages/element') },

  { path: '/css/triangle', name: 'CSSTriangle', meta: { title: '钝角三角形' }, component: () => import(/* webpackChunkName: 'home' */ './pages/css/triangle') },
  { path: '/css/rectangle', name: 'CSSRectangle', meta: { title: '矩形' }, component: () => import(/* webpackChunkName: 'home' */ './pages/css/rectangle') },
  { path: '/css/bubble', name: 'CSSBubble', meta: { title: '气泡对话框' }, component: () => import(/* webpackChunkName: 'home' */ './pages/css/bubble') },

  { path: '/bubble', name: 'Bubble', meta: { title: '冒泡排序' }, component: () => import(/* webpackChunkName: 'home' */ './pages/bubble') },
  { path: '/amount', name: 'Amount', meta: { title: '金额展示' }, component: () => import(/* webpackChunkName: 'home' */ './pages/amount') },
  { path: '/array', name: 'Array', meta: { title: '数组元素交换' }, component: () => import(/* webpackChunkName: 'home' */ './pages/array') },

  { path: '/v-console', name: 'vConsole', meta: { title: 'vConsole', keepAlive: true }, component: () => import(/* webpackChunkName: 'home' */ './pages/vConsole') },
  { path: '/signed-board', name: 'SignedBoard', meta: { title: '手签板' }, component: () => import(/* webpackChunkName: 'home' */ './pages/signedBoard') },

  // Vue 项目打包时自动把所有图片的本地路径改为 CDN 路径
  { path: '/imgCDN', name: 'ImgCDN', meta: { title: 'img CDN' }, component: () => import(/* webpackChunkName: 'home' */ './pages/imgCDN') },

  // 云组件
  { path: '/cloud-ui', name: 'CloudUI', meta: { title: 'Cloud UI' }, component: () => import(/* webpackChunkName: 'home' */ './pages/cloud-ui') }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import '@/assets/stylesheets/scss/application.scss'
import 'amfe-flexible'

// 完整引入 Vant
// import Vant from 'vant'
// import 'vant/lib/index.css'
// Vue.use(Vant)

// 自动按需引入 Vant 组件
import vant from './components/vant'
Vue.use(vant)


// 完整引入 Element
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI)

// 按需引入 Element 组件
import element from './components/element'
Vue.use(element)

// 按需引入 syedu 组件
import 'syedu/packages/assets/stylesheets/application.scss'
import syedu from './components/syedu'
Vue.use(syedu)


import utils from './utils'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

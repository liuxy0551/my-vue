// 自动按需引入 Vant 组件
import { Tabbar, TabbarItem, Button } from 'vant'
let vantUIs = [Tabbar, TabbarItem, Button]

export default {
  install (Vue) {
    vantUIs.forEach(vantUI => [
      Vue.component(vantUI.name, vantUI)
      // Vue.use(vantUI)    // 也可以使用 Vue.use()
    ])
  }
}

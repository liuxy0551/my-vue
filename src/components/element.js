// 按需引入 Element 组件
import { Input, Select, Option, Button } from 'element-ui'
let elementUIs = [Input, Select, Option, Button]

export default {
  install (Vue) {
    elementUIs.forEach(elementUI => [
      Vue.component(elementUI.name, elementUI)
      // Vue.use(elementUI)    // 也可以使用 Vue.use()
    ])

    Vue.prototype.$ELEMENT = { size: 'small' };
  }
}

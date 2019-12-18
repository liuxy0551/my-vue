// 按需引入 Element 组件
import { Input, Select, Option } from 'element-ui'
let elementUIs = [Input, Select, Option]

export default {
  install (Vue) {
    elementUIs.forEach(elementUI => [
      Vue.component(elementUI.name, elementUI)
      // Vue.use(elementUI)    // 也可以使用 Vue.use()
    ])
  }
}

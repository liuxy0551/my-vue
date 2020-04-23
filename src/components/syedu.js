// 按需引入 syedu 组件
import scroll from 'syedu/packages/scroll'
import icon from 'syedu/packages/icon'

const syedu = [scroll, icon]

export default {
  install (Vue) {
    syedu.forEach(component => [
      Vue.use(component)
    ])
  }
}

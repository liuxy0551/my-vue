// 按需引入 syedu 组件
import icon from 'syedu/packages/icon'
import scroll from 'syedu/packages/scroll'
import signedBoard from 'syedu/packages/signedBoard'

const syedu = [scroll, icon, signedBoard]

export default {
  install (Vue) {
    syedu.forEach(component => [
      Vue.use(component)
    ])
  }
}

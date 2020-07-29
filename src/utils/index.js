import changeTitle from './changeTitle'
import eventLog from './eventLog'

export default {
  install (Vue) {
    Vue.use(eventLog)
  }
}

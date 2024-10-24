/***************** 埋点自定义指令 *******************/
// readme: https://open.cnzz.com/a/api/trackevent/

export default {
  install (Vue) {
    Vue.directive('log', {
      bind (el, binding) {
        el.addEventListener('click', () => {
          // window._czc.push(['_trackEvent', ...binding.value])
        }, false)
      },
      unbind (el) {
        el.removeEventListener('click', () => { console.log('remove') })
      }
    })
  }
}

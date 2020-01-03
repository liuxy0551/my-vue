<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    methods: {
      isPC () {
        let Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
        let flag = true
        for (let i of Agents) {
          if (navigator.userAgent.indexOf(i) > 0) {
            flag = false
            break
          }
        }
        return flag
      }
    },
    mounted () {
      if (this.isPC()) {
        let html = document.querySelector('html')
        html.style.fontSize = '24px'
        html.style.width = '375px'
        html.style.height = '667px'
        html.style.margin = '0 auto'
        html.style.transform = 'translate(0, 10%)'
      }
    }
  }
</script>

<style>
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    font-size: 18px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;

    /*禁用选择内容*/
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  html {
    box-sizing: border-box;
    background: #212121;
    height: 100%;
  }
  body {
    background: #fafafa;
    height: 100%;
  }
</style>

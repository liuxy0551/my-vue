<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" :key="$route.name"></router-view>
    </keep-alive>

    <router-view v-if="!$route.meta.keepAlive"></router-view>
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
        let body = document.querySelector('body')
        let app = document.querySelector('#app')
        html.style.fontSize = '37.5px'
        html.style.height = '667px'
        html.style.background = '#212121'
        html.style.transform = 'translate(0, 10%)'
        html.childNodes[0].style.transform = 'translate(0, 0)'
        body.style.width = '375px'
        body.style.margin = '0 auto'
        app.style.transform = 'translate(0, 0)'
      }
    }
  }
</script>

<style>
  html {
    height: 100%;
    box-sizing: border-box;
    background: #212121;
  }
  body {
    height: 100%;
    background: #fafafa;
  }
  #app {
    height: 100%;

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
</style>

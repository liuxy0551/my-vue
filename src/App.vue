<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" :key="$route.name" />
    </keep-alive>

    <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>

<script>
  import mixUmeng from '@/mixins/mixUmeng'
  import mixMobileOnPC from 'syedu/packages/mixins/mixMobileOnPC'

  export default {
    name: 'app',
    mixins: [mixUmeng, mixMobileOnPC]
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

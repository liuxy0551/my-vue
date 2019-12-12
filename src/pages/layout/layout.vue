<template>
  <div>
    <router-view/>

    <van-tabbar route>
      <van-tabbar-item replace :to="{ name: 'Home' }" icon="home-o">Home</van-tabbar-item>
      <van-tabbar-item replace :to="{ name: 'Camera' }" icon="play-circle-o">Camera</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  export default {
    name: "layout",
    data () {
      return {

      }
    },
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

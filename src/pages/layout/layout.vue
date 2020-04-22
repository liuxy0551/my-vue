<template>
  <div>
    <router-view/>

    <van-tabbar class="home-tab" route>
      <van-tabbar-item replace :to="{ name: 'Camera' }" icon="play-circle-o">Camera</van-tabbar-item>
      <van-tabbar-item replace :to="{ name: 'Home' }" icon="home-o">Home</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  export default {
    name: "Layout"
  }
</script>

<style lang="scss">
  .home-tab {
    width: 375px !important;
    margin: 0 auto !important;
    left: 0;
    right: 0;
  }
</style>

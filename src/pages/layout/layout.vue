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
    name: "Layout"
  }
</script>

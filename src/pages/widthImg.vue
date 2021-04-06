<template>
  <div class="width-img">
    <img class="img" src="../assets/images/widthImg/1.png" alt="" ref="imgRef">
  </div>
</template>

<script>
  export default {
    mounted () {
      setTimeout(() => {
        this.$refs['imgRef'].scrollLeft = this.$refs['imgRef'].scrollWidth
      }, 500)
    }
  }
</script>

<style lang="scss" scoped>
  .width-img {
    height: 100%;
    .img {
      height: 100%;
    }
  }
</style>

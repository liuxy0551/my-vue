<template>
  <div class="lodash">
    <p>console.log(chunk(['a', 'b', 'c', 'd'], 2))</p>
    <p><span class="tip">=></span>[['a', 'b'], ['c', 'd']]</p>
  </div>
</template>

<script>
  // 全部引入 lodash
  // import _ from 'lodash'
  // 单独引入 lodash
  import chunk from 'lodash/chunk'
  export default {
    mounted () {
      // console.log(_.chunk(['a', 'b', 'c', 'd'], 2))
      console.log(chunk(['a', 'b', 'c', 'd'], 2))
    }
  }
</script>

<style lang="scss" scoped>
  .lodash {
    padding: 30px;
    .tip {
      padding-right: 15px;
    }
  }
</style>

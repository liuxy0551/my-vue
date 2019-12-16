<template>
  <div></div>
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

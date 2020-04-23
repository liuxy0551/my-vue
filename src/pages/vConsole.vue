<template>
  <div class="v-console">
    <div class="v-console-cell">
      <div>vConsole</div>
      <van-button type="primary" plain @click="show" v-if="vConsole">关闭</van-button>
      <van-button type="primary" @click="show" v-else>打开</van-button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        vConsole: null
      }
    },
    methods: {
      show () {
        if (!this.vConsole) {
          let VConsole = require('vconsole/dist/vconsole.min.js')
          this.vConsole = new VConsole()
        } else {
          this.vConsole.destroy()
          this.vConsole = null
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .v-console {
    .v-console-cell {
      background: #fff;
      padding: 20px;
      display: flex;
      justify-content: space-between;
      .van-button {
        height: 30px;
        line-height: 30px;
      }
    }
  }
</style>

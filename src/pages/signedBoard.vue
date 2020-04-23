<template>
  <sy-scroll class="signed-board">
    <sy-signed-board :options="options" @changeMoveCount="changeMoveCount" ref="signedBoardRef">
      <div class="btn-box">
        <van-button @click="uploadImage">上传签名</van-button>
        <van-button @click="signAgain">重签</van-button>
      </div>
    </sy-signed-board>
  </sy-scroll>
</template>

<script>
  import dataURLToBlob from 'syedu/packages/assets/javascripts/lib/dataURLToBlob'

  export default {
    data () {
      return {
        moveCount: 0, // 移动次数
        minMoveCount: 50, // 低于 50 则认为未完成签名
        options: {

        }
      }
    },
    methods: {
      // 记录移动次数
      changeMoveCount (moveCount) {
        this.moveCount = moveCount
      },
      // 上传签名
      uploadImage () {
        if (!this.moveCount) {
          this.$toast('请先签名')
        } else {
          let imgBase64 = this.$refs['signedBoardRef'].toImage()
          console.log(imgBase64)
          let myBlob = dataURLToBlob(imgBase64)
          console.log(myBlob)
          this.$toast('上传成功')
        }
      },
      // 重签
      signAgain () {
        this.$refs['signedBoardRef'].clear()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .signed-board {
    height: 100%;
    background: #fff;
    .sy-signed-board {
      width: 375px;
      height: 600px;
      .btn-box {
        padding: 20px 0;
        display: flex;
        justify-content: space-around;
        .van-button {
          height: 30px;
          line-height: 30px;
        }
      }
    }
  }
</style>

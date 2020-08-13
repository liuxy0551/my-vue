<template>
  <div class="cloud-ui">
    <!--基础 不需要提前设定-->
    <Cloud ui="JsonView.px.f5c2860ad.js" :data="{a: 1}"></Cloud>

    <div class="tip">1、行用法 - 无动效</div>
    <cloud ui="ui-skeleton.px.9cbbcce50.js" :loading="loading">
      <div class="text">{{ text }}</div>
    </cloud>

    <div class="tip">2、行用法 - 有动效</div>
    <cloud ui="ui-skeleton.px.9cbbcce50.js" active :loading="loading">
      <div class="text">{{ text }}</div>
    </cloud>

    <div class="tip">3、头像（圆形图片）用法 - 有动效</div>
    <cloud ui="ui-skeleton.px.9cbbcce50.js" active :loading="loading" type="circle" width="40px">
      <img class="avatar" :src="avatar" alt="" />
    </cloud>

    <div class="tip">4、图片用法 - 有动效</div>
    <cloud ui="ui-skeleton.px.9cbbcce50.js" active :loading="loading" type="rect">
      <img class="img" :src="imgSrc" alt="" />
    </cloud>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        loading: true,
        text: '',
        avatar: '',
        imgSrc: ''
      }
    },
    mounted () {
      setTimeout(() => {
        this.text = '这是骨架屏的一段文字这是骨架屏的一段文字这是骨架屏的一段文字这是骨架屏的一段文字这是骨架屏的一段文字'
        this.avatar = 'https://gss0.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/b8014a90f603738d7c8316c6b11bb051f919ec0d.jpg'
        this.imgSrc = 'https://www.buildingsguide.com/wp-content/uploads/2018/01/WR-Garage-300x200.jpg'
      }, 500)

      setInterval(() => {
        this.loading = !this.loading
      }, 130000)
    }
  }
</script>

<style lang="scss" scoped>
  .cloud-ui {
    padding: 0 20px;
    .tip {
      font-size: 15px;
      padding: 30px 0 10px;
    }
    .sy-skeleton {
      padding: 0 20px;
    }

    /deep/ .text {
      line-height: 28px;
    }
    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      vertical-align: top;
    }
    .img {
      width: 60px;
      height: 40px;
    }
  }
</style>

<style lang="scss">
  .ui-skeleton {
    .bg {
      background: red !important;
    }
  }
</style>

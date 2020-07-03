<template>
  <div class="px-photo-content photo-content">
    <div class="bg-content" ref="bgRef"></div>

    <div class="img-box" ref="boxRef">
      <div class="img-item" v-for="(item, idx) in list" :key="idx"
           @click="showMedia(item)" @mouseenter="mouseEnter(idx)" @mouseleave="mouseLeave(idx)">
        <img class="avatar"
             src="http://web.cmc.zju.edu.cn/sltv//upload/Image/mrtp/2020/05/21/1_8b94cb57b79346b6a26a7a082cd4bd4a.png">
      </div>
    </div>
  </div>
</template>

<script>
import Preview from './components/Preview'
import animations from 'create-keyframe-animation'

export default {
  data() {
    return {
      list: [],
      dialogShowing: false,
      photo: null
    }
  },
  methods: {
    // 有范围的随机数
    random(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    // 初始化头像
    initPhotoContent() {
      let children = this.$refs['boxRef'].children
      for (let i = 0; i < children.length; i++) {
        let random = this.random(0, 300) - Math.floor(i / 8) * 100
        let animation = {
          100: {
            transform: `translate(0, ${ random - 1400 }px)`
          }
        }
        !children[i].style.transform && (children[i].style.transform = `translate(0, ${ random }px)`)
        let time = new Date().getTime()
        animations.registerAnimation({
          name: `vertical-move-${ time }-${ i }`,
          animation,
          presets: {
            duration: 35 * 1000, // 动画时长
            easing: 'linear' // 动画曲线
          }
        })
        // 绑定动画元素
        !children[i].style.animation && animations.runAnimation(children[i], `vertical-move-${ time }-${ i }`)
      }
    },
    // 点击了头像 - 打开弹框，暂停所有动画
    showMedia(item) {
      this.$ext.mount(Preview, { props: { item, runAnimation: this.runAnimation } })

      this.dialogShowing = true
      let children = this.$refs['boxRef'].children
      for (let i = 0; i < children.length; i++) {
        children[i].style.animationPlayState = 'paused'
      }
    },
    // 鼠标移入暂停该头像的动画
    mouseEnter(idx) {
      this.$refs['boxRef'].children[idx].style.animationPlayState = 'paused'
    },
    // 鼠标移出继续该头像的动画
    mouseLeave(idx) {
      !this.dialogShowing && (this.$refs['boxRef'].children[idx].style.animationPlayState = 'running')
    },
    // 关闭媒体弹框 - 继续滚动所有动画
    runAnimation() {
      this.dialogShowing = false
      let children = this.$refs['boxRef'].children
      for (let i = 0; i < children.length; i++) {
        children[i].style.animationPlayState = 'running'
      }
    },
    // 获取数据
    fetchData() {
      let length = this.list.length
      for (let i = length; i < length + 8; i++) {
        this.list.push(i)
      }
      this.$nextTick(() => {
        this.initPhotoContent()
      })
    }
  },
  mounted() {
    this.fetchData()

    this.photo = setInterval(() => {
      this.fetchData()
    }, 10 * 1000)
  },
  beforeDestroy() {
    clearInterval(this.photo)
  }
}
</script>

<style lang="scss" scoped>
  @media screen and (min-width: 1025px) {
    .px-photo-content {
      width: 100%;
      height: 100%;
      overflow: hidden;
      -webkit-overflow-scrolling: touch;

      .bg-content {
        height: 100%;
        background-image: url(http://159.226.158.199/media/compose/oceanBackground.png);
      }

      .img-box {
        width: 80%;
        margin: 0 10%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .img-item {
          width: 12%;
          height: 100px;
          cursor: pointer;
          .avatar {
            width: 100px;
            height: 100px;
            border-radius: 50%;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .photo-content {
      height: 100%;
      overflow-y: auto;

      .img-box {
        .img-item {

        }
      }
    }
  }
</style>

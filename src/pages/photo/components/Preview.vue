<template>
  <el-dialog :visible.sync="mixShowDialog" width="690px" @closed="closed" :close-on-click-modal="false" destroy-on-close>
    <div class="px-media-dialog media-dialog">
      <div class="media-part">
        <!--<img :src="imgUrl">-->
        <video :src="videoUrl" controls preload autoplay x5-video-player-type="h5-page" :playsinline="true" :webkit-playsinline="true" ref="videoRef" />
      </div>
    </div>
  </el-dialog>
</template>

<script>
import mixDialog from 'syedu/packages/mixins/mixDialog'

export default {
  name: 'Preview',
  mixins: [mixDialog],
  props: {
    item: Object,
    runAnimation: Function
  },
  data() {
    return {
      imgUrl: 'http://web.cmc.zju.edu.cn/sltv//upload/Image/mrtp/2020/05/18/1_3d75564145874ce2a7335dd57159c0f5.jpg',
      // imgUrl: 'http://web.cmc.zju.edu.cn/sltv//upload/Image/mrtp/2020/05/25/1_8cd64530ceea4469a1d48af645f8159b.png',
      // videoUrl: 'http://video.cmc.zju.edu.cn/rongmeiti/vod/2020/05/20/c46442c0dbb442d58bedba94333d1aa6/c46442c0dbb442d58bedba94333d1aa6_h264_500k_mp4.mp4'
      videoUrl: 'http://video.cmc.zju.edu.cn/rongmeiti/vod/2020/05/25/7f2a1ca294f74d09a68a917b239e716f/7f2a1ca294f74d09a68a917b239e716f_h264_500k_mp4.mp4'
    }
  },
  methods: {
    closed() {
      this.mixOnCancel()
      this.runAnimation()
    }
  }
}
</script>

<style lang="scss" scoped>

  @media screen and (min-width: 1025px) {
    .px-media-dialog {
      height: 100%;
      -webkit-overflow-scrolling: touch;
      .media-part {
        width: 640px;
        height: 360px;
        display: flex;
        justify-content: center;
        img {
          /*width: 100%;*/
          max-height: 360px;
          object-fit: fill;
        }
        video {
          width: 100%;
          max-height: 360px;
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .media-dialog {
      height: 100%;
      overflow-y: auto;
      .media-part {

      }
    }
  }
</style>

<style lang="scss">
  .el-dialog__header {
    padding: 0;
  }
  .el-dialog__body {
    padding: 20px 10px 10px;
  }
</style>

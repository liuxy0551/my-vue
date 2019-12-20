<template>
  <div class="home">
    <div class="box">
      <div class="item"
           :class="{ 'left-right' : index % 4 === 1, 'three' : index % 2 === 1 }"
           v-for="(item, index) in pageList"
           @click="goPage(item.name)"
      >
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        pageList: [
          { title: 'Lodash', name: 'Lodash' }, { title: 'Element', name: 'Element' }, { title: '钝角三角形', name: 'Triangle' },
          { title: '矩形', name: 'Rectangle' }, { title: '气泡对话框', name: 'Bubble' },
          { title: 'Element', name: 'Element' }, { title: '钝角三角形', name: 'Triangle' },
          { title: 'Lodash', name: 'Lodash' }, { title: 'Element', name: 'Element' }, { title: '钝角三角形', name: 'Triangle' },
          { title: 'Lodash', name: 'Lodash' }, { title: 'Element', name: 'Element' }
        ]
      }
    },
    methods: {
      goPage (routerName) {
        this.$router.push({ name: routerName })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .home {
    .box {
      display: flex;
      flex-wrap: wrap;
      .item {
        width: 93px;
        line-height: 93px;
        font-size: 18px;
        font-weight: 600;
        text-align: center;
        border-bottom: 1px #929292 solid;
        &.left-right {
          border-left: 1px #929292 solid;
          border-right: 1px #929292 solid;
        }
        &.three {
          border-left: 1px #929292 solid;
        }
      }
    }
  }
</style>

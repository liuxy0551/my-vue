<template>
  <div class="home">
    <div class="box">
      <div class="item"
           :class="{ 'left-right' : index % 4 === 1, 'three' : index % 2 === 1 }"
           v-for="(item, index) in routerList"
           @click="goPage(item.name)"
      >
        {{ item.meta.title }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        routerList: []
      }
    },
    methods: {
      goPage (routerName) {
        this.$router.push({ name: routerName })
      }
    },
    mounted () {
      let routerList = []
      for (let i of this.$router.options.routes) {
        if (i.meta) {
          if (i.children && i.children.length) {
            for (let j of i.children) {
              routerList.push(j)
            }
          } else {
            routerList.push(i)
          }
        }
      }

      this.routerList = routerList
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

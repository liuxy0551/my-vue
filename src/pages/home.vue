<template>
  <div class="home">
    <div class="box">
      <div class="item"
           :class="{ 'two' : index % 4 === 1, 'three' : index % 4 === 2 }"
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
  $borderColor: #929292;
  .home {
    .box {
      display: flex;
      flex-wrap: wrap;
      .item {
        width: 93px;
        line-height: 93px;
        font-weight: 600;
        text-align: center;
        border-bottom: 1px $borderColor solid;
        &.two {
          border-left: 1px $borderColor solid;
          border-right: 1px $borderColor solid;
        }
        &.three {
          border-right: 1px $borderColor solid;
        }
      }
    }
  }
</style>

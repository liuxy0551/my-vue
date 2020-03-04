<template>
  <div class="home">
    <ul>
      <li :class="{ 'two' : index % 3 === 1 }" v-for="(item, index) in routerList" :key="index" @click="goPage(item.name)">
        {{ item.meta.title }}
      </li>
    </ul>
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
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 124px;
        line-height: 93px;
        font-size: 14px;
        font-weight: 600;
        text-align: center;
        border-bottom: 1px $borderColor solid;
        &.two {
          width: 125px;
          border-left: 1px $borderColor solid;
          border-right: 1px $borderColor solid;
        }
      }
    }
  }
</style>

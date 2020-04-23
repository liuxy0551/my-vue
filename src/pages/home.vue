<template>
  <sy-scroll class="home">
    <ul>
      <li v-for="(item, index) in routerList" :key="index" @click="goPage(item.name)">
        <div>{{ item.meta.title }}</div>
        <sy-icon icon="arrow-right" size="20" color="#C5C5C5" />
      </li>
    </ul>
  </sy-scroll>
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
      padding: 10px 20px 70px;
      li {
        font-size: 14px;
        font-weight: 600;
        padding: 15px 10px;
        border-bottom: 1px #DBE0E6 solid;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
</style>

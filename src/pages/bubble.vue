<template>
  <div class="bubble-box">
    <!--冒泡排序-->
    <ul>
      <li>
        <div class="row">
          <div class="label">随机数组：</div>
          <el-button type="primary" size="small" @click="getRandomList(1, 50, 6)">生成随机数组</el-button>
        </div>
        <div class="value">{{ list }}</div>
      </li>
      <li>
        <div class="label">排序后数组：</div>
        <div class="value">{{ bubbleList }}</div>
      </li>
    </ul>

    <ul>
      <li v-for="item in textList" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        list: [],
        bubbleList: [],
        textList: []
      }
    },
    methods: {
      // 生成随机数组
      getRandomList (min = 1, max = 50, length = 6) {
        let list = []
        for (let i = 0; i < length; i++) {
          let num = Math.floor(Math.random() * (max - min + 1) + min)
          list.push(num)
        }

        this.list = list
        this.bubbleSort()
      },
      // 冒泡排序
      bubbleSort () {
        let list = [...this.list]
        this.textList = []

        // 需要进行 list.length 次比较
        for (let i = 0; i < list.length - 1; i++) {
          // 第 i 趟比较
          for (let j = 0; j < list.length - i - 1; j++) {
            // 开始进行比较，如果 list[i] > list[i + 1]，则交换位置
            if (list[j] > list[j + 1]) {
              let temp = list[j]
              list[j] = list[j + 1]
              list[j + 1] = temp
            }
          }
          let textItem = `第${ i + 1 }趟：[ ${ list.join(', ') } ]`
          this.textList.push(textItem)
        }

        this.bubbleList = list
      }
    },
    mounted () {
      this.getRandomList()
    }
  }
</script>

<style lang="scss" scoped>
  .bubble-box {
    padding: 20px;
    ul {
      &:first-child {
        border-bottom: 1px #929292 dashed;
        margin-bottom: 15px;
      }
      li {
        padding-bottom: 15px;
        .row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 5px;

        }
      }
    }
  }
</style>

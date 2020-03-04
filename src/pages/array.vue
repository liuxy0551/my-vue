<template>
  <div class="array-box">
    <!--数组元素交换-->
    <div class="arr">{{ arr }}</div>

    <div class="el-box">
      <el-button type="primary" :disabled="value === null || index === 0" @click="indexLeft">左移</el-button>

      <el-select class="select" v-model="value" clearable placeholder="请选择元素后移动">
        <el-option v-for="item in arr1" :key="item" :label="item" :value="item"></el-option>
      </el-select>

      <el-button type="primary" :disabled="value === null || index === arr1.length - 1" @click="indexRight">右移</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        arr: [2, 4, 6, 8, 10, 12, 14, 16],
        arr1: [2, 4, 6, 8, 10, 12, 14, 16],
        value: null
      }
    },
    computed: {
      index () {
        return this.arr.indexOf(this.value)
      }
    },
    methods: {
      // 数组元素交换
      swapArray (arr, index1, index2) {
        arr[index1] = arr.splice(index2, 1, arr[index1])[0]
      },
      // 左移
      indexLeft () {
        this.swapArray(this.arr, this.index, this.index - 1)
      },
      // 右移
      indexRight () {
        this.swapArray(this.arr, this.index, this.index + 1)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .array-box {
    .arr {
      padding: 40px 0 0;
      display: flex;
      justify-content: center;
    }

    .el-box {
      margin: 50px 15px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .select {
        margin: 0 20px;
      }
    }
  }
</style>

<template>
  <div class="element">
    <div class="msg">输入框：<span>{{ msg }}</span></div>
    <el-input v-model.trim="msg" placeholder="请输入，最长 20 位，无空格" maxlength="20" clearable></el-input>

    <div class="value">选择项：<span>{{ value }}</span></div>
    <el-select v-model="value" placeholder="请选择">
      <el-option
              v-for="item in options"
              :key="item"
              :label="item"
              :value="item"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: '',
        value: '',
        options: ['选项1', '选项2', '选项3', '选项4']
      }
    },
    mounted () {

    }
  }
</script>

<style lang="scss" scoped>
  .element {
    padding: 20px;
    .msg {
      padding: 10px 0;
    }
    .value {
      padding: 30px 0 10px;
    }
    span {
      color: seagreen;
      font-weight: 600;
    }
  }
</style>

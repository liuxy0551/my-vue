<template>
  <div class="amount">
    <!--金额-->
    <van-field
            label="金额数字："
            type="number"
            v-model="amount"
            placeholder="请输入金额，最长14位"
            maxlength="14"
            clearable
            autofocus
            :error-message="errMsg"
    >
    </van-field>

    <ul>
      <li>
        <div class="label">方法一：</div>
        <div class="value">{{ amount1 || '等待输入' }}</div>
      </li>
      <li>
        <div class="label">方法二：</div>
        <div class="value">{{ amount2 || '等待输入' }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
  import chunk from 'lodash/chunk'

  export default {
    data () {
      return {
        amount: '',
        amount1: '',
        amount2: '',
        errMsg: '',
      }
    },
    watch: {
      amount (nv) {
        let reg = /((^[1-9]\d*)|^0)(\.\d{0,2}){0,1}$/

        if (reg.test(nv)) {
          this.errMsg = ''

          let left = nv.split('.')[0]
          let right = ''
          if (nv.indexOf('.') > -1) {
            right = '.' + nv.split('.')[1]
          }

          // 计算有几个逗号
          let num = Math.ceil((left.length - 3) / 3)


          this.func1(nv, left, right, num)
          this.func2(nv, left, right, num)
        } else {
          this.errMsg = '金额格式不正确'
        }
      }
    },
    methods: {
      // 拼接
      func1 (amount, left, right, num) {
        if (left.length > 3) {
          let list = []

          for (let i = 0; i < num; i++) {
            list.push(left.slice(left.length - (i + 1) * 3, left.length - i * 3))
          }

          this.amount1 = left.slice(0, left.length - num * 3) + ',' + list.reverse().join(',') + right
        } else {
          this.amount1 = amount
        }
      },
      // 利用 lodash
      func2 (amount, left, right, num) {
        if (left.length > 3) {
          // 第一个逗号前面的数字
          let beforeCommaNum = left.slice(0, left.length - num * 3)
          // 第一个逗号后面的数字
          let afterCommaNum = left.slice(left.length - num * 3)

          let list = chunk(afterCommaNum, 3).map(i => i.join(''))

          this.amount2 = beforeCommaNum + ',' + list.join(',') + right
        } else {
          this.amount2 = amount
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .amount {
    padding: 30px 20px;

    ul {
      font-size: 14px;
      li {
        padding-top: 20px;
        .label {

        }
        .value {
          color: seagreen;
          font-weight: 600;
          letter-spacing: 0.5px;
          padding-top: 5px;
        }
      }
    }
  }
</style>

<template>
  <div class="rectangle-box">
    <div class="rectangle-part">
      <!--矩形-->
      <div class="rectangle"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .rectangle-box {
    height: 70vh;
    background-color: #d0d0d0;
    .rectangle-part {
      position: absolute;
      top: 50px;
      left: 25px;
      .rectangle {
        position: relative;
        &:before, &:after {
          content: '';
          position: absolute;
        }
        &:before {
          width: 325px;
          height: 180px;
          border-radius: 15px;
          background-color: #41b883;
        }
        &:after {
          width: 305px;
          height: 160px;
          top: 10px;
          left: 10px;
          border-radius: 5px;
          background-color: #fff;
        }
      }
    }
  }
</style>

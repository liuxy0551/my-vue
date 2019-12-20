<template>
  <div class="triangle-box">
    <div class="triangle-part">
      <!--三角形-->
      <div class="triangle"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .triangle-box {
    height: 100vh;
    background-color: #d0d0d0;
    .triangle-part {
      position: absolute;
      top: 100px;
      left: 170px;
      .triangle {
        width: 30px;
        height: 90px;
        overflow: hidden;
        position: relative;
        &:before, &:after {
          content: '';
          width: 50px;
          height: 50px;
          position: absolute;
          transform: scaleY(1.3) translate(30%, -30px) rotate(45deg);
        }
        &:before {
          left: -7px;
          top: 59px;
          border-radius: 10px;
          background-color: #41b883;
        }
        &:after {
          left: 7px;
          top: 59px;
          border-radius: 5px;
          background-color: #fff;
        }
      }
    }
  }
</style>

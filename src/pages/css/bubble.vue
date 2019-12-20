<template>
  <div class="bubble-box">
    <!--矩形-->
    <div class="rectangle-part">
      <div class="rectangle">
        <!--三角形-->
        <div class="triangle-part">
          <div class="triangle"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .bubble-box {
    height: 100vh;
    background-color: #d0d0d0;
    /*矩形*/
    .rectangle-part {
      position: absolute;
      top: 50px;
      left: 30px;
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

      /*钝角三角形*/
      .triangle-part {
        position: absolute;
        top: 34px;
        left: -20px;
        z-index: 1;
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
  }
</style>

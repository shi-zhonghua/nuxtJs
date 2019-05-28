<template>
    <div class="summeny">

        <div class="sumLt">左</div>
        <div class="sumRt">
            <div class="sumRt-icon">
                <ul>
                    <li v-for="(item,index) in list" :key="index">
                        <span class="title">{{item}}</span>
                    </li>
                </ul>
            </div>
            <el-button @click="add">添加数据</el-button>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      list: ["标题1", "标题1", "标题1"]
    };
  },
  methods: {
    add() {
        this.list.push("标题");
    }
  }
};
</script>

<style lang="less" scoped>
.summeny {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .sumLt {
    width: 33%;
    background: #e2e8ff;
    height: 300px;
  }

  .sumRt {
    width: 66%;
    background: #e2e8ff;
    .sumRt-icon {
      li {
        position: relative;
        list-style: none;
        height: 55px;
        .title {
          font-size: 12px;
          color: #000;
          margin-top: 38px;
          float: left;
        }
        &::before {
          position: absolute;
          content: "";
          bottom: 0px;
          left: -26px;
          width: 16px;
          height: 16px;
          background: url("../assets/img/yida.png") 0 0 no-repeat;
        }
        &::after {
          position: absolute;
          content: "";
          top: 2px;
          left: -20px;
          width: 32px;
          height: 32px;
          background: url("../assets/img/buzhou.png") -14px 0 no-repeat;
          animation: mymove 0.4s 1;
        }
      }
      li:first-child {
        &::after {
          background: none;
        }
      }
      li:last-child {
        &::after {
          background: url("../assets/img/buzhouH.png") -14px 0 no-repeat;
        }
        &::before {
          background: url("../assets/img/yidaH.png") 0 0 no-repeat;
        }
      }
    }
  }
  @keyframes mymove {
    0% {
      height: 0%;
    }

    100% {
      height: 32px;
    }
  }
}
</style>


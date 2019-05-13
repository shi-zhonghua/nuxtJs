<template>
  <div>
    <li v-for="(item,index) in userData" :key="index" :id="gernerateId(index)" :class="'users_'+index">
      {{item.label}}
    </li>
    <nuxt-child />
    <div class="search-condition">
      <div class="item">
        <ul v-for="(key,value) in objArr" :key="value">
            <li>{{value}}:</li>
            <li v-for="(item,index) in key" @click="getSelect(value,index)" :class="{'active': index===currentIndex[value]}">{{item}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import usersIndex from './users/index.vue'
export default {
  components: {
    usersIndex
  },
  data() {
    return {
      currentIndex: {
        bigClass: 0,
        bigClass1: 0
      },
      objArr: {
        bigClass: ["不限", "sss"],
        bigClass1: ["不限1", "sss1"],
      },

      userData: [
        { id: 1, label: '手机' },
        { id: 2, label: '电脑' },
        { id: 3, label: '平板' },
      ]
    }
  },
  methods: {
    gernerateId: function(index) {
      return "person_" + index
    },
    getSelect(value, index) {
      console.log(value);
      console.log(index);
      this.currentIndex[value] = index;
    }
  }
}

</script>
<style lang="less" scoped>
.search-condition {
  .item {
    box-sizing: border-box;
    padding-left: 40px;
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-bottom: solid 1px #ccc;
    ul{
      width:100%;
      overflow: hidden;
    }
    li {
      float: left;
      font-size: 14px;
      margin-right: 20px;
      cursor: pointer;
      list-style: none;

      &.active {
        color: #f0f;
      }
    }
  }
}

</style>

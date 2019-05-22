<template>
  <div>
    <li v-for="(item,index) in info" :key="index" @click="handeClick(item)">
      <span>userId:{{item.userId}}</span>
      <span>title:{{item.title}}</span>
    </li>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  scrollToTop: true, // 进入当前页滚动条在原来位置
  asyncData() { //请求
    return axios({
        method: 'get',
        url: 'http://jsonplaceholder.typicode.com/posts'
      })
      .then(function(response) {
        return { info: response.data };

      })
  },
  head() {
    return {
      title: '用户列表'
    }
  },
  methods: {
    handeClick(item) {
      this.$router.push({
        path: '/usersId/' + item.id
      })
    }
  }
}

</script>
<style lang="less" scoped>
li {
  line-height: 40px;
  border-bottom: solid 1px #ccc;
  list-style: none;
  padding-left:30px;
}

</style>

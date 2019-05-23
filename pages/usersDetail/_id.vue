<template>
  <div>
    <li>
      id:{{info.id}}
      userId:{{info.userId}}
      title:{{info.title}}
    </li>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  // 验证参数类型
  validate({ params }) {
    // 必须是number类型
    return /^\d+$/.test(params.id)
  },
  // 异步调用数据
  asyncData({ params }) {
    // console.log(params.id);
    return axios({
        method: 'get',
        url: 'http://jsonplaceholder.typicode.com/posts'+'/' + params.id
      })
      .then(function(response) {
        return { info: response.data };

      })
  },
  mounted() {
    this.currrentId = this.$route.params.id;
  },
  data() {
    currrentId: 0
  },
  head() {
    return {
      title: this.currrentId
    }
  }
}

</script>

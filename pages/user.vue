<template>
  <div class="user">
    <el-table :data="info" style="width: 100%">
      <el-table-column prop="id" label="ID" width="180">
      </el-table-column>
      <el-table-column prop="name" label="名称" width="180">
      </el-table-column>
      <el-table-column prop="username" label="用户名称">
      </el-table-column>
      <el-table-column prop="email" label="邮箱">
      </el-table-column>
      <el-table-column prop="address.city" label="城市">
      </el-table-column>

    </el-table>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  /**
asyncData方法会在组件（限于页面组件）每次加载之前被调用。它可以在服务端或路由更新之前被调用。在这个方法被调用的时候，第一个参数被设定为当前页面的上下文对象，你可以利用asyncData方法来获取数据并返回给当前组件
*/

  // asyncData(context) {
  //   return { project: 'nuxt' }
  // },
  asyncData() { //请求
    return axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/users'
      })
      .then(function(response) {
        return { info: response.data };

      })
  },

  data() {
    return {
      title: '用户'

    }
  },
  head() {
    return {
      title: '用户',
      meta: [
        { hid: 'user', name: 'user', content: this.title }
      ]
    }
  },
}

</script>

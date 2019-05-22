<template>
  <div class="container">
    <el-table :data="users" style="width: 100%">
       <el-table-column prop="id" label="ID" width="80">
      </el-table-column>
      <el-table-column prop="title" label="标题" >
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
// import Logo from '~/components/Logo.vue'

import axios from 'axios'
// import axios from '~/plugins/axios'


export default {
  asyncData(context, callback) {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
      callback(null, { users: res.data.slice(0, 20) })
    })
  },

  components: {
    // Logo
  },
  data() {
    return {
      title: '首页',
    }
  },
  // 修改浏览器的title  hid 是唯一标识
  head() {
    return {
      title: this.title,
      meta: [
        { hid: 'index', name: 'index', content: this.title }
      ],
    }
  }
}

</script>
<style>
</style>

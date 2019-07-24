<template>
  <div class="container">
    <FacebookLoader class="content" v-if="isContent">
      <rect x="0" y="0" rx="3" ry="3" width="250" height="10" />
      <rect x="20" y="20" rx="3" ry="3" width="220" height="10" />
      <rect x="20" y="40" rx="3" ry="3" width="170" height="10" />
      <rect x="0" y="60" rx="3" ry="3" width="250" height="10" />
      <rect x="20" y="80" rx="3" ry="3" width="200" height="10" />
      <rect x="20" y="100" rx="3" ry="3" width="80" height="10" />
    </FacebookLoader>
    <el-table :data="users" style="width: 100%">
      <el-table-column prop="id" label="ID" width="80">
      </el-table-column>
      <el-table-column prop="title" label="标题">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
// import Logo from '~/components/Logo.vue'
import { ContentLoader ,FacebookLoader} from 'vue-content-loader'
import axios from 'axios'
export default {
  asyncData(context, callback) {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
      callback(null, { users: res.data.slice(0, 10) })
    })
  },

  components: {
    // Logo
    ContentLoader,
    FacebookLoader
  },
  data() {
    return {
      title: '首页',
      isContent:true
    }
  },
  mounted(){
    setTimeout(()=>{
      this.isContent=false;
    },5000)
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
<style scoped>
.content {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /*background: #ccc;*/
  z-index: 333;
}

</style>

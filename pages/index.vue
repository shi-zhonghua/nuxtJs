<template>
  <div class="container">
    {{title}}
    <li v-for="user in users">
      {{user.title}}
    </li>
  </div>
</template>
<script>
// import Logo from '~/components/Logo.vue'
import axios from 'axios'

export default {
  asyncData(context, callback) {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
      // console.log(res);
      callback(null, { users: res.data })
    })
  },

  components: {
    // Logo
  },
  data() {
    return {
      title: '首页'
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

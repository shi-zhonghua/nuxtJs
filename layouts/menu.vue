<template>
  <div class="menu">
    <p><img src="~/assets/img/icon-log.png" /></p>
      
      <nuxt-link class="li" v-for="item in menus" :key="item.name"  :to="item.router">{{item.name}}</nuxt-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menus: [
        { name: '首页', router: '/' },
        { name: '产品', router: '/product' },
        { name: '用户', router: '/user' },
        { name: 'Vuex', router: '/store' },
        { name: '关于我们', router: '/about' },

      ]
    }
  }

}

</script>
<style lang="less" scoped>
.menu {
  width: 100%;
  height: 39px;
  line-height: 39px;
  border-bottom: solid 1px #ccc;

  p {
    display: inline;
    margin: 0 20px;
    float: left;
    width: 40px;
    height: 39px;
    overflow: hidden;

    img {
      width: 100%;
      height: 39px;
    }
  }

  .li {
    float: left;
    list-style: none;
    margin-right: 20px;
    text-decoration: none;
    color: #000;

  }

  // 导航默认字体颜色
  .nuxt-link-active {
    color: #000;

  }

  // 导航选中颜色
  .nuxt-link-exact-active {
    color: blue;
  }
}

</style>

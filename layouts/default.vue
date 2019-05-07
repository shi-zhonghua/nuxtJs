<template>
  <div>
    <menuNav/>
    <nuxt style="padding-bottom:50px;"/>
    <footers/>
  </div>
</template>
<script>
import menuNav from './menu.vue'
import footers from './footer.vue'
export default {
  components:{
    menuNav,
    footers
  }
}

</script>
<style>
body {
  padding: 0;
  margin: 0;
}

</style>

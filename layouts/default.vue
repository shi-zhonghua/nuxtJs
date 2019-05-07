<template>
  <div>
    <menuNav/>
    <nuxt />
  </div>
</template>
<script>
import menuNav from './menu.vue'
export default {
  components:{
    menuNav
  }
}

</script>
<style>
body {
  padding: 0;
  margin: 0;
}

</style>

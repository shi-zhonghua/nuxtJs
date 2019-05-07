<template>
  <div class="menu">
  	<p><img src="~/assets/img/icon-log.png" /></p>
    <li>首页</li>
    <li>产品</li>
    <li>我们</li>
    <li>地址</li>
  </div>
</template>
<script>
	export default{
		data(){

		}
	}
</script>
<style lang="less" scoped>
.menu {
  width: 100%;
  height: 39px;
  line-height: 39px;
  border-bottom: solid 1px #ccc;
  p{
  	display: inline;
  	margin:0 20px;
  	float: left;
  	width: 40px;
  	height: 39px;
  	overflow: hidden;
  	img{
  		width:100%;
  		height: 39px;
  	}
  }
  li{
  	float: left;
  	list-style:none;
  	margin-right:20px;
  }
}

</style>

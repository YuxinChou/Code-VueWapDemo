<template>
  <div class="container" :style="'height:'+wHeight+'px;'">
    <i class="iconfont icon-404"></i>
    <p class="title">404</p>
    <router-link to="/messages" class="return_back">返回首页</router-link>
  </div>
</template>

<script>
  export default {
		data() {
      return {
				wHeight: 0,
			}
		},
		mounted() {
      this.wHeight = document.documentElement.clientHeight || document.body.clientHeight;
    }
  }
</script>

<style lang="scss" scoped>
	.container {
  	height: 100%;
		background-color: #fff;
		padding: 40% 1rem 0;
		text-align: center;
		.iconfont {
			display: block;
			font-size: 3.6rem;
			color: #999;
		}
		.title {
			font-size: 1.4rem;
			font-weight: 600;
			color: #999;
		}
		.return_back {
			display: inline-block;
			margin-top: 2rem;
			padding: 0.2rem 0.6rem;
			border: 1px solid #999;
			border-radius: 4px;
			color: #999;
	  }
	}
</style>

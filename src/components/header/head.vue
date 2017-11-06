<template>
	<header class='header'>
	  <span v-if="toggleBtn!=false" class="head_toggle" @click="toggleSideBar">
      <img class="top_image" src="https://cn.bing.com/az/hprichbg/rb/GreatSaltLake_ZH-CN12553220159_1920x1080.jpg"/>
    </span>
	  <slot name='head_text'>
      <!-- <span class="head_text">LOGO</span> -->
    </slot>
	  <slot name='head_subtext'>
      <!-- <span class="head_subtext">iPhone在线 - WiFi</span> -->
	  </slot>
    <slot name='head_btn'>
      <!-- <span class="head_btn"><i class="iconfont icon-tianjia"></i></span> -->
    </slot>
    <slot name='head_back'>
      <!-- <span class="head_back"><i class="iconfont icon-fanhui"></i>动态</span> -->
    </slot>
    <slot name='head_input'>

    </slot>
	</header>
</template>

<script>
  export default {
    props: ['toggleBtn', 'signinUp', 'headTitle', 'goBack'],
    methods: {
      toggleSideBar() {
        this.$store.dispatch('ToggleSideBar');
      },
    },
  }
</script>

<style lang="scss" scoped>
  /*header*/
  .header {
    background-color: #3190e8;
    background: -webkit-linear-gradient(right top, #61b8f8 , #5e8bf7); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(bottom left, #61b8f8, #5e8bf7); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(bottom left, #61b8f8, #5e8bf7); /* Firefox 3.6 - 15 */
    background: linear-gradient(to bottom left, #61b8f8 , #5e8bf7); /* 标准的语法 */
    position: fixed;
    left: 0;
    top: 0;
    text-align: center;
    width: 100%;
    height: 1.95rem;
    z-index: 10;
    /*头像菜单按钮*/
    .head_toggle {
      position: absolute; 
      left:0.5rem; 
      img {
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 1rem;
        margin-top: 0.2rem;
      }
      i {
        line-height: 1.95rem;
        font-size: 1rem;
      }
    }
    /*文字*/
    .head_text {
      line-height: 1.95rem;
      font-size: 0.7rem;
      color: #fff;
      display: inline-block;
      &.subtext {
        line-height: 1.5rem;
      }
    }
    .head_subtext {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      text-align: center;
      font-size: 0.3rem;
      line-height: 1rem;
      color: #fff;
    }
    /*右侧按钮*/
    .head_btn {
      position: absolute; 
      right:0.5rem; 
      line-height: 1.95rem;
      font-size: 0.7rem;
      color: #fff;
      a {
        color: #fff;
      }
      i {
        line-height: 1.95rem;
        font-size: 0.7rem;
        color: #fff;
      }
    }
    /*返回按钮*/
    .head_back {
      position: absolute; 
      left:0.5rem; 
      line-height: 1.95rem;
      font-size: 0.7rem;
      color: #fff;
      a {
        color: #fff ;
      }
      i {
        line-height: 1.95rem;
        font-size: 0.7rem;
        color: #fff;
      }
    }
    .search {
      padding: 0.5rem 2.4rem 0.5rem 0.5rem;
      .search_content {
        position: relative;
        padding: 0 0.3rem;
        text-align: left;
        font-size: 0.5rem;
        line-height: 2;
        border-radius: 0.1rem;
        color: #999;
        background-color: #eee;
        i {
          position: absolute;
          left: 0.3rem;
          font-size: 0.5rem;
          color: #999;
          margin-right: 0.43em;
        }
        input {
          background-color: transparent;
          width: 100%;
          padding-left: 0.8rem;
          line-height: 1rem;
          font-size: 0.5rem;
        }
      }
    }
  }
</style>

<template>
	<div class='footer'>
    <router-link to="/messages" class="footer_menu" :class="{active:(activeIndex==0)}">
      <i class="iconfont icon-xiaoxi"></i>
      <span>消息</span>
    </router-link>
    <router-link to="/contacts" class="footer_menu" :class="{active:(activeIndex==1)}">
      <i class="iconfont icon-lianxiren"></i>
      <span>联系人</span>
    </router-link>
    <router-link to="/dynamics" class="footer_menu" :class="{active:(activeIndex==2)}">
      <i class="iconfont icon-dongtai"></i>
      <span>动态</span>
    </router-link>
  </div>
</template>

<script>
  export default {
    props: ['activeIndex'],
  }
</script>

<style lang="scss" scoped>
	.footer {
    background-color: #fff;
    position: fixed;
    z-index: 10;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 1.95rem;
    display: flex;
    box-shadow: 0 -0.03rem 0.05rem rgba(0, 0, 0, .1);
    .footer_menu {
      flex: 1;
      display: flex;
      text-align: center;
      flex-direction: column;
      align-items: center;
      .iconfont {
        display: block;
        font-size: 1rem;
        margin-top: 0.2rem;
        color: #666;
      }
      span {
        display: block;
        font-size: 0.4rem;
        color: #666;
      }
      &.active {
        .iconfont {
          color: #68b7f9;
        }
        span {
          color: #68b7f9;
        }
      }
    }
  }
</style>
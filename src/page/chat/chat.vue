<template>
  <div>
    <!-- head -->
    <head-top :toggleBtn="false">
      <span slot='head_text' class="head_text subtext">Quinn权-运营-广州</span>
      <span slot='head_subtext' class="head_subtext">iPhone在线 - WiFi</span>
      <span slot='head_btn' class="head_btn">
        <i class="iconfont icon-phone"></i>
        <router-link to="/profile"><i class="iconfont icon-profile"></i></router-link>
      </span>
      <span slot='head_back' class="head_back">
        <router-link to="/messages"><i class="iconfont icon-fanhui"></i></router-link>
      </span>
    </head-top>
    <!-- main -->
    <div class="main_wrapper">
      <div class="container">
        <div class="other">
          
        </div>
        <div class="my">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import headTop from '@/components/header/head'
  export default {
    components: {
      headTop,
    },
    data() {
      return {
       data: []
      }
    },
    mounted(){
      this.initData();
    },
    methods: {
      initData() {

      },
    }
  }
</script>

<style lang="scss" scoped>
  .container {
  }
</style>

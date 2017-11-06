<template>
  <div>
    <!-- head -->
    <head-top :toggleBtn="false">
      <span slot='head_text' class="head_text">更多</span>
      <span slot='head_back' class="head_back">
        <router-link to="/dynamics" class="to"><i class="iconfont icon-fanhui"></i>动态</router-link>
      </span>
    </head-top>
    <!-- main -->
    <div class="main_wrapper">
      <div class="container">
        <div class="box">
          <div class="box_title">
            <span>已关闭的功能</span>
          </div>
          <div class="box_item">
            <router-link to="/game">
              <span class="image"><i class="iconfont icon-category"></i></span>
              <span class="name">NOW直播</span>
              <span class="right"><span class="right_btn">开启</span></span>
            </router-link>
          </div>
          <div class="box_item">
            <router-link to="/more">
              <span class="image"><i class="iconfont icon-category"></i></span>
              <span class="name">腾讯新闻</span>
              <span class="right"><span class="right_btn">开启</span></span>
            </router-link>
          </div>
          <div class="box_item">
            <router-link to="/more">
              <span class="image"><i class="iconfont icon-category"></i></span>
              <span class="name">腾讯课堂</span>
              <span class="right"><span class="right_btn">开启</span></span>
            </router-link>
          </div>
          <div class="box_item">
            <router-link to="/more">
              <span class="image"><i class="iconfont icon-category"></i></span>
              <span class="name">企鹅辅导</span>
              <span class="right"><span class="right_btn">开启</span></span>
            </router-link>
          </div>
        </div>
        <div class="box">
          <div class="box_title">
          </div>
          <div class="box_item">
            <router-link to="">
              <span class="name">已开启的功能</span>
              <span class="right"><i class="iconfont icon-arrow-right"></i></span>
            </router-link>
          </div>
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
  }
</script>

<style lang="scss" scoped>
  .container {
    background-color: #f5f5f5;
  }
  .box {
    margin-bottom: 0.5rem;
    .box_title {
      padding: 0.2rem 0.5rem;
      margin-top: 0.5rem;
      border-bottom: 1px solid #eee;
      color: #666;
      font-size: 0.5rem;
    }
    .box_item {
      position: relative;
      background-color: #fff;
      border-bottom: 1px solid #eee;
      border-width: 1px 0; 
      color: #666;
      a {
        display: block;
        padding: 0.5rem; 
        .image {
          margin-right: 0.5rem;
          .iconfont {
            font-size: 0.6rem;
          }
        }
        .right {
          position: absolute;
          right: 0.5rem;
          .iconfont {
            color: #666;
            font-size: 0.6rem;
          }
          .right_btn {
            padding: 0.1rem 0.5rem;
            border: 1px solid #ccc;
            border-radius: 2px;
            font-size: 0.5rem;
          }
        }
      }
    }
  }
  
</style>

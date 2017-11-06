<template>
  <div>
    <!-- head -->
    <head-top>
      <span slot='head_text' class="head_text">动态</span>
      <span slot='head_btn' class="head_btn"><router-link to="/more">更多</router-link></span>
    </head-top>
    <!-- main -->
    <div class="main_wrapper">
      <div class="container">
        <search-bar></search-bar>
        <div class="catg">
          <router-link to="/more" class="catg_item">
            <i class="iconfont icon-category"></i>
            <span>好友动态</span>
          </router-link>
          <router-link to="/more" class="catg_item">
            <i class="iconfont icon-category"></i>
            <span>附近</span>
          </router-link>
          <router-link to="/more" class="catg_item">
            <i class="iconfont icon-category"></i>
            <span>兴趣部落</span>
          </router-link>
        </div>
        <div class="box">
          <div class="box_item">
            <router-link to="/game">
              <span class="image"><i class="iconfont icon-category"></i></span>
              <span class="name">游戏 (swiper demo)</span>
              <span class="right"><i class="iconfont icon-arrow-right"></i></span>
            </router-link>
          </div>
          <div class="box_item">
            <router-link to="/more">
              <span class="image"><i class="iconfont icon-category"></i></span>
              <span class="name">日迹</span>
              <span class="right"><i class="iconfont icon-arrow-right"></i></span>
            </router-link>
          </div>
          <div class="box_item">
            <router-link to="/more">
              <span class="image"><i class="iconfont icon-category"></i></span>
              <span class="name">看点</span>
              <span class="right"><i class="iconfont icon-arrow-right"></i></span>
            </router-link>
          </div>
          <div class="box_item">
            <router-link to="/more">
              <span class="image"><i class="iconfont icon-category"></i></span>
              <span class="name">京东购物</span>
              <span class="right"><i class="iconfont icon-arrow-right"></i></span>
            </router-link>
          </div>
          <div class="box_item">
            <router-link to="/more">
              <span class="image"><i class="iconfont icon-category"></i></span>
              <span class="name">阅读</span>
              <span class="right"><i class="iconfont icon-arrow-right"></i></span>
            </router-link>
          </div>
          <div class="box_item">
            <router-link to="/more">
              <span class="image"><i class="iconfont icon-category"></i></span>
              <span class="name">动漫</span>
              <span class="right"><i class="iconfont icon-arrow-right"></i></span>
            </router-link>
          </div>
          <div class="box_item">
            <router-link to="/more">
              <span class="image"><i class="iconfont icon-category"></i></span>
              <span class="name">音乐</span>
              <span class="right"><i class="iconfont icon-arrow-right"></i></span>
            </router-link>
          </div>
        </div>
        <div class="box">
          <div class="box_item">
            <router-link to="/more">
              <span class="image"><i class="iconfont icon-category"></i></span>
              <span class="name">运动</span>
              <span class="right"><i class="iconfont icon-arrow-right"></i></span>
            </router-link>
          </div>
          <div class="box_item">
            <router-link to="/more">
              <span class="image"><i class="iconfont icon-category"></i></span>
              <span class="name">吃喝玩乐</span>
              <span class="right"><i class="iconfont icon-arrow-right"></i></span>
            </router-link>
          </div>
          <div class="box_item">
            <router-link to="/more">
              <span class="image"><i class="iconfont icon-category"></i></span>
              <span class="name">同城服务</span>
              <span class="right"><i class="iconfont icon-arrow-right"></i></span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- footer -->
    <foot-menu :activeIndex="2"></foot-menu>
  </div>
</template>

<script>
  import headTop from '@/components/header/head'
  import footMenu from '@/components/footer/footer'  
  import searchBar from '@/components/common/searchBar' 
  export default {
    components: {
      headTop,
      footMenu,
      searchBar
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
    margin-bottom: 1.95rem;
    background-color: #f5f5f5;
  }
  .catg {
    background-color: #fff;
    width: 100%;
    height: 2.45rem;
    display: flex;
    margin-bottom: 0.5rem;
    .catg_item {
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
  .box {
    margin-bottom: 0.5rem;
    border-top: 1px solid #eee;
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
        }
      }
    }
  }
</style>

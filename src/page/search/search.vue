<template>
  <div>
    <!-- head -->
    <head-top :toggleBtn="false">
      <div slot="head_input" class="search">
        <div class="search_content">
          <i class="iconfont icon-search"></i><input placeholder="搜索" value="" />
        </div>
      </div>
      <span slot='head_btn' class="head_btn" @click="returnBack">取消</span>
    </head-top>
    <!-- main -->
    <div class="main_wrapper">
      <div class="container" :style="'height:'+wHeight+'px;'">
        <div class="recent">
          <router-link to="/chat" class="item">
            <div class="item_image" style="background-image: url(http://img.pingan.fusio.com.cn/materials/pic/700/20170928180518_0_KcXn.jpg);"></div>
            <div class="item_info">
              <div class="item_info_head">
                <span class="name">万丈-Infinite</span>
                <span class="close">x</span>
              </div>
            </div>
          </router-link>
          <router-link to="/chat" class="item">
            <div class="item_image" style="background-image: url(http://img.pingan.fusio.com.cn/materials/pic/700/20171012184532_0_xTaB.jpg;"></div>
            <div class="item_info last">
              <div class="item_info_head">
                <span class="name">切图者联盟</span>
                <span class="close">x</span>
              </div>
            </div>
          </router-link>
        </div>
        <div class="catg">
          <div class="catg_title">
            <span>网址导航</span>
          </div>
          <div class="catg_row">
            <router-link to="/more" class="catg_item">
              <span>看点</span>
            </router-link>
            <router-link to="/more" class="catg_item">
              <span>好友动态</span>
            </router-link>
            <router-link to="/more" class="catg_item">
              <span>部落</span>
            </router-link>
          </div>
          <div class="catg_row">
            <router-link to="/more" class="catg_item">
              <span>小说</span>
            </router-link>
            <router-link to="/more" class="catg_item">
              <span>头像</span>
            </router-link>
            <router-link to="/more" class="catg_item">
              <span>热搜榜</span>
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
    data() {
      return {
        wHeight: 0,
      }
    },
    mounted() {
      this.wHeight = document.documentElement.clientHeight || document.body.clientHeight;
    },
    methods: {
      returnBack() {
        this.$router.go(-1);
      },
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    background-color: #fff;
  }
  .catg {
    background-color: #fff;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5rem;
    .catg_title {
      padding: 0.8rem 0.5rem 0.5rem;
      color: #999;
      font-size: 0.4rem;
      text-align: center;
      border-top: 1px solid #eee;
    }
    .catg_row {
      width: 100%;
      display: flex;
      .catg_item {
        flex: 1;
        display: flex;
        text-align: center;
        flex-direction: column;
        align-items: center;
        margin: 0.5rem 0;
        span {
          display: block;
          font-size: 0.6rem;
          color: #1890f5;
        }
        &:nth-child(3n+2) {
          border: 1px solid #ccc;
          border-width: 0 1px;
        }
      }
    }
    
  }
  .item {
    display: flex;
    flex-basis: 100%;
    background-color: #fff;
    .item_image {
      display: flex;
      margin: 0.25rem 0.5rem;
      min-width: 1.6rem;
      height: 1.6rem;
      border-radius: 2rem;
      background-size: cover;
      background-position: 50%;
      background-color: #d2d2d2;
      border-bottom: 1px solid transparent;
    }
    .item_info {
      display: flex;
      flex-basis: 100%;
      flex-direction: column;
      padding: 0.25rem 0.5rem 0.25rem 0;
      border-bottom: 1px solid #eee;
      overflow: hidden;
      .item_info_head {
        padding-top: 0.3rem;
        font-size: 0.5rem;
        overflow: hidden;
        color: #999;
        > .name {
          padding-top: 0.4rem;
          color: #666;
          font-size: 0.6rem;
          font-weight: 600;
          line-height: 1rem;
        }
        > .close {
          float: right;
          color: #999;
          font-size: 0.6rem;
          line-height: 1rem;
        }
      }
      &.last {
        border: none;
      }
    }
  }
</style>

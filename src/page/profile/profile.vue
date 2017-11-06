<template>
  <div>
    <!-- head -->
    <head-top :toggleBtn="false" style="background: transparent;">
      <span slot='head_btn' class="head_btn"><i class="iconfont icon-phone"></i></span>
      <span slot='head_back' class="head_back">
        <router-link to="/contacts" class="to"><i class="iconfont icon-fanhui"></i>返回</router-link>
      </span>
    </head-top>
    <!-- main -->
    <div class="main_wrapper">
      <div class="container">
        <div class="top">
          <div class="top_bg">
          </div>
          <div class="top_info">
            <img class="top_image" src="https://cn.bing.com/az/hprichbg/rb/GreatSaltLake_ZH-CN12553220159_1920x1080.jpg"/>
            <p class="top_name">Quinn权-运营-广州</p>
            <p class="top_sign">这雨下得也太大了吧，打伞也照样湿身啊...</p>
          </div>
          <div class="box">
            <div class="box_item">
              <router-link to="">
                <span class="image"><i class="iconfont icon-category"></i></span>
                <span class="name">杺ζ¤笨(887413259)</span>
              </router-link>
            </div>
            <div class="box_item">
              <router-link to="">
                <span class="image"><i class="iconfont icon-category"></i></span>
                <span class="name">男&nbsp;100岁&nbsp;巨蟹座&nbsp;广东-广州</span>
                <span class="right"><i class="iconfont icon-arrow-right"></i></span>
              </router-link>
            </div>
            <div class="box_item">
              <router-link to="">
                <span class="image"><i class="iconfont icon-category"></i></span>
                <span class="name">计算机/互联网/通信</span>
              </router-link>
            </div>
            <div class="box_bb"></div>
            <div class="box_item">
              <router-link to="">
                <span class="image"><i class="iconfont icon-category"></i></span>
                <span class="name">XXX</span>
                <span class="right"><i class="iconfont icon-arrow-right"></i></span>
              </router-link>
            </div>
            <div class="box_item">
              <router-link to="">
                <span class="image"><i class="iconfont icon-category"></i></span>
                <span class="name">XXX</span>
                <span class="right"><i class="iconfont icon-arrow-right"></i></span>
              </router-link>
            </div>
            <div class="box_item">
              <router-link to="">
                <span class="image"><i class="iconfont icon-category"></i></span>
                <span class="name">XXX</span>
                <span class="right"><i class="iconfont icon-arrow-right"></i></span>
              </router-link>
            </div>
            <div class="box_item">
              <router-link to="">
                <span class="image"><i class="iconfont icon-category"></i></span>
                <span class="name">XXX</span>
                <span class="right"><i class="iconfont icon-arrow-right"></i></span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom_info">
        <i class="iconfont icon-phone"></i>&nbsp;
        <span>对方Wi-Fi在线，适合打QQ电话。</span>
      </div>
      <div>
        <span class="bottom_btn">QQ电话</span>
        <router-link to="/chat" class="bottom_btn">发消息</router-link>
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
    background-color: #fff;
    margin-top: -1.95rem;
    margin-bottom: 3.8rem;
  }
  .top {
    position: relative;
    .top_bg{
      width: 100%;
      height: 10rem;
      background-color: #333; 
      background-image: url(https://cn.bing.com/az/hprichbg/rb/CoastalBeech_ZH-CN8739604309_1920x1080.jpg);
      background-position: 50% 50%;
      background-size: cover;
    }
    .top_info {
      margin-top: -3rem;
      padding: 1rem 1.2rem;
      width: 100%;
      text-align: center;
      .top_image {
        width: 3.8rem;
        height: 3.8rem;
        border-radius: 3.8rem;
        border: 0.12rem solid #fff;
      }
      .top_name {
        padding: 0 0 0.4rem 0.4rem;
        vertical-align: top;
        line-height: 1rem;
        font-size: 0.9rem;
        font-weight: 600;
        color: #666;
      }
      .top_sign {
        padding: 0;
        font-size: 0.6rem;
        color: #666;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  .box {
    margin-bottom: 0.5rem;
    padding-top: 0.5rem;
    border-top: 1px solid #eee;
    .box_item {
      padding: 0 0.5rem;
      position: relative;
      background-color: #fff;
      color: #666;
      font-size: 0.5rem;
      line-height: 0.8rem;
      a {
        display: block;
        padding: 0.2rem; 
        .name {
          vertical-align: top;
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
    .box_bb {
      margin: 0.3rem 0 0.3rem 1.6rem;
      border-bottom: 1px solid #eee;
    }
  }
  .bottom {
    position: fixed;
    bottom: 0;
    padding: 0.5rem;
    width: 100%;
    height: 3.8rem;
    background-color: #e3e2e4;
    text-align: center;
    .bottom_info {
      font-size: 0.5rem;
      color: #999;
      margin-bottom: 0.4rem;
    }
    .bottom_btn {
      display: inline-block;
      padding: 0.25rem 0.5rem;
      margin: 0 2%;
      background-color: #fff;
      color: #666;
      width: 44%;
      border-radius: 2px;
      &:nth-child(2) {
        background-color: #1eb9f2;
        color: #fff;
      }
    }
  }
</style>

<template>
  <div>
    <!-- head -->
    <head-top :toggleBtn="false">
      <span slot='head_text' class="head_text">设置</span>
      <span slot='head_back' class="head_back" @click="returnBack">
        <i class="iconfont icon-fanhui"></i>返回
      </span>
    </head-top>
    <!-- main -->
    <div class="main_wrapper">
      <div class="container">
        <div class="box">
          <div class="box_item">
            <router-link to="">
              <span class="name">账号管理</span>
              <span class="right">
                <img class="right_image" src="https://cn.bing.com/az/hprichbg/rb/GreatSaltLake_ZH-CN12553220159_1920x1080.jpg"/>
                <i class="iconfont icon-arrow-right"></i>
              </span>
            </router-link>
          </div>
          <div class="box_item">
            <router-link to="">
              <span class="name">手机号码</span>
              <span class="right">
                <span class="right_text">137*****289</span>
                <i class="iconfont icon-arrow-right"></i>
              </span>
            </router-link>
          </div>
          <div class="box_item">
            <router-link to="">
              <span class="name">QQ达人</span>
              <span class="right"><i class="iconfont icon-arrow-right"></i></span>
            </router-link>
          </div>
        </div>
        <div class="box">
          <div class="box_item">
            <router-link to="">
              <span class="name">消息通知</span>
              <span class="right">
                <i class="iconfont icon-arrow-right"></i>
              </span>
            </router-link>
          </div>
          <div class="box_item">
            <router-link to="">
              <span class="name">聊天记录</span>
              <span class="right"><i class="iconfont icon-arrow-right"></i></span>
            </router-link>
          </div>
          <div class="box_item">
            <router-link to="">
              <span class="name">空间清理</span>
              <span class="right"><i class="iconfont icon-arrow-right"></i></span>
            </router-link>
          </div>
        </div>
        <div class="box">
          <div class="box_item">
            <router-link to="">
              <span class="name">帐号、设备安全</span>
              <span class="right">
                <i class="iconfont icon-arrow-right"></i>
              </span>
            </router-link>
          </div>
          <div class="box_item">
            <router-link to="">
              <span class="name">联系人、隐私</span>
              <span class="right">
                <span class="right_label">NEW</span>
                <i class="iconfont icon-arrow-right"></i>
              </span>
            </router-link>
          </div>
          <div class="box_item">
            <router-link to="">
              <span class="name">辅助功能</span>
              <span class="right"><i class="iconfont icon-arrow-right"></i></span>
            </router-link>
          </div>
        </div>
        <div class="box">
          <div class="box_item">
            <router-link to="">
              <span class="name">免流量特权</span>
              <span class="right">
                <i class="iconfont icon-arrow-right"></i>
              </span>
            </router-link>
          </div>
        </div>
        <div class="box">
          <div class="box_item">
            <router-link to="">
              <span class="name">关于QQ与帮助</span>
              <span class="right">
                <i class="iconfont icon-arrow-right"></i>
              </span>
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
    methods: {
      returnBack() {
        this.$router.go(-1);
      },
    }
  }
</script>

<style lang="scss" scoped>
    .container {
    margin-bottom: 1.95rem;
    background-color: #f5f5f5;
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
          .right_image {
            position: absolute;
            right: 0.8rem;
            top: -0.34rem;
            width: 1.4rem;
            height: 1.4rem;
            border-radius: 1.8rem;
          }
          .right_text {
            font-size: 0.6rem;
            color: #999;
          }
          .right_label {
            font-size: 0.5rem;
            color: #fff;
            padding: 0 0.3rem;
            background-color: #f00;
            border-radius: 2rem;
          }
        }
      }
    }
  }
</style>

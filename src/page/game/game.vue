<template>
  <div>
    <!-- head -->
    <head-top :toggleBtn="false">
      <span slot='head_text' class="head_text">游戏中心</span>
      <span slot='head_btn' class="head_btn"><router-link to="/search"><i class="iconfont icon-search"></i></router-link></span>
      <span slot='head_back' class="head_back">
        <router-link to="/dynamics"><i class="iconfont icon-fanhui"></i>动态</router-link>
      </span>
    </head-top>
    <!-- main -->
    <div class="main_wrapper">
      <div class="container">
        <swiper :options="swiperOption">
          <swiper-slide>
            <div class="scroll">
              <div class="scroll_row">
                <router-link to="" class="scroll_item">
                  <img class="scroll_img" src="../../assets/image/game_top.png"></img>
                  <span class="scroll_name">礼包</span>
                </router-link>
                <router-link to="" class="scroll_item">
                  <img class="scroll_img" src="../../assets/image/game_top2.png"></img>
                  <span class="scroll_name">任务</span>
                </router-link>
                <router-link to="" class="scroll_item">
                  <img class="scroll_img" src="../../assets/image/game_top3.png"></img>
                  <span class="scroll_name">新服</span>
                </router-link>
                <router-link to="" class="scroll_item">
                  <img class="scroll_img" src="../../assets/image/game_top4.png"></img>
                  <span class="scroll_name">活动</span>
                </router-link>
                <router-link to="" class="scroll_item">
                  <img class="scroll_img" src="../../assets/image/game_top5.png"></img>
                  <span class="scroll_name">消息</span>
                </router-link>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="scroll">
              <div class="scroll_row">
                <router-link to="" class="scroll_item">
                  <img class="scroll_img" src="../../assets/image/game_top.png"></img>
                  <span class="scroll_name">礼包</span>
                </router-link>
                <router-link to="" class="scroll_item">
                  <img class="scroll_img" src="../../assets/image/game_top2.png"></img>
                  <span class="scroll_name">任务</span>
                </router-link>
                <router-link to="" class="scroll_item">
                  <img class="scroll_img" src="../../assets/image/game_top3.png"></img>
                  <span class="scroll_name">新服</span>
                </router-link>
                <router-link to="" class="scroll_item">
                  <img class="scroll_img" src="../../assets/image/game_top4.png"></img>
                  <span class="scroll_name">活动</span>
                </router-link>
                <router-link to="" class="scroll_item">
                  <img class="scroll_img" src="../../assets/image/game_top5.png"></img>
                  <span class="scroll_name">消息</span>
                </router-link>
              </div>
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <div class="catg">
          <div class="catg_title">
            <span>热游推荐</span>
          </div>
          <div class="catg_row">
            <router-link to="" class="catg_item">
              <img class="catg_img" src="../../assets/image/game.png"></img>
              <span class="catg_name">欢乐斗地主</span>
              <span class="catg_memo">家喻户晓的斗地主</span>
              <span class="catg_btn">分享</span>
            </router-link>
            <router-link to="" class="catg_item">
              <img class="catg_img" src="../../assets/image/game.png"></img>
              <span class="catg_name">欢乐斗地主</span>
              <span class="catg_memo">家喻户晓的斗地主</span>
              <span class="catg_btn">分享</span>
            </router-link>
            <router-link to="" class="catg_item">
              <img class="catg_img" src="../../assets/image/game.png"></img>
              <span class="catg_name">欢乐斗地主</span>
              <span class="catg_memo">家喻户晓的斗地主</span>
              <span class="catg_btn">分享</span>
            </router-link>
          </div>
          <div class="catg_row">
            <router-link to="" class="catg_item">
              <img class="catg_img" src="../../assets/image/game.png"></img>
              <span class="catg_name">欢乐斗地主</span>
              <span class="catg_memo">家喻户晓的斗地主</span>
              <span class="catg_btn">分享</span>
            </router-link>
            <router-link to="" class="catg_item">
              <img class="catg_img" src="../../assets/image/game.png"></img>
              <span class="catg_name">欢乐斗地主</span>
              <span class="catg_memo">家喻户晓的斗地主</span>
              <span class="catg_btn">分享</span>
            </router-link>
            <router-link to="" class="catg_item">
              <img class="catg_img" src="../../assets/image/game.png"></img>
              <span class="catg_name">欢乐斗地主</span>
              <span class="catg_memo">家喻户晓的斗地主</span>
              <span class="catg_btn">分享</span>
            </router-link>
          </div>
          <div class="catg_row">
            <router-link to="" class="catg_item">
              <img class="catg_img" src="../../assets/image/game.png"></img>
              <span class="catg_name">欢乐斗地主</span>
              <span class="catg_memo">家喻户晓的斗地主</span>
              <span class="catg_btn">分享</span>
            </router-link>
            <router-link to="" class="catg_item">
              <img class="catg_img" src="../../assets/image/game.png"></img>
              <span class="catg_name">欢乐斗地主</span>
              <span class="catg_memo">家喻户晓的斗地主</span>
              <span class="catg_btn">分享</span>
            </router-link>
            <router-link to="" class="catg_item">
              <img class="catg_img" src="../../assets/image/game.png"></img>
              <span class="catg_name">欢乐斗地主</span>
              <span class="catg_memo">家喻户晓的斗地主</span>
              <span class="catg_btn">分享</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- page-footer -->
    <div class='footer'>
      <span class="footer_menu" :class="{active:(activeIndex==0)}" @click="handleFooter(0)">
        <span>游戏</span>
      </span>
      <span class="footer_menu" :class="{active:(activeIndex==1)}" @click="handleFooter(1)">
        <span>直播</span>
      </span>
      <span class="footer_menu" :class="{active:(activeIndex==2)}" @click="handleFooter(2)">
        <span>赛事</span>
      </span>
      <span class="footer_menu" :class="{active:(activeIndex==3)}" @click="handleFooter(3)">
        <span>电竞圈</span>
      </span>
    </div>
  </div>
</template>

<script>
  import headTop from '@/components/header/head'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    components: {
      headTop,
      swiper,
      swiperSlide
    },
    data() {
      return {
        activeIndex: 0,
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationClickable: true
        }
      }
    },
    methods: {
      handleFooter(value){
        this.activeIndex = value;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    margin-bottom: 1.95rem;
    background-color: #f5f5f5;
  }
  .scroll {
    background-color: #fff;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5rem;
    .scroll_row {
      width: 100%;
      display: flex;
      .scroll_item {
        flex: 1;
        display: flex;
        text-align: center;
        flex-direction: column;
        align-items: center;
        margin: 0.5rem 0;
        color: #666;
        .scroll_img {
          width: 1.92rem;
          height: 1.6rem;
        }
        .scroll_name {
          display: block;
          margin: 0.3rem 0 0.1rem;
          font-size: 0.6rem;
        }
      }
    }
  }
  .catg {
    background-color: #fff;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5rem;
    .catg_title {
      padding: 0.8rem 0.5rem 0.5rem;
      color: #666;
      font-size: 0.7rem;
      font-weight: 600;
      letter-spacing: 0.2rem;
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
        color: #666;
        .catg_img {
          width: 2.4rem;
          height: 2.4rem;
        }
        .catg_name {
          display: block;
          margin: 0.3rem 0 0.1rem;
          font-size: 0.6rem;
        }
        .catg_memo {
          font-size: 0.4rem;
          margin: 0.1rem 0 0.3rem;
          color: #999;
        }
        .catg_btn {
          font-size: 0.5rem;
          padding: 0.1rem 0.5rem;
          border: 1px solid #eee;
          border-radius: 2px;
        }
      }
    }
  }
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
      border-bottom: 0.2rem solid transparent;
      span {
        display: block;
        font-size: 0.5rem;
        line-height: 1.95rem;
        color: #666;
      }
      &.active {
        border-color: #12b7f5;
        span {
          color: #12b7f5;
        }
      }
    }
  }
</style>

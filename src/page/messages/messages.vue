<template>
  <div>
    <!-- head -->
    <head-top>
      <span slot='head_text' class="head_text">消息</span>
      <span slot='head_btn' class="head_btn" @click="handleHeadBtn"><i class="iconfont icon-tianjia"></i></span>
    </head-top>
    <!-- main -->
    <div class="main_wrapper">
      <div class="container" v-load-more="loaderMore">
        <search-bar></search-bar>
        <router-link to="/chat" class="item" v-for="(item, index) in data" :key="index">
          <div class="item_image" :style="'background-image: url('+item.image+');'"></div>
          <div class="item_info">
            <div class="item_info_head">
              <span class="name">{{item.name}}</span>
              <span class="time">{{item.time}}</span>
            </div>
            <div class="item_info_content"><span>{{item.type}}</span>&nbsp;{{item.content}}</div>
          </div>
        </router-link>
        <transition name="loading">
          <div style="background-color: #fff; padding: 0.5rem; text-align: center; color: #999;" v-show="showLoading">Loading...</div>
        </transition>
      </div>
    </div>
    <!-- footer -->
    <foot-menu :activeIndex="0"></foot-menu>
  </div>
</template>

<script>
  import headTop from '@/components/header/head'
  import footMenu from '@/components/footer/footer'  
  import searchBar from '@/components/common/searchBar'  
	import {loadMore} from '@/components/common/mixin'
  import {scrollPosition} from '@/utils/utils'
  
	export default {
    components: {
      headTop,
      footMenu,
      searchBar
    },
		data () {
      return {
        data:[], // 列表数据
        preventRepeatReuqest: false, //到达底部加载数据，防止重复加载
        showBackStatus: false, //显示返回顶部按钮
        showLoading: true, //显示加载动画
        touchend: false, //没有更多数据
      }
    },
    mixins: [loadMore],
    mounted(){
      this.initData();
      // 滚动到上一次位置
      scrollPosition(this.$store.getters.scroll);
    },
    methods: {
      handleHeadBtn() {
        console.log('####');
      },
      async initData(){
      	// 判断之前是否请求过数据
        if (this.$store.getters.messages.length == 0) {
        	// 请求数据
          this.$store.dispatch('GetMessagesList').then(() => {
            this.data = this.$store.getters.messages;
          }).catch(err => {
            console.log('error:'+err);
          });
          this.hideLoading();
        } else {
        	// 直接取之前的数据
          this.data = this.$store.getters.messages;
          this.hideLoading();
        }
      },

      async loaderMore(){
        if (this.touchend) {
          return
        }
        //防止重复请求
        if (this.preventRepeatReuqest) {
          return 
        }
        this.showLoading = true;
        this.preventRepeatReuqest = true;

        // 触发加载更多
        this.$store.dispatch('GetMessagesList').then(() => {
          this.data = this.$store.getters.messages;
        }).catch(err => {
          console.log('error:'+err);
        });

        this.hideLoading();
        this.preventRepeatReuqest = false;
      },

      hideLoading(){
        this.showLoading = false;
      },

    },
	}
</script>

<style lang="scss" scoped>
	.container {
    margin-bottom: 1.95rem;
    background-color: #f5f5f5;
  }
  .item {
    display: flex;
    flex-basis: 100%;
    background-color: #fff;
    .item_image {
      display: flex;
      margin: 0.25rem 0.5rem;
      min-width: 2rem;
      height: 2rem;
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
        padding-top: 0.2rem;
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
        > .time {
          float: right;
          color: #999;
          font-size: 0.5rem;
          line-height: 1rem;
        }
      }
      .item_info_content {
        font-size: 0.5rem;
        line-height: 1.4;
        color: #666;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        span {
          color: #f2a73b;
        }
      }
    }
  }
  
</style>
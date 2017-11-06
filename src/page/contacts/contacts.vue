<template>
  <div>
    <!-- head -->
    <head-top>
      <span slot='head_text' class="head_text">联系人</span>
      <span slot='head_btn' class="head_btn"><router-link to="/add">添加</router-link></span>
    </head-top>
    <!-- main -->
    <div class="main_wrapper">
      <div class="container">
        <search-bar></search-bar>
        <div class="new_friend">
          <router-link to="/add">
            新朋友
            <span style="position: absolute; right: 0.5rem;"><i class="iconfont icon-arrow-right"></i></span>
          </router-link>
        </div>
        <div class="tab">
          <span class="tab_item" :class="{active:tabActive==0}" @click="handleChangeTab(0)">好友</span>
          <span class="tab_item" :class="{active:tabActive==1}" @click="handleChangeTab(1)">群</span>
          <span class="tab_item" :class="{active:tabActive==2}" @click="handleChangeTab(2)">多人聊天</span>
          <span class="tab_item" :class="{active:tabActive==3}" @click="handleChangeTab(3)">设备</span>
          <span class="tab_item" :class="{active:tabActive==4}" @click="handleChangeTab(4)">通讯录</span>
          <span class="tab_item" :class="{active:tabActive==5}" @click="handleChangeTab(5)">公众号</span>
        </div>
        <div class="group clearfix" v-for="(group, index) in data" :key="index">
          <div class="group_catg" @click="handleToggleGroupList(index)">
            <i class="iconfont" :class="group.closed?'icon-arrow-right':'icon-arrow-down'"></i>
            <span class="name">{{group.name}}</span>
            <span class="nums">{{group.online}}/{{group.total}}</span>
          </div>
          <div class="group_list" :class="{hide:group.closed}">
            <router-link to="/profile" class="item" v-for="(item, index) in group.list" :key="index">
              <div class="item_image" :style="'background-image: url('+item.image+');'"></div>
              <div class="item_info" :class="{last:index==(group.list.length-1)}">
                <div class="item_info_head">
                  <span class="name">{{item.name}}</span>
                </div>
                <div class="item_info_content"><span>{{item.type}}</span>&nbsp;{{item.content}}</div>
              </div>
            </router-link>
          </div>
        </div>
        <transition name="loading">
          <div style="background-color: #fff; padding: 0.5rem; text-align: center; color: #999;" v-show="showLoading">Loading...</div>
        </transition>
      </div>
    </div>
    <!-- footer -->
    <foot-menu :activeIndex="1"></foot-menu>
  </div>
</template>

<script>
  import headTop from '@/components/header/head'
  import footMenu from '@/components/footer/footer'  
  import searchBar from '@/components/common/searchBar' 
  import {scrollPosition} from '@/utils/utils'
  export default {
    components: {
      headTop,
      footMenu,
      searchBar,
    },
    data () {
      return {
        data:[], // 列表数据
        tabActive: 0, // 当前激活的tab
        showLoading: true, //显示加载动画
      }
    },
    mounted(){
      this.initData();
    },
    methods: {
      async initData(){
        // 判断之前是否请求过数据
        if (this.$store.getters.contacts.length == 0) {
          // 请求数据
          this.$store.dispatch('GetContactsList').then(() => {
            this.data = this.$store.getters.contacts;
          }).catch(err => {
            console.log('error:'+err);
          });
          this.hideLoading();
        } else {
          // 直接取之前的数据
          this.data = this.$store.getters.contacts;
          this.hideLoading();
        }
      },
      handleChangeTab(value){
        this.tabActive = value;
      },
      handleToggleGroupList(index){
        this.data[index].closed = !this.data[index].closed;
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
  .new_friend {
    position: relative;
    background-color: #fff;
    border: 1px solid #eee;
    border-width: 1px 0; 
    margin-bottom: 0.5rem;
    color: #666;
    a {
      display: block;
      padding: 0.5rem; 
      span {
        position: absolute;
        right: 0.5rem;
        .iconfont {
          color: #666;
          font-size: 0.6rem;
        }
      }
    }
  }
  .tab {
    background-color: #fff;
    border: 1px solid #eee;
    border-width: 1px 0; 
    overflow-x: auto;
    overflow-y: hidden;
    width: 140%;
    height: 1.85rem;
    .tab_item {
      display: inline-block;
      padding: 0.5rem 0;
      margin: 0 0.5rem;
      color: #666;
      &.active {
        color: #61b8f8;
      }
    }
  }
  .group {
    background-color: #fff;
    .group_catg {
      position: relative;
      padding: 0.3rem 0.5rem;
      line-height: 1rem;
      .iconfont {
        color: #999;
        font-size: 0.6rem;
        margin-right: 0.3rem;
      }
      .name {
        color: #666;
        font-size: 0.6rem;
        font-weight: 600;
      }
      .nums {
        position: absolute;
        right: 0.5rem;
        color: #999;
        font-size: 0.4rem;
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
      &.last {
        border: none;
      }
    }
  }

</style>

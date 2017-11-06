<template>
  <div>
    <!-- head -->
    <head-top :toggleBtn="false">
      <span slot='head_text' class="head_text">添加</span>
      <span slot='head_back' class="head_back">
        <router-link to="/contacts"><i class="iconfont icon-fanhui"></i>联系人</router-link>
      </span>
    </head-top>
    <!-- main -->
    <div class="main_wrapper">
      <div class="container">
        <div class="share">
          <div class="share_title">分享测试：</div>
          <share :config="config"></share>
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
        config: {
          // url                 : '', // 网址，默认使用 window.location.href
          // source              : '', // 来源（QQ空间会用到）, 默认读取head标签：<meta name="site" content="http://overtrue" />
          // title               : '', // 标题，默认读取 document.title 或者 <meta name="title" content="share.js" />
          // description         : '', // 描述, 默认读取head标签：<meta name="description" content="PHP弱类型的实现原理分析" />
          // image               : '', // 图片, 默认取网页中第一个img标签
          sites               : ['qzone', 'qq', 'weibo', 'wechat', 'douban'], // 启用的站点
          // disabled            : ['google', 'facebook', 'twitter'], // 禁用的站点
          wechatQrcodeTitle   : '微信扫一扫：分享', // 微信二维码提示文字
          wechatQrcodeHelper  : '<p>微信里点“发现”，扫一下</p><p>二维码便可将本文分享至朋友圈。</p>'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
  }
  .share {
    padding: 10rem 1rem;
    .share_title {
      padding: 0.2rem 0;
    }
  }
</style>

<template>
  <div class="navbar">
    <div class="top">
      <div class="top_info">
        <img class="top_image" src="https://cn.bing.com/az/hprichbg/rb/GreatSaltLake_ZH-CN12553220159_1920x1080.jpg"/>
        <p class="top_name">Season</p>
        <p class="top_sign">太多曾沾沾自喜誓必珍惜的情谊，败给了时光的腐朽，败给了自以为是的长久</p>
      </div>
    </div>
    <div class="menu">
      <ul>
        <li>
          <i class="iconfont icon-category"></i>我的超级会员
        </li>
        <li>
          <i class="iconfont icon-category"></i>QQ钱包
        </li>
        <li>
          <i class="iconfont icon-category"></i>个性装扮
        </li>
        <li>
          <i class="iconfont icon-category"></i>我的收藏
        </li>
        <li>
          <i class="iconfont icon-category"></i>我的相册
        </li>
        <li>
          <i class="iconfont icon-category"></i>我的文件
        </li>
      </ul>
    </div>
    <div class="tool">
      <a href="javascript:;">
        <i class="iconfont icon-category"></i>设置
      </a>
      <a href="javascript:;">
        <i class="iconfont icon-category"></i>夜间
      </a>
    </div>
  </div>
</template>

<script>
	export default {
	  data() {
	    return {

	    }
	  },
	}
</script>
<style lang="scss" scoped>
  .navbar {
  	position: fixed; 
  	top: 0;
    bottom: 0;
    left: 0;
  	height: 100%; 
  	color: #999; 
  	z-index: 110;
  	background-color: #fff;
    i {
      margin-right: 0.5rem;
    }
    .top {
      position: relative;
      width: 100%;
      height: 40%;
      background-color: #333; 
      background-image: url(https://cn.bing.com/az/hprichbg/rb/CoastalBeech_ZH-CN8739604309_1920x1080.jpg);
      background-position: 50% 50%;
      background-size: cover;
      .top_info {
        position: absolute;
        left: 0;
        bottom: 0;
        padding: 0 1.2rem 1rem;
        width: 100%;
        text-align: center;
        .top_image {
          width: 2.8rem;
          height: 2.8rem;
          border-radius: 1.8rem;
          border: 0.12rem solid #fff;
        }
        .top_name {
          padding: 0 0 0.4rem 0.4rem;
          vertical-align: top;
          line-height: 1.2rem;
          font-size: 1.2rem;
          font-weight: 600;
          color: #fff;
        }
        .top_sign {
          padding: 0.2rem 0;
          font-size: 0.6rem;
          color: #fff;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
    .menu {
      width: 100%;
      height: 60%;
      padding: 0.8rem 0 2rem 0;
      ul {
        padding: 0 0.8rem;
        li {
          height: 1.85rem;
          line-height: 1.85rem;
        }
      }
    }
    .tool {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      background-color: #fff;
      line-height: 2rem;
      a {
        display: inline-block;
        padding: 0 0.8rem;
      }
    }
  }
</style>

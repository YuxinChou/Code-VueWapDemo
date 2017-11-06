<template>
  <div class="search" @click="handleClick">
    <div class="search_content">
      <i class="iconfont icon-search"></i>&nbsp;搜索
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      handleClick() {
        this.$router.push({ path: '/search' });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .search {
    padding: 0.5rem;
    background-color: #fff;
    .search_content {
      text-align: center;
      font-size: 0.5rem;
      line-height: 2;
      border-radius: 0.1rem;
      color: #999;
      background-color: #eee;
      i {
        font-size: 0.5rem;
        color: #999;
      }
    }
  }
</style>

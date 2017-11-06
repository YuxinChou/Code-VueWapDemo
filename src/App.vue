<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="router-fade" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
    <!--所有用到的svg可以丢这里-->
    <svg-icon></svg-icon>
  </div>
</template>

<script>
  import svgIcon from '@/components/common/svg'
  export default {
    name: 'app',
    components: {
      svgIcon
    },
  }
</script>

<style lang="scss">
	.router-fade-enter-active,
	.router-fade-leave-active {
	  transition: opacity 0.5s;
	}

	.router-fade-enter,
	.router-fade-leave-to {
	  opacity: 0;
  }
</style>


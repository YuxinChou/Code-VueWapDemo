<template>
  <div class="app_wrapper" :class="{hideSidebar:sidebar}">
    <!-- head -->
    <head-top @toggleSideBar="toggleSideBar"></head-top>
    <!-- sidebar -->
    <navbar></navbar>
    <!-- main -->
    <div class="main_wrapper">
      <router-view></router-view>
    </div>
    <!-- footer -->
    <foot-menu></foot-menu>
    <!-- backToTop -->
    <back-to-top></back-to-top>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import headTop from './header/head'
  import navbar from './navbar/navbar'
  import footMenu from './footer/footer'
  import backToTop from './common/backToTop'
  export default {
    components: {
      headTop,
      navbar,
      footMenu,
      backToTop
    },
    
    computed: {
      ...mapGetters([
        'sidebar',
      ])
    },
    methods: {
      toggleSideBar() {
        // this.sidebar = !this.sidebar;
        // console.log("sidebar value: " + this.sidebar);
        this.$store.dispatch('ToggleSideBar')
      },
    },
    mounted() {
      window.onscroll = () => {
        this.$store.dispatch('SetScroll');
      };
    }
  }
</script>

<style lang="scss" scoped>
  /*layout*/
  .app_wrapper {
    overflow-x: hidden;
    .header {
      transition: all .28s ease-out;
  		z-index: 200;
    }
    .navbar {
      width: 100%;
      transition: all .28s ease-out;
      transform: translateY(0);
    }
    /*main_wrapper*/
    .main_wrapper {
      padding-top: 1.95rem;
      transition: all .28s ease-out;
    }

    &.hideSidebar {
      .navbar {
        transform: translateY(-100%);
      }
    }
    

  }
</style>

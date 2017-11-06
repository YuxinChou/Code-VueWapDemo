<template>
  <div class="app_wrapper" :class="{hideSidebar:sidebar}">
    <!-- main -->
    <router-view></router-view>
    <!-- sidebar -->
    <sidebar></sidebar>
    <!-- masking -->
    <masking></masking>
    <!-- backToTop -->
    <back-to-top></back-to-top>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import sidebar from './sidebar/sidebar'
  import masking from './masking/masking'
  import backToTop from './common/backToTop'
  
  export default {
    components: {
      sidebar,
      masking,
      backToTop,
    },
    
    computed: {
      ...mapGetters([
        'sidebar',
      ])
    },
    mounted() {
      window.onscroll = () => {
        this.$store.dispatch('SetScroll');
      };
    }
  }
</script>

<style lang="scss">
  /*layout*/
  .app_wrapper {
    overflow-x: hidden;
    .header {
      transition: all .28s ease-out;
      transform: translateX(13rem);
    }
    .sidebar {
      width: 13rem;
      transition: all .28s ease-out;
      transform: translate(0);
    }
    /*main_wrapper*/
    .main_wrapper {
      padding-top: 1.95rem;
      transition: all .28s ease-out;
      transform: translateX(13rem);
    }
    .footer {
      transition: all .28s ease-out;
      transform: translateX(13rem);
    }

    &.hideSidebar {
      .header {
        transform: translateX(0);
      }
      .sidebar {
        transform: translateX(-13rem);
      }
      .masking {
        display: none;
      }
      .main_wrapper {
        transform: translateX(0);
      }
      .footer {
        transform: translateX(0);
      }
    }
    

  }
</style>

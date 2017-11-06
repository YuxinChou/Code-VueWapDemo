<template>
  <div class="container">
    <p class="title">
      <span>目的：查看各函数调用情况</span>
      <a class="btn_load_more" @click="onceClick">点击一次</a>
    </p>
    <div v-if="data.length>0" class="item" v-for="(item, index) in data" tag='li' :key="index">
        <span>{{index}}</span>{{item}}
    </div>
    <div v-if="showTip" class="item">(hello world)</div>
  </div>
</template>

<script>
  export default {

    // 页面不会有，但是组件可能会有，主要用于传数据
    // props:{
    //   status: {
    //     type: Number,
    //     default: 0
    //   }
    // },

    // 监视页面某一个值的变化，由它变化可以导致其他变化
    // watch:{
    //   status(val) {
    //     if(val == 1) {
    //           this.value = 'aaaa';
    //     } else {
    //           this.value = 'bbbb';
    //     }
    //   }
    // },

    // 引入组件
    // components: {
    //   AddDialog,    // 组件1
    //   ContainerFooter    // 组件2
    // },

    // 定义页面变量
    data() {
      return {
        data: [],
        showTip: false
      }
    },

    // 在页面进入之前，要执行的一些操作放在这里，比如请求数据
    beforeRouteEnter (to, from, next) {
      // getActData(params).then(response => {
      //   // 拿回结果后才next()
      //   // ...
      //   next(vm => {
      //     // 赋值
      //     // ...
      //   });
      // }).catch(err => {
      //   // 处理
      //   // ...
      // });
      console.log('进入方法：beforeRouteEnter');
      next(vm => {
        vm.data.push('进入方法：beforeRouteEnter');
        console.log('离开方法：beforeRouteEnter');
        vm.data.push('离开方法：beforeRouteEnter');
      });
    },

    // 在页面创建后执行的操作，有些请求也可以放这里(挂载前)
    created() {
      console.log('触发方法：created');
      this.data.push('触发方法：created');
    },

    // 比如我根据某个变量做的不同显示、判断，都可以变成一个方法放这里，以便调用
    computed: {
      confirmText() {
        return this.edit?'立即修改':'立即创建';
      },
    },

    // 过滤器，用来将一些值格式化输出显示
    filters: {
      toDateShort(val) {
        return val.substring(0,11);
      }
    },

    // 被挂载之后调用
    mounted() {
      console.log('触发方法：mounted');
      this.data.push('触发方法：mounted');
    },

    // 整个页面调用的方法，click事件、change事件都在这里
    methods: {
      onceClick() {
        console.log('触发方法：onceClick');
        this.data.push('触发方法：onceClick');
        this.data.push('触发方法：updated');
        // this.showTip = !this.showTip; 
      }
    },

    // 页面数据更新就会触发
    updated() {
      // this.data.push('触发方法：updated');
      console.log('触发方法：updated');
    },

    // 被销毁的时候
    destroyed() {
      console.log('触发方法：destroyed');
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    padding: 1rem;
    background-color: #fff !important;
  }
  .title {
    color: #666;
    line-height: 1.4rem;
  }
  .item {
    margin-top: 0.4rem;
    span {
      display: inline-block;
      padding: 0 0.6rem;
      margin-right: 0.5rem;
      min-width: 1.6rem;
      background-color: #999;
      border-radius: 0.5rem;
    }
  }
  .btn_load_more {
    display: inline-block;
    float: right;
    padding: 0 0.3rem;
    line-height: 1.2rem;
    border: 1px solid #3190e8;
    border-radius: 4px;
    color: #3190e8;
  }
</style>

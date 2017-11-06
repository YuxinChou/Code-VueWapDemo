<template>
  <div v-show="visible" id="back_top" @click="backTop">
    <i class="iconfont icon-totop"></i>
  </div>
</template>
<script>
  export default {
    props: {
      scrollHeight: {
        type: Number,
        default: 100
      },
      timeSpan: {
        type: Number,
        default: 200
      }
    },
    data() {
      return {
        wHeight: 0,
        visible: false,
        ret: 0,
        obj: null,
        speed: 0,
        times: 0,
        time: 0,
      }
    },
    mounted () {
      window.addEventListener('scroll',this.hasScroll);
    },
    methods: {
      hasScroll(){
        const scrollTop = this.getScroll(window);
        this.visible = scrollTop > this.scrollHeight;
      },
      getScroll(w){
        this.ret = w.pageYOffset
        const method = 'scrollTop'
        if(typeof this.ret !== 'number'){
          let d= w.document;
          this.ret = d.documentElemelnt[method]
          if(typeof this.ret !== 'number'){
            this.ret = d.body[method]
          }
        }
        return this.ret
      },
      backTop(){
        const initerval = 30
        let num = this.timeSpan/initerval
        this.time = 0
        this.times = num;
        this.speed = this.ret / num
        this.obj = setInterval(this.setScroll,initerval)
      },
      setScroll(){
        if(this.time > this.times || this.ret<=0){
          clearInterval(this.obj)
          return
        }
        this.time++
        this.ret -= this.speed
        if(this.ret<0) {
          this.ret = 0;
        }
        document.documentElement.scrollTop = document.body.scrollTop = this.ret
      }
    },
  }
</script>

<style lang="scss" scoped>
  #back_top {
    position: fixed; 
    bottom: 10%; 
    right: 1rem;
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 1.6rem;
    line-height: 1.6rem;
    text-align: center;
    background-color: rgba(49, 49, 49, 0.23);
    i {
      color: #666;
    }
  }
</style>

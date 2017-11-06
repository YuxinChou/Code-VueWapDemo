<template>
  <div class="container" :style="'height:'+wHeight+'px;'">
    <div class="logo">
      <svg class="qq">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#qq"></use>
      </svg>
    </div>
    <form class="login_form">
      <section class="input_container">
        <input type="text" placeholder="邮箱" autocomplete="off" v-model.lazy="userAccount">
      </section>
      <section class="input_container">
        <input v-if="!showPassword" type="password" placeholder="密码" autocomplete="off" v-model="passWord">
        <input v-else type="text" placeholder="密码" v-model="passWord">
        <div class="btn_switch" :class="{change_to_text: showPassword}">
          <div class="btn_switch_circel" :class="{trans_to_right: showPassword}" @click="changePassWordType"></div>
          <span>abc</span>&nbsp;
          <span>***</span>
        </div>

      </section>
    </form>
    <div class="btn_block" @click="loginSubmit">注册</div>
    <div class="login_to clear">
      <router-link class="left" to="/login">已有账号？立即登录</router-link>
      <router-link class="right" to="/forget">忘记密码</router-link>
    </div>
    <alert-tip v-if="showAlert" :showHide="showAlert" @closeTip="closeTip" :alertText="alertText"></alert-tip>
  </div>
</template>

<script>
  import alertTip from '@/components/common/alertTip'
  import {accountLogin} from '@/service/getData'
  import { mapMutations } from 'vuex'

  export default {
    data() {
      return {
        wHeight: 0,
        userAccount: "admin@fusio.com.cn",
        passWord: "123456",
        showPassword: false,
        showAlert: false,
        alertText: "",
      }
    },
    components: {
      alertTip,
    },
    mounted() {
      this.wHeight = document.documentElement.clientHeight || document.body.clientHeight;
    },
    methods: {
      ...mapMutations([
        'GET_HOME_LIST',
      ]),
      changePassWordType() {
        this.showPassword = !this.showPassword;
      },
      async loginSubmit() {
        if (!this.userAccount) {
          this.showAlert = true;
          this.alertText = '请输入手机号/邮箱/用户名';
          return
        }else if(!this.passWord){
          this.showAlert = true;
          this.alertText = '请输入密码';
          return
        }
        //用户名登录
        console.log(this.userAccount);
        console.log(this.passWord);
        
        let response = await accountLogin(this.userAccount, this.passWord);
        console.log("loginSubmit");
        console.log(JSON.stringify(response));

        //如果返回的值不正确，则弹出提示框，返回的值正确则返回上一页
        if (response.retCode!="10000") {
          this.showAlert = true;
          this.alertText = response;
        }else{
          // 缓存用户数据

          // 下面都是测试来的，
          // 还没有在store中添加对应的保存用户信息方法

          // 第一种方法
          // console.log('#####1111');
          // this.GET_HOME_LIST(
          //   {
          //     image: "http://img.pingan.fusio.com.cn/materials/pic/700/20170928180518_0_KcXn.jpg",
          //     title: "xxxxxxxx",
          //     catg: "职场",
          //     tags: "心理 职场"
          //   }
          // );

          // 第二种方法
          // console.log('#####2222');
          // this.$store.commit('GET_HOME_LIST',[
          //   {
          //     image: "http://img.pingan.fusio.com.cn/materials/pic/700/20170928180518_0_KcXn.jpg",
          //     title: "aaaaaa",
          //     catg: "职场",
          //     tags: "心理 职场"
          //   }
          // ]);
          
          // 返回前一页
          // this.$router.go(-1);
          // 跳转某一页
          this.$router.push({ path: '/messages' });
        }

      },
      closeTip() {
        this.showAlert = false;
      },
    }
  }

</script>


<style lang="scss" scoped>
.container {
  padding: 1rem;
  height: 100%;
  text-align: center;
  background-color: #a4e3ff;
  .logo {
    padding: 2rem 1rem 1rem;
    span {
      font-size: 1.4rem;
    }
  }
  .login_form {
    .input_container{
      display: flex;
      justify-content: space-between;
      padding: .6rem .8rem;
      background-color: #fff;
      border-bottom: 1px solid #f1f1f1;
      input{
        font-size: 0.7rem;
        color: #666;
      }
      button{
        font-size: 0.65rem;
        color: #fff;
        font-family: Helvetica Neue,Tahoma,Arial;
        padding: .28rem .4rem;
        border: 1px;
        border-radius: 0.15rem;
      }
      .right_phone_number{
        background-color: #4cd964;
      }
    }
  }
  .btn_switch{
    background-color: #ccc;
    display: flex;
    justify-content: center;
    width: 2.1rem;
    height: 1rem;
    padding: 0 0.2rem;
    border: 1px;
    border-radius: 0.5rem;
    position: relative;
    .btn_switch_circel{
      transition: all .3s;
      position: absolute;
      top: -0.1rem;
      left: -0.2rem;
      z-index: 1;
      width: 1.24rem;
      height: 1.24rem;
      box-shadow: 0 0.03rem 0.05rem 0 rgba(0,0,0,.1);
      background-color: #5cacf9;
      border-radius: 50%;
      cursor: pointer;
    }
    .trans_to_right{
      transform: translateX(1.4rem);
    }
    span{
      font-size: 0.4rem;
      line-height: 1rem;
      color: #fff;
    }
    span:nth-of-type(2){
      transform: translateY(0.08rem);
    }
  }
  .btn_block {
    margin: 1rem 0;
    padding: 0.5rem 0;
    font-size: 0.7rem;
    color: #fff;
    background-color: #4eaaff;
    border: 1px;
    border-radius: 0.15rem;
    text-align: center;
  }
  .login_to {
    a {
      color: #666;
    }
  }
}

</style>

<template>
  <div class="container" :style="'height:'+wHeight+'px;'">
    <div class="logo">
      <svg class="qq">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#qq"></use>
      </svg>
    </div>
    <form class="login_form">
      <section class="input_container">
        <input type="text" placeholder="请输入您的邮箱地址" autocomplete="off" v-model.lazy="userAccount">
      </section>
    </form>
    <div class="btn_block" @click="loginSubmit">立即找回</div>
    <div class="login_to clear">
      <router-link class="right" to="/login">返回登录</router-link>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      wHeight: 0,
      userAccount: null,
      passWord: null,
      showPassword: false
    }
  },
  mounted() {
    this.wHeight = document.documentElement.clientHeight || document.body.clientHeight;
  },
  methods: {
    changePassWordType() {
      this.showPassword = !this.showPassword;
    },
    loginSubmit() {
      console.log("loginSubmit");
    }
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

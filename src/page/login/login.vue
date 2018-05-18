<template>
  <div class="loginContainer">
    <!--<head-top :head-title="loginWay?'登录':'密码登录'">-->
    <!--</head-top>-->
    <section class="head_goBack" @click="$router.go(-1)">
      //icon or img or somethings else to click
      <img class="goBackIcon" src="../../src/images/icon_back.png"/>
    </section>
    <!-- Form 1 if the user use account number and pwd login-->
    <form class="loginForm" v-if="loginWay">
      <section class="input_container phone_number">
        <input type="text" placeholder="请输入手机号" name="phone" maxlength="11" v-model="phoneNumber">
        <button @click.prevent="getAuthenticationCode" :class="{right_phone_number:rightPhoneNumber}" v-show="!computedTime">获取验证码</button>
        <button @click.prevent v-show="computedTime">已发送({{computedTime}}s)</button>
      </section>
      <section class="input_container">
        <input type="text" placeholder="请输入验证码" name="verifyCode" maxlength="6" v-model="verifyCode">
      </section>
    </form>

    <!-- Form 2 if the user use -->
    <form class="loginForm" v-else>
      <section class="input_container">
        <input type="text" placeholder="账号" v-model.lazy="accountName">
      </section>
      <section class="input_container">
        <input v-if="!showPassword" type="password" placeholder="密码" v-model="password">
        <input type="text" placeholder="密码" v-model="password">
        <div class="switch_bar" :class="{show_up:showUp}" >

        </div>
      </section>
    </form>
    <div class="login_container" @click="login">登录</div>
    <!--TODO if fail to login-->
    <alter-tip v-if="showAlert" :showHide="showAlert" @closeTip="closeTip" :alertMessage="alertMessage"></alter-tip>
  </div>
</template>

<script>
    //import headTop from '../../components/header/header'
    //import alterTip from '../../components/alter/alterTip'
    //import {verifyCode,checkRegist,accountLogin} from '../../service/getData'

    export default {
        name: "login.vue",
        data(){
          return{
            loginWay:false,
            phoneNumber:null,
            computedTime:0,
            authCode:null,
            validated_token:null,
            accountName:null,
            showPassword:false,
            password:null,
            showAlert:false,
            alterMessage:null,
            userInfo:null


          }
        },

    components:{
      //headTop,
      alterTip
    },

    computed:{
      //validate the phone number
      validatePhoneNumber:function(){
        return /^1\d{10}$/gi.test(this.phoneNumber)
      },

      validateAuthCode: function(){
        return /^1\d{6}$/gi.test(this.authCode)
      }
    },

    methods: {

      //user change the login way
      changeLoginWay() {
        this.loginWay = !this.loginWay;
      },

      //show or hidden the password
      showOrHiddenPassword() {
        this.showPassword = !this.showPassword;
      },

      //
      async login() {
        if (this.loginWay) {
          if (!this.validatePhoneNumber) {
            this.showAlert = true;
            this.alterMessage = "手机号码不正确，请重新输入！";
            return
          }
          else if (!this.validateAuthCode) {
            this.showAlert = true;
            this.alterMessage = "短信验证码有误！";
            return
          }
          //login
          this.userInfo = await
          accountLogin(this.accountName, this.phoneNumber.this.authCode)
        }

      },
      //send the message authentication code by server
      async getAuthenticationCode() {

        if (this.validatePhoneNumber) {
          this.computedTime = 60;
          this.timer = setInterval(() => {
            this.computedTime--;
            if (this.computedTime === 0) {
              clearInterval(this.timer)
            }
          }, 1000)

          //check that the user has been registered using this validation
          let registedUser = await
          checkRegist(this.phoneNumber, 'mobile');
          if (registedUser.message) {
            this.showAlert = true;
            this.alterMessage = registedUser.message;
            return
          }
          else if (!registedUser.registed) {
            this.showAlert = true;
            this.alterMessage = "您输入的手机号尚未注册，请注册!";
            return
          }

          //then resend authentication code
          let resendAuthenticationCode = await
          authCode(this.phoneNumber);
          if (resendAuthenticationCode.message) {
            this.showAlert = true;
            this.alterMessage = this.resendAuthenticationCode.message;
            return
          }
        }

        this.validated_token = registedUser.validated_token;
      }
    }
    }

</script>

<style scoped lang="scss">

</style>

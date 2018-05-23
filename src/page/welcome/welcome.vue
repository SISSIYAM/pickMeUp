<template>
  <div class="newCustomer">
    <section class="logoAndSlogan">
    </section>
    <section class="loginAndSignUp">
      <button class="login">Login</button>
      <button class="signUp">SignUp</button>
    </section>
    <!-- social  -->
    <div class="social_media_login">第三方登录</div>
    <div class="social_signUp_container">
      <div class="sign-btn" @click="wechatHandleClick('wechat')">
        <span class="wx_svg_container">
          <svg-icon icon-class="wechat" class="icon"></svg-icon>
        </span>
      </div>
      <div class="sign-btn" @click="qqHandleClick('tencent')">
        <span class="qq_svg_container">
          <svg-icon icon-class="qq" class="icon"></svg-icon>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'welcome',
  data () {
    return {
      newCustomer: true
    }
  },
  methods: {
    // wechatHandleClick(thirdpart){
    //
    // },
    // qqHandleClick(thirdpart){
    //
    // }
  }
}
</script>
<style lang="scss" scoped>
  .social_signUp_container {
    margin: 20px 0;
    .sign-btn {
      display: inline-block;
      cursor: pointer;
    }
    .icon {
      color: #fff;
      font-size: 30px;
      margin-top: 6px;
    }
    .wx-svg-container,
    .qq-svg-container {
      display: inline-block;
      width: 40px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      padding-top: 1px;
      border-radius: 4px;
      margin-bottom: 20px;
      margin-right: 5px;
    }
    .wx-svg-container {
      background-color: #8dc349;
    }
    .qq-svg-container {
      background-color: #6BA2D6;
      margin-left: 50px;
    }
  }
</style>

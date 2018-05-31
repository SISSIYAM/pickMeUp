<template>
  <div class="newCustomer">
    <section class="logoAndSlogan">
    </section>
      <el-row :gutter="12" class="loginAndSignUp">
        <el-col :span="8"><el-button class="login" type="primary" @click="">Login</el-button></el-col>
        <el-col :span="8"><el-button class="signUp">SignUp</el-button></el-col>
      </el-row>
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
  name: 'welcome'
}
</script>
<style lang="scss" scoped>
  .loginAndSignUp {
    position: absolute;
    padding: 35px 35px 15px 35px;
    margin: 400px auto;
  }
  .social_signUp_container {
    margin: 20px 0;
    .sign-btn {
      display: inline-block;
      cursor: pointer;
    }
    .icon {
      color: #56c742;
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

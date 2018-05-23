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
      <div class="wx_svg_container" @click="wechatHandleClick">
        <svg-icon icon-class="wechat" class="icon"></svg-icon>
      </div>
      <div class="qq_svg_container" @click="qqHandleClick">
        <svg-icon icon-class="QQ" class="icon"></svg-icon>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'welcome.vue',
  data () {
    return {
      newCustomer: true
    }
  }
}
</script>
<style lang="scss" scoped>
</style>

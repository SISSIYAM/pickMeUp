<template>
  <div class="input_text">
    <el-input v-model="value" placeholder="手机号码" clearable maxlength="11">
      <template slot="prepend">
        <div style="width: 35px;">
          <span style="color: black;">+86</span>
        </div>
      </template>
    </el-input>
  </div>
</template>

<script>
    export default {
        name: "phoneNumberInputBox"
    }
</script>

<style scoped>

</style>

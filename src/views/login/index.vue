<script setup lang="ts">

</script>

<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form">
          <h1>Hello</h1>
          <h2>欢迎来到硅谷甄选!</h2>
          <el-form-item>
            <el-input></el-input>
          </el-form-item>
          <el-form-item>
            <el-input type="password"></el-input>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>

  </div>
</template>

<style scoped>
.login_container {
  width: 100%;
  height: 100vh;


  background: url('@/assets/image/background.jpg') no-repeat;
  background-size: cover;
//background-color: red;


  .login_form {
    position: relative;
    width: 80%;
    top: 30vh;
    background: url("@/assets/image/login_form.png");
    background-size: cover;
    h1 {
      color: white;
      font-size: 40px;
    }
  }
}
</style>
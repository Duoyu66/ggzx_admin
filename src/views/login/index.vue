<script setup lang="ts">
import {User, Lock} from '@element-plus/icons-vue'
import {reactive, ref} from "vue";
import {useRouter} from "vue-router";

let $router = useRouter();
let loginForm = reactive({
  username: 'admin',
  password: '123456'

})
let loading = ref(false)
import useUserStore from "../../store/modules/user.ts";
import {ElNotification} from "element-plus";

let useStore = useUserStore();
// useStore.userLogin();
const login = async () => {
  //加载效果
  loading.value = true
  try {
    await useStore.userLogin(loginForm);
    await $router.push('/')
    //登录成功的提示信息
    ElNotification({
      type: 'success',
      message: '登录成功'
    })
    //登录成功加载效果消失
    loading.value = false
  } catch (error) {
    loading.value = false
    console.log(error)
    ElNotification({
      type: 'error',
      message: (error as Error).message
    })
  }
  console.log("我是登录按钮")

}
</script>

<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form">
          <h1 class="title_h">Hello</h1>
          <h2>欢迎来到硅谷甄选!</h2>
          <el-form-item>
            <el-input :prefix-icon="User" v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input type="password" :prefix-icon="Lock" v-model="loginForm.password" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-button :loading="loading" class="login_btn" type="primary" size="default" @click="login">
              登录
            </el-button>
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

.title_h {
  color: white;
  font-size: 40px;
}

.login_btn {
  width: 100%;

}
</style>
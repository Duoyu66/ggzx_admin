<script setup lang="ts">
import {User, Lock} from '@element-plus/icons-vue'
import {reactive, ref} from "vue";
import {useRouter} from "vue-router";
import {getTime} from "../../utils/time.ts";

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
  await loginForms.value.validate();
  try {
    await useStore.userLogin(loginForm);
    await $router.push('/')
    //登录成功的提示信息
    ElNotification({
      type: 'success',
      message: '欢迎回来',
      title:`Hi,${getTime()}好}`
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
const rules ={
  //规则对象属性
  //required代表这个字段务必要检验的
  //min：文本长度至少多少位
  //max：文本长度最多多少位
  //message：错误的提示信息
  //trigger：触发检验表单的时机 change-》文本发生变化触发校验，bulr：失去焦点时触发
  username :[
    {require:true,message:'用户名不能为空',trigger:"blur",},
    {require: true,min:6,max:10,message:"账号长度至少六位",trigger:'change'}
  ],
  password:[
    {require:true,message:"密码至少为六位"}
  ]
}
let loginForms = ref();

//自定义校验规则函数
const validatorUserName = (rule:any,value:any,callback:any)=>{
  //rule：即为校验规则对象
  //value：即为表单元素文本内容
  //函数：如果符合体哦阿健callBack放行通过
  //如果不符合条件callBack方法，注入错误提示信息
  if(value.length>=5){
    callback();
  }else{
    callback(new Error('账号长度至少五位'))
  }
}

const validatorPassword = (rule:any,value:any,callback:any)=>{
  //rule：即为校验规则对象
  //value：即为表单元素文本内容
  //函数：如果符合体哦阿健callBack放行通过
  //如果不符合条件callBack方法，注入错误提示信息
  if(value.length>=6){
    callback();
  }else{
    callback(new Error('密码长度至少六位'))
  }
}
</script>

<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form
            class="login_form"
            :model="loginForm"
            :rules="rules"
            ref="loginForms"
        >
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
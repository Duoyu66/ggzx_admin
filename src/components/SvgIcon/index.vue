<script setup lang="ts">
let iconName =defineProps({
  prefix:{
    type:String,
    default:'#icon-'
  },
  //提供图标的名字
  name:String,
  //颜色
  color:{
    type:String,
    default:''
  },
  //宽
  width:{
    type:String,
    default:'20px'
  },
  //高
  height:{
    type:String,
    default:'20px'
  },

})
</script>

<template>
  <svg >
    <use :xlink:href="prefix+name" :fill="color" :width="width" :height="height"></use>
  </svg>
</template>

<style scoped>

</style>
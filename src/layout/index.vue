<script setup lang="ts">
import logo from './logo/index.vue'
</script>

<template>
<div class="layout_container">
<!--  左侧菜单-->

  <div class="layout_slider">
    <logo/>
<!--    -->
  </div>
<!--顶部导航-->
<div class="layout_tabber">456</div>
<!--内容展示区-->
  <div class="layout_main">
    <p style="height: 10000px;background-color: red">这是夜歌段落</p>
  </div>

</div>
</template>

<style scoped lang="scss">
$base-menu-width:260px;
$base-tabber-height:50px;
.layout_container{
  width: 100%;
  height: 100vh;
  background-color: pink;
  .layout_slider{
    width: $base-menu-width;
    height: 100vh;
    background-color: pink;
  }
  .layout_tabber{
  position: fixed;
    width: calc(100% - $base-menu-width);
    height:$base-tabber-height;
    background: cyan;
    top: 0;
    left:$base-menu-width ;
  }
  .layout_main{
    position: absolute;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabber-height);
    background-color: yellowgreen;
    left:$base-menu-width ;
    top:$base-tabber-height;
    padding: 20px;
    overflow: auto;
    ::-webkit-scrollbar{
      width: 10px;
    }
    ::-webkit-scrollbar-track{
      background: yellow;
    }
    ::-webkit-scrollbar-thumb{
      width: 10px;
      background-color: yellowgreen;
      border-radius: 10px;
    }
  }
}

</style>
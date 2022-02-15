<!--
 * @Author: your name
 * @Date: 2021-12-28 18:10:00
 * @LastEditTime: 2022-01-05 17:41:34
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue3-ts\src\layout\index.vue
-->

<template>
  <el-container class="layout">
      <el-aside width="200px" class="asside">
          <!-- <MenuBar></MenuBar> -->
      </el-aside>
      <el-container>
        <el-header class="header">
            <!-- <Header></Header> -->
        </el-header>
        <el-main class="main">
            <!-- <Tabs></Tabs> -->
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
</template>
<script setup lang="ts">
 // setup 语法糖中,引入的组件可以直接使用，无需再通过components进行注册
// import Header from './header/Header.vue';
// import MenuBar from './menu/MenuBar.vue';
// import Tabs from './tabs/Tabs.vue';
</script>
<style lang="scss" scoped>
.layout{
    height: 100%;
    .asside{
        background-color: rgb(48,65,86);
        text-align: start;
        width: auto;
    }
    .header{
        height: 50px;
        border-bottom: 1px solid #e5e5e5;
        // background-color: blueviolet;
        display: flex;
        align-items: center;
    }
    .main{
        // background-color: darkgray;
        padding-top: 0px;
    }
}
</style>
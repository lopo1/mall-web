<!--
 * @Author: your name
 * @Date: 2022-01-05 16:38:49
 * @LastEditTime: 2022-01-07 16:06:36
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \mall\src\views\app\app.vue
-->
<template>

    <div>
        <router-view name = "head"></router-view>
        <router-view name ='content'></router-view>
        <router-view name = 'footer'></router-view> 
    </div>
  
</template>
<script setup lang="ts">

</script>
<style  lang='scss'>

</style>

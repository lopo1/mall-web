<!--
 * @Author: your name
 * @Date: 2022-01-05 16:38:50
 * @LastEditTime: 2022-01-20 17:42:23
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \mall\src\views\list\current-loc\current-loc.vue
-->
<template>
    <div class="current-loc">
        <div class="breadcrumbs cle">
          <div class="menus">
            <template>
                <router-link :to="{name: 'index'}">首页</router-link> >
                <!-- <router-link :to="{name: 'list', params:{id: curLoc.id}}"><span>{{curLoc.name}}</span></router-link> -->
                <router-link :to="{ name: 'list', params: { id: '130358' }}"><span>{{curLoc.name}}</span></router-link>
                <!-- <router-link to="index">首页</router-link> >
                <router-link to="list"><span>{{curLoc.name}}</span></router-link> -->
                <!-- <a @click="changeMenu(item.id)">{{item.name}}</a> -->
                <!-- <code v-if="index!==curLoc.length-1">&gt;</code> -->
            </template>

            <!-- <a href="http://sx.web51.youxueshop.com/category.php?id=2">生鲜食品</a>
            <code>&gt;</code>
            <a href="http://sx.web51.youxueshop.com/category.php?id=19">根茎类</a>
            <code>&gt;</code>
            新鲜水果甜蜜香脆单果约800克 -->
          </div>
      </div>

    </div>

</template>
<script setup lang="ts">
 import {useStore} from "@/store/index";
 import {computed} from "vue";
const store = useStore();
let curLoc = computed(() => {
  return store.getters['curLoc'];
})
</script>
<style  lang='scss'>
.cle:after{
    visibility:hidden;
    display:block;
    font-size:0;
    content:'\20';
    clear:both;
    height:0
}
.cle{
    *zoom:1
}

a {
    text-decoration:none;
    color:#333;
    -webkit-transition:color .2s;
    -moz-transition:color .2s;
    -o-transition:color .2s;
    -ms-transition:color .2s;
    transition:color .2s
}
a:hover {
    text-decoration:none;

    color:#c81623
}
a:focus,area:focus {
    outline:0
}

canvas {
    -ms-touch-action:double-tap-zoom
}

.breadcrumbs {
    padding:0 5px 0 0;
    line-height:38px;
    color:#666
}
.breadcrumbs .menus {
    float:left
}
.breadcrumbs .menus a {
    /*margin-right:6px*/
    margin-left: 6px;
    margin-right: 6px;
}
.breadcrumbs .right {
    float:right;
    color:#bbb
}
.breadcrumbs .right i {
    font-size:20px;
    margin-right:5px;
    vertical-align:-2px
}
.breadcrumbs .right .code {
    color:#fafafa;
    margin-right:30px;
    display:inline-block
}

</style>

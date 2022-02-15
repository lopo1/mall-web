<!--
 * @Author: your name
 * @Date: 2022-01-05 16:38:50
 * @LastEditTime: 2022-01-06 17:44:50
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \mall\src\views\member\member.vue
-->
<template>
    <div id="wrapper" class="cle">
        <div class="here cle">
            <a href="" @click="toIndex">首页</a>
            <code>></code>
            用户中心
        </div>
        <div class="my_nala_main">
            <member-menu></member-menu>
            <router-view></router-view>
        </div>
    </div>
</template>
<script setup lang="ts">
import memberMenu from './member-menu.vue';
import {useRouter} from "vue-router";
const router = useRouter();
const toIndex = () => { //回到首页
                router.push("/")
            }
    // export default {
    //     data () {
    //         return {
                
    //         };
    //     },
    //     props: {
            
    //     },
    //     components: {
    //         'member-menu': memberMenu,
    //         // 'receive': receive
    //     },
    //     created () {
            
    //     },
    //     watch: {
            
    //     },
    //     computed: {

    //     },
    //     methods: {
    //         toIndex () { //回到首页
    //             this.$router.push({name: 'index'});
    //         }
    //     }
    // }
</script>
<style scoped>


.my_nala_main h3.my_nala {
    height:60px;
    border:1px solid #e7e7e7;
    border-bottom:0
}
.my_nala_main h3.my_nala a {
    display:block;
    height:60px;
    font-size:22px;
    text-align:center;
    line-height:60px;
    overflow:hidden
}
.my_nala_main h3.my_nala a:hover {
    text-decoration:none
}

</style>

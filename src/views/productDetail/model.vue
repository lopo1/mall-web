<!--
 * @Author: your name
 * @Date: 2022-01-05 16:38:51
 * @LastEditTime: 2022-01-20 15:52:36
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \mall\src\views\productDetail\model.vue
-->
<style scoped lang="scss">
.model-box{
    background:rgba(0,0,0,0.3);
    position: relative;
}
.add_ok {
    display: none;
    background: #fff;
    padding: 40px 0;
    text-align: center;
    width: 480px;
    border: 3px solid #c81623;
    border-radius: 10px;
    -moz-border-radius: 10px;
}
.add_ok .tip {
    font-size: 30px;
    margin-bottom: 20px;
}
.add_ok .tip i {
    font-size: 60px;
    color: #6dc415;
    vertical-align: -4px;
    margin-right: 15px;
}
.add_ok .go a.back {
    color: #c81623;
    margin-right: 90px;
}
.add_ok .go a {
    font-size: 18px;
}
.add_ok .go a.btn {
    padding: 10px 45px 12px;
}


</style>

<template>
    <div class="full-height full-width model-box" v-show="modelShow">
        <div id="easyDialogBox" style="margin: -117.5px 0px 0px -243px; padding: 0px; border: none; z-index: 10000; position: fixed; top: 50%; left: 50%; display: block;"><div class="add_ok" id="cart_show" style="display: block; margin: 0px;">
            <div class="tip">
                <i class="iconfont">&#xe60b;</i>商品已成功加入购物车
            </div>
            <div class="go">
                <a class="back" @click="close">&lt;&lt;继续购物</a>
                 <router-link class="btn" :to="'/shoppingcart/cart'">去结算</router-link>
            </div>
        </div>
    </div>

    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const modelShow = ref(false)
const setShow = () =>{
    modelShow.value = true
}
 const close = () =>{
    modelShow.value = false;
}
const ok = ()=>{
    modelShow.value = true;
}
</script>

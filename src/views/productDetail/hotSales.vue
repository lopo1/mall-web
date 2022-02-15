<template>
<div class="z-detail-right">
    <div class="tabs_bar_right">
        <div class="tabs_bar2">热卖商品</div>
    </div>
    <div class="hot_box">
        <ul>
            <li v-for="item in hotProduct">
              <router-link :to="'/home/productDetail/'+item.id" >
                <img width="194px" height="194px" :src="item.front_image">
                <p>{{item.goods_brief}}</p>
                <p class="hot_price">￥{{item.shop_price}}元</p>
              </router-link>
            </li>
        </ul>
    </div>
</div>
</template>
<script setup lang="ts">
    import { getGoods } from '@/api/api'
import {computed} from 'vue';
import {useStore} from "@/store/index";
const store = useStore();
const hotProduct = computed(() => {
    return store.getters['hotProducts'];
});
 const   getHotSales = ()=> { //请求热卖商品
    getGoods({
    ih:true
    })
    .then((response)=> {
      store.commit('setHotProducts', response.data.data);
    }).catch(function (error) {
        console.log(error);
    });
}
getHotSales();
   
</script>
<style scoped>

html {
    background:#fafafa;
    color:#333;
    _background-attachment:fixed
}

body,p,ul,ol,li {
    margin:0;
    padding:0
}
body{
    font:12px/1.5 "Microsoft YaHei",Tahoma,Helvetica,Arial,simsun
}

ul,ol {
    list-style:none
}
img {
    border:0;
    width: 194px;
    height: 194px;
}

input{
    font-size:12px;
    outline:0;
    resize:none;
    color:#333
}
button {
    cursor:pointer
}

.clear {
    clear:both;
    height:0;
    font-size:0;
    line-height:0;
    overflow:hidden
}
.cle:after {
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
.fl {
    float:left
}
.fr {
    float:right
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
    color:#c81623
}
a:focus,area:focus {
    outline:0
}
::selection {
    background:#c81623;
    color:#fff
}
canvas {
    -ms-touch-action:double-tap-zoom
}


.z-detail-right {
    width:216px;
    float:right
}
.tabs_bar_right {
    height:50px;
    width:216px;
}
.tabs_bar2 {
    height:48px;
    background:#f3f3f3;
    border:1px solid #ccc;
    padding:0 35px;
    display:block;
    line-height:48px;
    text-align:center;
}

.hot_box {
    padding:10px;
    border:1px solid #ccc;
    border-top:0;
}
.hot_box ul li {
    margin-bottom:10px;
}
p.hot_price {
    color:#c81623;
    font-weight:bold;
    font-size:14px;
    line-height:24px;
}

</style>

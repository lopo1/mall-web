<!--
 * @Author: your name
 * @Date: 2022-01-05 16:38:50
 * @LastEditTime: 2022-01-19 17:02:59
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \mall\src\views\index\banners.vue
-->
<template>
  <div class="banner-warp w-max ct bgwh mb30 ovh border-eee" >
    <!-- <swiper :options="state.swiperOption">
      <swiper-slide v-for="item in state.banners" :key="item.id">
        <router-link :to="'/app/home/productDetail/'+item.url" target = _blank> <img :src="item.image" width="1200" height="500" alt="" /></router-link>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper> -->

    <swiper
    :slides-per-view="3"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="item in state.banners" :key="item.id">
    <router-link :to="'/home/productDetail/'+item.url" target = _blank> <img :src="item.image" width="1200" height="500" alt="" /></router-link>
    </swiper-slide>
    <!-- <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    ... -->
  </swiper>
  </div>
</template>
<style>
  .banner-warp{
    height:300px;
  }
</style>



<script setup lang="ts">
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import {reactive,onMounted} from "vue";
  import {bannerGoods} from '@/api/api'
  interface banners {
    id: string,
    url:string,
    image:string
}
  interface stateType {
  swiperOption: {
    pagination: string,
    paginationClickable: boolean,
    autoplay:number,
    autoplayDisableOnInteraction:boolean
  },
  banners:Array<banners>
}
  const state = reactive<stateType>({
  swiperOption: {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          autoplay: 2500,
          autoplayDisableOnInteraction: false,
        },
  banners:[]
})
const getBanner = ()=>{
        bannerGoods({})
          .then((response)=> {
            console.log(response)
            //跳转到首页页response.body面
            state.banners = response.data
          })
          .catch(function (error) {
            console.log(error);
          });
      }
const onSwiper = (swiper:any) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
  getBanner();

  // onMounted(() => {
  //     new Swiper(".swiper1", {
  //       pagination: {
  //         el: ".swiper-pagination",
  //       },
  //       navigation: {
  //         nextEl: ".swiper-button-next",
  //         prevEl: ".swiper-button-prev",
  //         hideOnClick: true,
  //       },
  //       autoplay: {
  //         delay: 3000,
  //         stopOnLastSlide: false,
  //         disableOnInteraction: false,
  //       },
  //       on: {
  //         navigationShow: function () {
  //           console.log("按钮显示了");
  //         },
  //       },
  //     });

  //     new Swiper(".swiper2", {
  //       //循环
  //       loop: true,
  //       //每张播放时长3秒，自动播放
  //       spaceBetween: 25,
  //       effect: "coverflow",
  //       grabCursor: true,
  //       centeredSlides: true,
  //       slidesPerView: 1.32,
  //       autoplay: {
  //         delay: 3000,
  //         stopOnLastSlide: false,
  //         disableOnInteraction: false,
  //       },
  //       coverflowEffect: {
  //         rotate: 0,
  //         stretch: 0,
  //         depth: 100,
  //         modifier: 1,
  //         slideShadows: true,
  //       },
  //     });

  //     new Swiper(".swiper3", {
  //       loop: true,
  //       autoplay: {
  //         delay: 3000,
  //         stopOnLastSlide: false,
  //         disableOnInteraction: false,
  //       },
  //       effect: "cube",
  //       cubeEffect: {
  //         slideShadows: true,
  //         shadow: true,
  //         shadowOffset: 100,
  //         shadowScale: 0.6,
  //       },
  //     });
  //   });
  // export default {
  //   components: {
  //     swiper,
  //     swiperSlide,
  //   },
  //   data() {

  //     return {

  //       swiperOption: {
  //         pagination: '.swiper-pagination',
  //         paginationClickable: true,
  //         autoplay: 2500,
  //         autoplayDisableOnInteraction: false,
  //       },
  //       banners:[]

  //     }

  //   },
  //   methods:{
  //     getBanner(){
  //       bannerGoods()
  //         .then((response)=> {
  //           console.log(response)
  //           //跳转到首页页response.body面
  //           this.banners = response.data
  //         })
  //         .catch(function (error) {
  //           console.log(error);
  //         });
  //     }
  //   },
  //   created(){
  //     this.getBanner();
  //   }

  // }

</script>

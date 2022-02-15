<template>
    <div id="wrapper">
        <current-loc></current-loc>
        <div class="main cle">
            <list-nav :currentCategoryName="state.product.currentCategoryName" :cateMenu="state.product.cateMenu" :proNum="state.product.proNum" :isObject="state.product.isObject" @on-change="changeMenu"></list-nav>
            <div class="maincon">
                <price-range :priceRange="priceRange" @on-change="changePrice"></price-range>
                <list-sort @on-sort="changeSort" :proNum="state.product.proNum"></list-sort>
                <div class="list-detail">
                    <product-list  :listData="state.product.listData"></product-list>
                    <Page pre-text="上一页" next-text="下一页" end-show="false" :page="state.product.curPage" :total-page='totalPage' @pagefn="pagefn"></Page>
                </div>
            </div>
        </div>
    </div>

</template>
<script setup lang="ts">
    // 产品列表
    import productList from './product-list/productList.vue';
    // 左侧列表导航
    import listNav from './list-nav/listNav.vue';
    // 列表排序
    import listSort from './list-sort/listSort.vue';
    // 翻页
    import Page from './page/page.vue';
    // 当前位置(这个有点问题)
    import CurrentLoc from './current-loc/current-loc.vue';
    // 价格范围
    import priceRange from './price-range/priceRange.vue';

    import { getCategory, getGoods } from '@/api/api'
import {useRoute} from "vue-router";
import {reactive,computed} from "vue";
import {useStore} from "@/store/index";
const store = useStore();
const route = useRoute();
let curLoc = computed(() => {
  return store.getters['curLoc'];
})
interface stateType {
  product: {
    curPage: number,
    c: string,
    listData:Array<any>,
    cateMenu:any,
    isObject:boolean,
    ordering:string,
    proNum:number,
    curLoc:any,
    priceRange:Array<any>,
    pricemin:string,
    pricemax:string,
    pageType:string,
    searchWord:string,
    currentCategoryName:string,
    updateMenu:boolean,
  }
}
const state = reactive<stateType>({
  product: {
    curPage: 1, // 页码
    c: '', // 商品种类
    listData: [],
    cateMenu: {}, //菜单列表
    isObject:true,
    ordering: '-add_time',
    proNum: 0, //商品数量
    curLoc: {}, //当前位置
    priceRange: [], //价格区间
    pricemin: '', //价格最低
    pricemax: '', //价格最高
    pageType:'list',
    searchWord:'',
    currentCategoryName:'',
    updateMenu:true
  }
})

  const  getAllData = ()=> {
    console.log(route.params)
    if(route.params.id){
        state.product.c = route.params.id as string;
        state.product.updateMenu = true
        getMenu(state.product.c); // 获取左侧菜单列表
    }else{
       getMenu(null); // 获取左侧菜单列表
        state.product.pageType = 'search'
        state.product.searchWord = route.params.keyword as string;
       getListData(); //获取产品列表
    //    getPriceRange(); // 获取价格区间
    }
}

const  getListData = ()=> {
        if(state.product.pageType=='search'){
            getGoods({
            q: state.product.searchWord, //搜索关键词
            pnum:12
            }).then((response)=> {
            state.product.listData = response.data.data;
            state.product.proNum = response.data.total;
            }).catch(function (error) {
            console.log(error);
            });
        }else {
            getGoods({
            p: state.product.curPage, //当前页码
            c: state.product.c, //商品类型
            ordering: state.product.ordering, //排序类型
            pmin: state.product.pricemin, //价格最低 默认为‘’ 即为不选价格区间
            pmax: state.product.pricemax, // 价格最高 默认为‘’
                pnum:12
            }).then((response)=> {

            state.product.listData = response.data.data;
            state.product.proNum = response.data.total;
            }).catch(function (error) {
            console.log(error);
            });
        }

    }
const getMenu = (id:any)=> {
    // .then((res) => {
//     console.log(res)
//     store.commit('setNewsCount', res.result.count);
//     store.commit('setNewsList', res.result.data);
//   })
        if(id != null){
            getCategory({
            "id":route.params.id
            }).then((response)=> {
            state.product.cateMenu = response.data.sub_categorys;
            state.product.currentCategoryName = response.data.name
            if(state.product.updateMenu) {
                state.product.curLoc = {
                    name: response.data.name,
                    id: response.data.id
                }
                store.commit('setCurLoc', state.product.curLoc);
                state.product.updateMenu = false
            }
            }).catch(function (error) {
            console.log(error);
            });
        }else {
            getCategory({}).then((response)=> {
            state.product.cateMenu = response.data;
            state.product.isObject = false
            }).catch(function (error) {
            console.log(error);
            });
        }

    }

// const getCurLoc =  ()=> { // 当前位置
//     this.$http.post('/currentLoc', {
//         params: {
//             proType: this.type, //商品类型
//         }
//     }).then((response)=> {

//         this.curLoc = response.data;
//     }).catch(function (error) {
//         console.log(error);
//     });
// },
// const getPriceRange =  () => {
//     this.$http.post('/priceRange', {
//         params: {
//             proType: this.type, //商品类型
//         }
//     }).then((response)=> {

//         this.priceRange = response.data;
//     }).catch(function (error) {
//         console.log(error);
//     });
// },
const changeSort = (type:string) => {
    state.product.ordering = type;
    getListData();

}
const changePrice = (data:any)=> {
    state.product.pricemin = data.min;
    state.product.pricemax = data.max;
    state.product.curPage = 1;
    getListData();
}
const changeMenu =  (id:string)=> {
    state.product.c = id; //重新获取
    // this.getCurLoc();
    getMenu(id);
    getListData();
}
const pagefn = (value:any)=>{//点击分页
    state.product.curPage = value.page;
    getListData()
}
const totalPage=()=>{
    return  Math.ceil(state.product.proNum/12)
}
getAllData ()

//     export default {
//         data () {
//             return {
//                 curPage: 1, // 页码
//                 c: '', // 商品种类
//                 listData: [],
//                 cateMenu: {}, //菜单列表
//                 isObject:true,
//                 ordering: '-add_time',
//                 proNum: 0, //商品数量
//                 curLoc: {}, //当前位置
//                 priceRange: [], //价格区间
//                 pricemin: '', //价格最低
//                 pricemax: '', //价格最高
//                 pageType:'list',
//                 searchWord:'',
//                 currentCategoryName:'',
//                 updateMenu:true
//             };
//         },
//         components: {
//             'product-list': productList,
//             'list-nav': listNav,
//             'list-sort': listSort,
//             'Page': page,
//             'current-loc': currentLoc,
//             'price-range': priceRange

//         },
//         props: {

//         },
//         created () {
//             this.getAllData ();
//         },
//         watch: {
//             "$route": "getAllData"

//         },
//         computed: {
//             totalPage(){
//                 return  Math.ceil(this.proNum/12)
//             }
//         },
//         methods: {
//             getAllData () {
//                 console.log(this.$route.params)
//                 if(this.$route.params.id){
//                     this.c = this.$route.params.id;
//                     this.updateMenu = true
//                     this.getMenu(this.c); // 获取左侧菜单列表
//                 }else{
//                     this.getMenu(null); // 获取左侧菜单列表
//                     this.pageType = 'search'
//                     this.searchWord = this.$route.params.keyword;
//                 }

//                 // this.getCurLoc(); // 获取当前位置
//                 this.getListData(); //获取产品列表
//                 this.getPriceRange(); // 获取价格区间
//             },
//             getListData() {
//                 if(this.pageType=='search'){
//                   getGoods({
//                     q: this.searchWord, //搜索关键词
//                     pnum:12
//                   }).then((response)=> {
//                     this.listData = response.data.data;
//                     this.proNum = response.data.total;
//                   }).catch(function (error) {
//                     console.log(error);
//                   });
//                 }else {
//                   getGoods({
//                     p: this.curPage, //当前页码
//                     c: this.c, //商品类型
//                     ordering: this.ordering, //排序类型
//                     pmin: this.pricemin, //价格最低 默认为‘’ 即为不选价格区间
//                     pmax: this.pricemax, // 价格最高 默认为‘’
//                       pnum:12
//                   }).then((response)=> {

//                     this.listData = response.data.data;
//                     this.proNum = response.data.total;
//                   }).catch(function (error) {
//                     console.log(error);
//                   });
//                 }

//             },
//             getMenu(id) {
//                 if(id != null){
//                   getCategory({
//                     id:this.$route.params.id
//                   }).then((response)=> {
//                     this.cateMenu = response.data.sub_categorys;
//                     this.currentCategoryName = response.data.name
//                     if(this.updateMenu) {

//                         this.curLoc = {
//                             name: response.data.name,
//                             id: response.data.id
//                         }
//                         this.updateMenu = false
//                     }
//                   }).catch(function (error) {
//                     console.log(error);
//                   });
//                 }else {
//                   getCategory({}).then((response)=> {
//                     this.cateMenu = response.data;
//                     this.isObject = false
//                   }).catch(function (error) {
//                     console.log(error);
//                   });
//                 }

//             },

//             getCurLoc () { // 当前位置
//                 this.$http.post('/currentLoc', {
//                     params: {
//                         proType: this.type, //商品类型
//                     }
//                 }).then((response)=> {

//                     this.curLoc = response.data;
//                 }).catch(function (error) {
//                     console.log(error);
//                 });
//             },
//             getPriceRange () {
//                 this.$http.post('/priceRange', {
//                     params: {
//                         proType: this.type, //商品类型
//                     }
//                 }).then((response)=> {

//                     this.priceRange = response.data;
//                 }).catch(function (error) {
//                     console.log(error);
//                 });
//             },
//             changeSort (type) {

//                 this.ordering = type;
//                 this.getListData();

//             },
//             changePrice (data) {
//                 this.pricemin = data.min;
//                 this.pricemax = data.max;
//                 this.curPage = 1;
//                 this.getListData();
//             },
//             changeMenu (id) {
//                 this.c = id; //重新获取
//                 // this.getCurLoc();
//                 this.getMenu(id);
//                 this.getListData();
//             },
//             pagefn(value){//点击分页
//                 this.curPage = value.page;
//                 this.getListData()
//             }
//         }
// }
</script>
<style  lang='scss'>
.maincon {
    width: 970px;
    float: right;
}
</style>

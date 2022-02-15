/*
 * @Author: your name
 * @Date: 2021-12-27 17:20:10
 * @LastEditTime: 2022-01-20 17:22:25
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue3-ts\src\store\index.ts
 */
import {InjectionKey} from 'vue'
import {createStore, useStore as baseUseStore, Store} from 'vuex'
import {ITable,UserInfo,GoodsList,AllMenuLabel,HotSearch,Newopro,SeriesList} from './type/index'
import {HotProduct,CurrentInfo,CurLoc} from './type/detail'
export interface State {
    count:number,
    isShowVip:boolean,
    collapse:boolean,
    tabList:Array<ITable>,
    shopList:Array<any>,
    user:Array<UserInfo>,
    goodsList:Array<GoodsList>,
    allMenuLabel:Array<AllMenuLabel>,
    hotSearch:Array<HotSearch>,
    newopro:Array<Newopro>,
    seriesList:Array<SeriesList>,
    hotProducts:Array<HotProduct>,
    currentInfo:CurrentInfo,
    curLoc:CurLoc,
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
      count: 0 ,
      isShowVip: false ,
      collapse:false ,
      tabList: [],
      shopList:[],
      user:[],
      goodsList:[],
      allMenuLabel:[],
      hotSearch:[],
      newopro:[],
      seriesList:[],
      hotProducts:[],
      currentInfo:{
          name:'新鲜水果甜蜜香脆单果约8001克',
          parent:'',
          category:{
              name:'',
              parent:'',
            }
        },
    curLoc:{
        id:0,
        name:""
    },
    },
    mutations: {
        setCount(state: State, count: number){
            state.count = count;
        },
        // 设置collapse
        setCollapse:(state: State, collapse: boolean)=>{
            state.collapse = collapse;
        },
        addTable:(state: State, tab: ITable)=>{
            if(state.tabList.some(item => item.path===tab.path)) return;
            state.tabList.push(tab);
        },
        setshopList:(state: State, shopList: any)=>{
            state.shopList=shopList;
        },
        setUser:(state: State, user: any)=>{
            state.shopList=user;
        },
        setGoodsList:(state: State, goodsList: any)=>{
            state.goodsList=goodsList;
        },
        setAllMenuLabel:(state: State, allMenuLabel: any)=>{
            state.allMenuLabel=allMenuLabel;
        },
        setHotSearch:(state: State, hotSearch: any)=>{
            state.hotSearch=hotSearch;
        },
        setIsShowVip:(state: State, isShowVip: boolean)=>{
            state.isShowVip=isShowVip;
        },
        setNewopro:(state: State, newopro: any)=>{
            state.newopro=newopro;
        },
        setSeriesList:(state: State, seriesList: any)=>{
            state.seriesList=seriesList;
        },
        setHotProducts:(state: State, hotProducts: any)=>{
            state.hotProducts=hotProducts;
        },
        setCurrentInfo:(state: State, currentInfo: any)=>{
            state.currentInfo=currentInfo;
        },
        setCurLoc:(state: State, curLoc: any)=>{
            state.curLoc=curLoc;
        }
    },
    getters:{
        getCount(state: State){
            return state.count;
        },
        // 获取collapse
        getCollapse(state: State){
            return state.collapse;
        },
        getTabs:(state: State)=>{
            return state.tabList;
        },
        getshopList:(state: State)=>{
            return state.shopList;
        },
        getUser:(state: State)=>{
            return state.user;
        },
        goodsList:(state: State)=>{
            return state.goodsList;
        },
        allMenuLabel:(state: State)=>{
            return state.allMenuLabel;
        },
        hotSearch:(state: State)=>{
            return state.hotSearch;
        },
        isShowVip:(state: State)=>{
            return state.isShowVip;
        },
        newopro:(state: State)=>{
            return state.newopro;
        },
        seriesList:(state: State)=>{
            return state.seriesList;
        },
        hotProducts:(state: State)=>{
            return state.hotProducts;
        },
        currentInfo:(state: State)=>{
            return state.currentInfo;
        },
        curLoc:(state: State)=>{
            return state.curLoc;
        }
    }
})

// 定义自己的 `useStore` 组合式函数
export function useStore() {
    return baseUseStore(key)
}

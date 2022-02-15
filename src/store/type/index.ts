/*
 * @Author: your name
 * @Date: 2022-01-05 09:57:15
 * @LastEditTime: 2022-01-19 16:45:52
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue3-ts\src\store\type\index.ts
 */
// 定义选项卡数据类型
export interface ITable {
    title: string,
    path: string,
    // name: string
}

export interface EpochItem {
    epoch: number,
    name: string,
    value: number
}

export interface UserInfo {
    name: string
}
export interface GoodsList {
    goods_id: number,
    good_name: string,
    good_image: string,
    goods_price: number,
    nums: number,
    totalPrice: number,
}

export interface AllMenuLabel {
    is_tab: boolean,
    id: number,
    name: string,
}

export interface HotSearch {
    id: number,
    keywords: string,
}
export interface Newopro {
    id: number,
    name: string,
    goods_brief: string,
    shop_price: number,
}
export interface SeriesList {
    id: number,
    name: string,
    brands: Array<Brand>,
    sub_cat: Array<Cat>,
    ad_goods: AdGoods,
    goods: Goods,
}
export interface Brand {
    name: string,
    image: string,
}
export interface Cat {
    id: number,
    name: string,
}
export interface AdGoods {
    id: number,
    goods_front_image: string,
}
export interface Goods {
    id: number,
    name: string,
    shop_price: number,
    goods_front_image: string,
}




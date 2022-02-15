/*
 * @Author: your name
 * @Date: 2022-01-19 17:08:47
 * @LastEditTime: 2022-01-20 17:19:44
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \mall\src\store\type\proDetail.ts
 */
export interface GoodInfo {
    name: string,
    goods_brief: string,
    ship_free: boolean,
    shop_price: number,
    sold_num: number,
    goods_num: number,
    images: Array<string>,
    desc_images: Array<string>,
    // name: string
}
export interface HotProduct {
    id: number,
    front_image: string,
    goods_brief: string,
    shop_price: number,
    // name: string
}

export interface CurrentInfo {
    name: string,
    parent: string,
    category: {
        name: string,
        parent: string,
    }
}
export interface CurLoc {
    id: number,
    name: string
}



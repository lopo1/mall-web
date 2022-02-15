import axios from 'axios';
import request from "@/utils/request";
import requestForm from "@/utils/requestForm";

let host = 'http://shop.projectsedu.com';
let goodsUrl = "http://39.107.30.137:8022"
let orderUrl = "http://39.107.30.137:8023"
let userUrl = "http://39.107.30.137:8021"
let userOpUrl = "http://39.107.30.137:8027"
export const ossUrl = "http://39.107.30.137:8029"

// let host = 'http://127.0.0.1:8000';


// export function userList(params: any) {
//     return request({
//         url: '/admin/user_list',
//         method: 'get',
//         params: params
//     })
// }
//上传文件
export function upload(url:string,params: any) {
  return requestForm({
      url: url,
      method: 'post',
      data: params
  })
}
// export const upload = (url,params) => { return axios.post(url,params) }
//获取商品类别信息
// export const queryCategorygoods = params => { return axios.get(`${host}/indexgoods/`) }
export function queryCategorygoods(params: any) {
  return request({
      url: `${host}/indexgoods/`,
      method: 'get',
      params: params
  })
}

// //获取首页中的新品
// export const newGoods = params => { return axios.get(`${host}/newgoods/`) }

//获取轮播图
// export const bannerGoods = params => { return axios.get(`${goodsUrl}/g/v1/banners`) }
export function bannerGoods(params: any) {
  return request({
      url: `${goodsUrl}/g/v1/banners`,
      method: 'get',
      params: params
  })
}

//获取商品类别信息
// export const getCategory = params => {
//   if('id' in params){
//     return axios.get(`${goodsUrl}/g/v1/categorys/`+params.id);
//   }
//   else {
//     return axios.get(`${goodsUrl}/g/v1/categorys`, params);
//   }
// };
export function getCategory(params: any) {
  // if('id' in params){
  //   return request({
  //     url: `${goodsUrl}/g/v1/categorys/`+params.id,
  //     method: 'get',
  //     params: params
  // });
  // }else{
  //   request({
  //     url: `${goodsUrl}/g/v1/categorys`,
  //     method: 'get',
  //     params: params
  // })
  // }
//   return request({
//     url: `${goodsUrl}/g/v1/categorys`,
//     method: 'get',
//     params: params
// })

if('id' in params){
  return axios.get(`${goodsUrl}/g/v1/categorys/`+params.id);
}
else {
  return axios.get(`${goodsUrl}/g/v1/categorys`, params);
}
}

//添加购物车
export function addShoppingCart(data: any) {
  return request({
    url: `${goodsUrl}/product/addShoppingCart`,
    method: 'post',
    data: data
});
}

//获取热门搜索关键词
// export const getHotSearch = params => { return axios.get(`${host}/hotsearchs`) }

export function getHotSearch(params: any) {
  return request({
    url: `${host}/hotsearchs`,
    method: 'get',
    params: params
});
}

//获取验证码
// export function getCaptcha(params) {
//   return axios.get(userUrl+'/u/v1/base/captcha')
// }
export function getCaptcha() {
  return request({
    url: userUrl+'/u/v1/base/captcha',
    method: 'get'
});
}
//获取商品列表
// export const getGoods = params => { return axios.get(`${goodsUrl}/g/v1/goods`, { params: params }) }
export function getGoods(params: any) {
  return request({
    url: `${goodsUrl}/g/v1/goods`,
    method: 'get',
    params: params
});
}

//商品详情
// export const getGoodsDetail = goodId => { return axios.get(`${goodsUrl}/g/v1/goods/${goodId}`) }
export function getGoodsDetail(goodId:number,params: any) {
  return request({
    url: `${goodsUrl}/g/v1/goods/${goodId}`,
    method: 'get',
    params: params
});
}

//获取购物车商品
// export const getShopCarts = params => { return axios.get(`${orderUrl}/o/v1/shopcarts`) }
export function getShopCarts(params: any) {
  return request({
    url: `${orderUrl}/o/v1/shopcarts`,
    method: 'get',
    params: params
});
}
// 添加商品到购物车
// export const addShopCart = params => { return axios.post(`${orderUrl}/o/v1/shopcarts`, params) }
export function addShopCart(params: any) {
  return requestForm({
    url: `${orderUrl}/o/v1/shopcarts`,
    method: 'post',
    data: params
});
}
//更新购物车商品信息
// export const updateShopCart = (goodsId, params) => { return axios.patch(`${orderUrl}/o/v1/shopcarts/`+goodsId, params) }
export function updateShopCart(goodsId:number,params: any) {
  return request({
    url: `${orderUrl}/o/v1/shopcarts/`+goodsId,
    method: 'patch',
    params: params
});
}
//删除某个商品的购物记录
// export const deleteShopCart = goodsId => { return axios.delete(`${orderUrl}/o/v1/shopcarts/`+goodsId) }
export function deleteShopCart(goodsId:number) {
  return request({
    url: `${orderUrl}/o/v1/shopcarts/`+goodsId,
    method: 'delete'
});
}
//收藏
// export const addFav = params => { return axios.post(`${userOpUrl}/up/v1/userfavs`, params) }
export function addFav(params: any) {
  return requestForm({
    url: `${userOpUrl}/up/v1/userfavs`,
    method: 'post',
    data: params
});
}
//取消收藏
// export const delFav = goodsId => { return axios.delete(`${userOpUrl}/up/v1/userfavs/`+goodsId) }
export function delFav(goodsId:number,params: any) {
  return request({
    url: `${userOpUrl}/up/v1/userfavs/`+goodsId,
    method: 'delete',
    params: params
});
}
// export const getAllFavs = () => { return axios.get(`${userOpUrl}/up/v1/userfavs`) }
export function getAllFavs() {
  return request({
    url: `${userOpUrl}/up/v1/userfavs`,
    method: 'get'
});
}

//判断是否收藏getAllFavs
// export const getFav = goodsId => { return axios.get(`${userOpUrl}/up/v1/userfavs/`+goodsId) }
export function getFav(goodsId:number,params: any) {
  return request({
    url: `${userOpUrl}/up/v1/userfavs/`+goodsId,
    method: 'get',
    params: params
});
}
//登录
// export const login = params => {
//   return axios.post(`${userUrl}/u/v1/user/pwd_login`, params)
// }
export function login(data: any) {
  return request({
    url: `${userUrl}/u/v1/user/pwd_login`,
    method: 'post',
    data
});
}
//注册

// export const register = parmas => { return axios.post(`${userUrl}/u/v1/user/register`, parmas) }
export function register(params: any) {
  return requestForm({
    url: `${userUrl}/u/v1/user/register`,
    method: 'post',
    data: params
});
}
//短信
// export const getMessage = parmas => { return axios.post(`${userUrl}/u/v1/base/send_sms`, parmas) }
export function getMessage(params: any) {
  return requestForm({
    url: `${userUrl}/u/v1/base/send_sms`,
    method: 'post',
    data: params
});
}

//获取用户信息
// export const getUserDetail = () => { return axios.get(`${userUrl}/u/v1/user/detail`) }
export function getUserDetail() {
  return request({
    url: `${userUrl}/u/v1/user/detail`,
    method: 'get'
});
}
//修改用户信息
// export const updateUserInfo = params => { return axios.patch(`${userUrl}/u/v1/user/update`, params) }
export function updateUserInfo(params: any) {
  return requestForm({
    url: `${userUrl}/u/v1/user/update`,
    method: 'post',
    data: params
});
}

//获取订单
// export const getOrders = () => { return axios.get(`${orderUrl}/o/v1/orders`) }
export function getOrders() {
  return request({
    url: `${orderUrl}/o/v1/orders`,
    method: 'get'
});
}
//删除订单
// export const delOrder = orderId => { return axios.delete(`${orderUrl}/o/v1/orders/`+orderId) }
export function delOrder(params: any) {
  return request({
    url: `${orderUrl}/o/v1/orders/`,
    method: 'delete',
    params: params
});
}

//添加订单
// export const createOrder = params => {return axios.post(`${orderUrl}/o/v1/orders`, params)}
export function createOrder(params: any) {
  return requestForm({
    url: `${orderUrl}/o/v1/orders`,
    method: 'post',
    data: params
});
}
//获取订单详情
// export const getOrderDetail = orderId => {return axios.get(`${orderUrl}/o/v1/orders/`+orderId)}
export function getOrderDetail(params: any) {
  return request({
    url: `${orderUrl}/o/v1/orders/`,
    method: 'get',
    params: params
});
}

//获取留言
// export const getMessages = () => {return axios.get(`${userOpUrl}/up/v1/message`)}
export function getMessages(params: any) {
  return request({
    url: `${userOpUrl}/up/v1/message`,
    method: 'get',
    params: params
});
}
//添加留言
// export const addMessage = params => {return axios.post(`${userOpUrl}/up/v1/message`, params)}
export function addMessage(params: any) {
  return requestForm({
    url: `${userOpUrl}/up/v1/message`,
    method: 'post',
    data: params
});
}
//删除留言
// export const delMessages = messageId => {return axios.delete(`${userOpUrl}/up/v1/message/`+messageId)}
export function delMessages(params: any) {
  return request({
    url: `${userOpUrl}/up/v1/message/`,
    method: 'delete',
    params: params
});
}

//添加收货地址
// export const addAddress = params => {return axios.post(`${userOpUrl}/up/v1/address`, params)}
export function addAddress(params: any) {
  return requestForm({
    url: `${userOpUrl}/up/v1/address`,
    method: 'post',
    data: params
});
}
//删除收货地址
// export const delAddress = addressId => {return axios.delete(`${userOpUrl}/up/v1/address/`+addressId)}
export function delAddress(params: any) {
  return requestForm({
    url: `${userOpUrl}/up/v1/address/`,
    method: 'delete',
    params: params
});
}
//修改收货地址
// export const updateAddress = (addressId, params) => {return axios.patch(`${userOpUrl}/up/v1/address/`+addressId, params)}
export function updateAddress(addressId:number,params: any) {
  return requestForm({
    url: `${userOpUrl}/up/v1/address/`+addressId,
    method: 'patch',
    params: params
});
}
//获取收货地址
// export const getAddress = () => {return axios.get(`${userOpUrl}/up/v1/address`)}
export function getAddress() {
  return requestForm({
    url: `${userOpUrl}/up/v1/address`,
    method: 'get'
});
}

//获取当前地址
// export const getAddress = () => {return axios.get(`${userOpUrl}/up/v1/address`)}
export function currentLoc(data:any) {
  return requestForm({
    url: `${userOpUrl}/currentLoc`,
    method: 'post',
    data
});
}

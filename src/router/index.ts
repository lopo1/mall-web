/*
 * @Author: your name
 * @Date: 2022-01-05 15:55:55
 * @LastEditTime: 2022-01-20 15:32:20
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \mall\src\router\index.ts
 */
/*
 * @Author: your name
 * @Date: 2021-12-27 17:01:18
 * @LastEditTime: 2022-01-04 16:38:56
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue3-ts\src\router\router.ts
 */
import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import home from '../views/home/home.vue'
import head from '../views/head/head.vue'
import footer from '../views/footer/footer.vue'
import list from '../views/list/list.vue'
import index from '../views/index/index.vue'
import loginHead from '../views/loginHead/loginHead.vue'
import shophead from '../views/head/shophead.vue'
import cart from '../views/cart/cart.vue'
import productDetail from '../views/productDetail/productDetail.vue'
import member from '../views/member/member.vue'
import message from '../views/member/message.vue'
import receive from '../views/member/receive.vue'
import order from '../views/member/order.vue'
import orderDetail from '../views/member/orderDetail.vue'
import collection from '../views/member/collection.vue'
import userinfo from '../views/member/userinfo.vue'
import register from '../views/register/register.vue'
import { store } from '@/store/index'
//公共部分
import app from '../views/app/app.vue';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: app,
    children: [
      {
        path: '/login',
        // component: () => import('@/views/login/login.vue'),
        components: {
          head: loginHead,
          content: () => import('@/views/login/login.vue'),
          footer: footer
        },
        name: '/login',
        meta: {
            title: '登录',
            keepAlive:false
        }
    },
    {
        path: '/register',
        components: {
          head: loginHead,
          content: () => import('@/views/register/register.vue'),
          footer: footer
        },
        name: '/register',
        meta: {
            title: '用户注册',
            keepAlive:false
        }
    },
    {
        path: '/home',
        components: {
          head: head,
          content: home,
          footer: footer
        },
        name: 'home',
        children: [
            {
                path: 'list/:id',
                component: list,
                name: 'list',
                meta: {
                    title: '列表',
                    keepAlive: false
                }
            },
            {
                path: 'search/:keyword',
                component: list,
                name: 'search',
                meta: {
                    title: '搜索',
                    keepAlive:false
                }
            },
            {
                path: 'index',
                component: index,
                name: 'teamPerformance',
                meta: {
                    title: '首页',
                    keepAlive:false
                }
            },
            {
                path: 'productDetail/:productId',
                component: productDetail,
                name: 'productDetail',
                meta: {
                    title: '商品详情',
                    keepAlive:false
                }
            },
            {
                path: 'member',
                component: member,
                name: 'member',
                children: [
                    {
                        path: 'message',
                        name: 'message',
                        component: message,
                        meta: {
                          title: '我的留言',
                          keepAlive: true
                        }
                      },
                      {
                        path: 'receive',
                        name: 'receive',
                        component: receive,
                        meta: {
                          title: '收件人信息',
                          keepAlive: true
                        }
                      },
                      {
                        path: 'order',
                        name: 'order',
                        component: order,
                        meta: {
                          title: '我的订单',
                          keepAlive: true
                        }
                      },
                      {
                        path: 'orderDetail/:orderId',
                        name: 'orderDetail',
                        component: orderDetail,
                        meta: {
                          title: 'mall-我的订单',
                          keepAlive: true
                        }
                      },
                      {
                        path: 'collection',
                        name: 'collection',
                        component: collection,
                        meta: {
                          title: 'mall-我的收藏',
                          keepAlive: true
                        }
                      },
                      {
                        path: 'userinfo',
                        name: 'userinfo',
                        component: userinfo,
                        meta: {
                          title: 'mall-用户信息',
                          keepAlive: true
                        }
                      },
                ]
            },
        ]
    },
    {
        path: '/shoppingcart',
        components: {
            head: shophead,
            content: home,
            footer: footer
          },
        children: [
            {
                path: 'cart',
                component: cart,
                name: 'cart',
                meta: {
                    title: '购物',
                    keepAlive:true
                }
            }
        ]
    }
    ]
  },
    
]

// 创建路由
const router = createRouter({
    history:createWebHistory(),
    routes
})
//进行路由判断


router.beforeEach((to, from, next) => {
    if ( to.path === '/') {
        next({path: '/home/index'});
    } else {
        next()
    }

})

router.afterEach((to, from) => {
  if (from.path != '/login' && from.path != '/' && to.path == '/login') {
      window.location.reload();
  }
})
export default router
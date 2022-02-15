/*
 * @Author: your name
 * @Date: 2022-01-05 15:06:18
 * @LastEditTime: 2022-01-07 16:02:34
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \mall\src\main.ts
 */
import { createApp } from 'vue'
import App from '@/App.vue'
import {store,key} from '@/store/index'
import router from '@/router/index'
//全局引入共用css
import '@/styles/common.scss';
//引入字体样式
import '@/styles/fonts/iconfont.css';

createApp(App).use(router).use(store,key).mount('#app')
// createApp(App).use(router).mount('#app')

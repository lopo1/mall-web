/*
 * @Author: your name
 * @Date: 2022-01-05 15:06:18
 * @LastEditTime: 2022-01-05 15:09:56
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \mall\vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0', // 解决 Network: use `--host` to expose
    port: 3000,
    open: true,
  },
  resolve: {
    alias: [
        {
            find: '@',
            replacement: resolve(__dirname, 'src')
        }
    ]
},
})

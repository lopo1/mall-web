/*
 * @Author: your name
 * @Date: 2022-01-05 16:56:23
 * @LastEditTime: 2022-01-20 15:57:23
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \mall\src\utils\request.ts
 */
import axios from "axios";
import {ElMessage} from "element-plus";
const baseUrl = "/api"

// create an axios instance
const service = axios.create({
    baseURL:baseUrl, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000, // request timeout,
})

// request interceptor
service.interceptors.request.use(
    config => {
        // do something before request is sent
        if (sessionStorage.getItem("token")) {
            // let each request carry token
            // ['X-Token'] is a custom headers key
            // please modify it according to the actual situation
            // config.headers['Token'] = sessionStorage.getItem("token") ?? ""
            config.headers = {
                'Token':sessionStorage.getItem("token") ?? ""
            }
        }
        return config
    },
    error => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
     */

    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    response => {
        const res = response
        // return res
        // console.log(res)
        // if the custom code is not 20000, it is judged as an error.
        if (res.status !== 200) {
            ElMessage({
                showClose:true,
                message: res.data.info || 'Error',
                type: 'error',
            })
            // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
            if (res.status === 1005) {
                // to re-login
                sessionStorage.setItem("token", "")
            }
            return Promise.reject(new Error(res.data.info || 'Error'))
        } else {
            return res
        }
    },
    error => {
        console.log(error) // for debug
        ElMessage({
            showClose: true,
            message: error.message,
            type: 'error',
        })
        return Promise.reject(error)
    }
)

export default service

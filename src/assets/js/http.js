import axios from 'axios'
import router from '@/router/index'
import {getToken} from './auth'

export const http = axios.create({
  // baseURL: 'http://localhost:8888/api/private/v1/'
})

// 添加请求拦截器
// 拦截器函数接收一个参数 config
// config 是当前请求的配置对象
http.interceptors.request.use(function (config) {
  // 如果本次请求的不是 /login 接口，则我们就加入请求头
  if (config.url !== '/login') {
    config.headers['Authorization'] = getToken()
  }
  return config
}, function (error) { // 当请求出错的时候会调用到第二个参数函数
  return Promise.reject(error)
})

// http 响应拦截器
// 如果本地响应的数据是 403 ，则我们提示用户：你没有权限执行该操作
http.interceptors.response.use(function (response) {
  const {meta} = response.data
  if (meta.status === 403) {
    window.alert('你没有权限执行该操作！')
  } else if (meta.status === 401) {
    router.push({
      name: 'login',
      query: {
        redirect: window.location.hash
      }
    })
  }
  return response
}, function (error) {
  return Promise.reject(error)
})

// 1. 定义一个插件对象
const httpPlugin = {}

//    install 是一个函数
//    该函数接收两个参数：Vue、options
//   Vue.use(httpPlugin) 会来调用 install 方法
httpPlugin.install = function (Vue, options) {
  // 3. 添加实例方法
  Vue.prototype.$http = http
}

// 4. 导出插件对象
export default httpPlugin

// 5. 在入口文件模块 main.js 加载使插件生效
// Vue.use(httpPlugin)

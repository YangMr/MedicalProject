// 1. 引入axios
import axios from 'axios'
import type { RequestParamsType, DataType } from './types/HttpType'
import type { AxiosInstance, InternalAxiosRequestConfig, AxiosError, AxiosResponse } from 'axios'

// 2. 创建axios实例对象
const service: AxiosInstance = axios.create({
  // baseURL: 'http://serverqn.9yuecloud.com', // 请求的公共接口地址
  baseURL: '/dev-api', // 请求的公共接口地址
  timeout: 5000 // 请求的超时时间
})

// 3. 创建请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

// 4. 创建响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

// 第一种
const request = <T = any>({ url, method = 'GET', data, options }: RequestParamsType) => {
  return service.request<DataType<T>>({
    url,
    method,
    [method.toLocaleUpperCase() === 'GET' ? 'params' : 'data']: data,
    ...options
  })
}

// 5. 导出axios实例对象
export default request

// 第二种
// const request = (url: string, method: Method, data: {}, options: AxiosRequestConfig) => {
//   return service.request({
//     url,
//     method,
//     [method.toLocaleUpperCase() === 'GET' ? 'params' : 'data']: data,
//     ...options
//   })
// }

// request(
//   '/api/list',
//   'GET',
//   {
//     username: 'admin',
//     password: 'admin'
//   },
//   {
//     headers: {},
//     a: 1
//   }
// )

// axios({
//   url: '/api/list',
//   method: 'GET',
//   params: {
//     name: '1'
//   }
// })
//
// axios({
//   url: '/api/login',
//   method: 'POST',
//   data: {
//     test: '1'
//   }
// })
//
// axios({
//   url: '/api/list',
//   method: 'GET',
//   data: {
//     name: '!'
//   }
// })

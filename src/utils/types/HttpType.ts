import type { AxiosRequestConfig, Method } from 'axios'

export type RequestParamsType = {
  url: string
  method?: Method
  data?: Object
  options?: AxiosRequestConfig
}

export type DataType<T> = {
  code: number
  msg: string
  data: T
}

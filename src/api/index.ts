import request from '@/utils/http'
import type { LoginParamsType, StaffParamsType, StaffResponseType } from './types/IndexType'

/**
 * 登录接口
 */
export const login = (data: LoginParamsType) => {
  return request<string>({
    url: '/user/login',
    method: 'POST',
    data
  })
}

export const getStaffList = (page: number, pageSize: number, data: StaffParamsType) => {
  return request<StaffResponseType[]>({
    url: `/staff/list/search/${page}/${pageSize}`,
    method: 'POST',
    data
  })
}

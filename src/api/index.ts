import service from '@/utils/http'

/**
 * 登录接口
 */
interface LoginParamsType {
  username: string
  password: string
}

export const login = (data: LoginParamsType) => {
  return service.request({
    url: '/user/login',
    method: 'POST',
    data
  })
}

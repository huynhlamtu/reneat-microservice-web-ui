import request from '../utils/request'

const BASE_API = 'http://localhost:9014/v1/users'

export function register(data) {
  const url = BASE_API + '/register'

  return request({
    url,
    method: 'post',
    data,
  })
}

export function login(data) {
  const url = BASE_API + '/login'

  return request({
    url,
    method: 'post',
    data,
  })
}

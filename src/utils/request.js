import axios from 'axios'

// create an axios instance
const service = axios.create({
  baseURL: '', // api 的 base_url
  withCredentials: false, // 跨域请求时发送 cookies
  timeout: 60 * 1000, // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // Do something before request is sent
    // if (store.getters.token) {
    //   config.headers['X-Token'] = getToken()
    // }
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get information such as headers or status
   * Please return  response => response
   */
  response => {
    return response.data
  },
  error => {
    // if (error.response.status === 401) {
    //   store.dispatch('user/fedLogOut').then(() => {
    //     location.reload()
    //   })
    // }
    return Promise.reject(error)
  }
)

export default service

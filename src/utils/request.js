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
  /**
   * 下面的注释为通过在response里，自定义code来标示请求状态
   * 当code返回如下情况则说明权限有问题，登出并返回到登录页
   * 如想通过 XMLHttpRequest 来状态码标识 逻辑可写在下面error中
   * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
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
    console.log("errorzzzzzzzzzz", error)
    return Promise.reject(error)
  }
)

export default service

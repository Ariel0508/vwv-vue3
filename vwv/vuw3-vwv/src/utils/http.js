// axios基礎的封裝
import axios from 'axios'
// 錯誤提示
import 'element-plus/es/components/message/style/css'
import { ElMessage } from 'element-plus'


const httpInstance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 10000
})
// 攔截器

// axios请求拦截器
httpInstance.interceptors.request.use(config => {
    return config
  }, e => Promise.reject(e))
  
  // axios响应式拦截器
  httpInstance.interceptors.response.use(res => res.data, e => {
    // 統一錯誤提示
    ElMessage({
      type:'warning',
      message:e.response.data.message
    })
    return Promise.reject(e)
  })
export default httpInstance
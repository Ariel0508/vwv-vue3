// axios基礎的封裝
import axios from "axios";
// 導入 useUserStore
import { useUserStore } from "@/stores/userStore";
// 導入 router
import router from "@/router";
// 錯誤提示
import "element-plus/es/components/message/style/css";
import { ElMessage } from "element-plus";


const httpInstance = axios.create({
  baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
  timeout: 10000,
});
// 攔截器

// axios请求拦截器
httpInstance.interceptors.request.use((config) => {
    // 1.從pinia獲取token數據
   const userStore = useUserStore()
  //  2.按照後端的要求拼接token數據
  const token = userStore.userInfo.token
  if(token){
    config.headers.Authorization = `Bearer ${token}`
  }
    return config;
  },
  (e) => Promise.reject(e));

// axios响应式拦截器
httpInstance.interceptors.response.use((res) => res.data,(e) => {
  const userStore = useUserStore()
    // 統一錯誤提示
    ElMessage({
      type: "warning",
      message: e.response.data.message
    })
    // 統一401token失效處理
    if(e.response.status === 401){
    // 1.清除本地用戶數據
    userStore.clearUserInfo()
    // 2.跳轉回到登入頁
    router.push('/login')
    }
   
    return Promise.reject(e);
  }
);
export default httpInstance;

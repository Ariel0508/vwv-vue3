// 訂單頁相關
import httpInstance from "../utils/http";

// 獲取詳情接口
export const getCheckInfoAPI = () => {
  return httpInstance({
    url: "/member/order/pre",
  });
};

// 創建訂單
export const createOrderAPI = (data)=>{
  return httpInstance({
    url:'/member/order',
    method:'POST',
    data
  })
}
import httpInstance from "../utils/http";

// 封裝獲取訂單接口
/*
params: {
	orderState:0, //tab切換時的狀態
  page:1, //當前頁數
  pageSize:2 //每頁條數
}
*/


export const getUserOrderAPI = (params) => {
    return httpInstance({
      url:'/member/order',
      method:'GET',
      params
    })
  }
import httpInstance from "../utils/http";
// 獲取訂單詳情
export const getPayInfoAPI = (id)=>{
    return httpInstance({
        url:`/member/order/${id}`,
    })
}

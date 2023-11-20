import httpInstance from '@/utils/http'

// 封裝所有和用戶相關的函數
// 登入
// 通過解構賦值的方式將參數傳過來
export const loginAPI = ({account, password}) =>{
return httpInstance({
    url:'/login',
    method: 'POST',
    data:{
        account,
        password
    }
})
}
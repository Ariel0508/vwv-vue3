// 管理用戶數據相關
import { defineStore } from "pinia";
import { ref } from "vue";
import { loginAPI } from "@/apis/user";
import { useCartStore } from "./cartStore";

export const useUserStore = defineStore("user",() => {
    const cartStore = useCartStore()
    // 1.定義管理用戶數據的state
    const userInfo = ref({});
    // 2.定義獲取接口數據的action函數
    const getUserInfo = async ({ account, password }) => {
      const res = await loginAPI({ account, password });
      userInfo.value = res.result;
    };
    // 退出時清除用戶信息
    const clearUserInfo = () => {
      userInfo.value = {};
      // 執行清除購物車的action
      cartStore.clearCart()
    };
    // 3.以物件的格式把state和action return
    return {
      userInfo,
      getUserInfo,
      clearUserInfo,
    };
  },
  {
    // 持久化配置 存入localStorage
    persist: true,
  }
);

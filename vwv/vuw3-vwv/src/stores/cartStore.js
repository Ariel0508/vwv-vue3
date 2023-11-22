// 封裝購物車模塊

import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCartStore = defineStore(
  "cart",
  () => {
    // 1.定義state - cartList
    const cartList = ref([]);
    // 2.定義action - addCart
    const addCart = (goods) => {
      // 添加購物車操作
      // 已添加過 - count + 1
      // 未添加過 - 直接push
      // 思路: 通過匹配傳遞過來的商品物件中的skuId能不能在cartList中找到，找到了就是有添加過
      const item = cartList.value.find((item) => goods.skuId === item.skuId);
      if (item) {
        // 有找到
        item.count++;
      } else {
        // 沒找到
        cartList.value.push(goods);
      }
    };

    // 刪除購物車
    const delCart = (skuId) => {
      // 思路: 1.splice - 找到要刪除項的下標值
      const idx = cartList.value.findIndex((item) => skuId === item.skuId);
      cartList.value.splice(idx, 1);
    };
    //  2. filter - 使用陣列的過濾方法
    // const delCart = (skuId) => {
    //     cartList.value = cartList.value.filter((item) => skuId !== item.skuId);
    // }

  // 單選功能
  // 通過skuId找到要修改的那一項 然後把它的selected修改為傳過來的selected
  const singleCheck = (skuId, selected)=>{
  const item = cartList.value.find((item)=> item.skuId === skuId) 
  item.selected = selected
  } 

    // 計算購物車內的商品的數量、價錢
    // 1.總數量 所有項count的和
    // 每次累加完都會交給a c是每一項
    const allCount = computed(() =>
      cartList.value.reduce((a, c) => a + c.count, 0)
    );
    // 2.總價 所有項的count*price的和
    const allPrice = computed(
      () => cartList.value.reduce((a, c) => a + c.count * c.price,
      0));
    return {
      cartList,
      allCount,
      allPrice,
      addCart,
      delCart,
      singleCheck
    };
  },
  {
    // 持久化配置 存入localStorage
    persist: true,
  }
);

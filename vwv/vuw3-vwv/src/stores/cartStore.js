// 封裝購物車模塊
import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useUserStore } from "./user";
import { insertCartAPI, findNewCartListAPI } from "@/apis/cart";

export const useCartStore = defineStore( "cart",() => {
    const userStore = useUserStore();
    const isLogin = computed(() => userStore.userInfo.token);
    // 1.定義state - cartList
    const cartList = ref([]);
    // 2.定義action - addCart
    const addCart = async (goods) => {
      const { skuId, count } = goods
      // 添加購物車操作
      if (isLogin.value) {
        // 登入之後的加入購物車邏輯
        // 調用加入購物車接口
        await insertCartAPI({ skuId, count })
        // 調用獲取最新購物車列表接口
        const res = await findNewCartListAPI()
        // 用接口購物車列表覆蓋本地購物車列表
        cartList.value = res.result
      } else {
        // 未登入的加入購物車邏輯-本地購物車
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
    const singleCheck = (skuId, selected) => {
      const item = cartList.value.find((item) => item.skuId === skuId);
      item.selected = selected;
    };

    // 全選功能
    const allCheck = (selected) => {
      // 把cartList中的每一項的selected都設置為當前的全選框狀態
      cartList.value.forEach((item) => (item.selected = selected));
    };

    // 計算購物車內的商品的數量、價錢
    // 1.總數量 所有項count的和
    // 每次累加完都會交給a c是每一項
    const allCount = computed(() =>
      cartList.value.reduce((a, c) => a + c.count, 0)
    );
    // 2.總價 所有項的count*price的和
    const allPrice = computed(() =>
      cartList.value.reduce((a, c) => a + c.count * c.price, 0)
    );
    // 3.已選取的總數量
    const selectedCount = computed(() =>
      cartList.value
        .filter((item) => item.selected)
        .reduce((a, c) => a + c.count, 0)
    );
    // 4.已選取的總價
    const selectedPrice = computed(() =>
      cartList.value
        .filter((item) => item.selected)
        .reduce((a, c) => a + c.count * c.price, 0)
    );
    // 是否全選 => 所有項的selected都為true 用every()每一項
    const isAll = computed(() => cartList.value.every((item) => item.selected));

    return {
      cartList,
      allCount,
      allPrice,
      isAll,
      selectedCount,
      selectedPrice,
      addCart,
      delCart,
      singleCheck,
      allCheck,
    };
  },
  {
    // 持久化配置 存入localStorage
    persist: true,
  }
);

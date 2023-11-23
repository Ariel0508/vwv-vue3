// 封裝購物車相關接口
import httpInstance from "../utils/http";

// 加入購物車
export const insertCartAPI = ({ skuId, count }) => {
  return httpInstance({
    url: "/member/cart",
    method: "POST",
    data: {
      skuId,
      count,
    },
  });
};

// 獲取最新購物車列表
export const findNewCartListAPI = () => {
  return httpInstance({
    url: "/member/cart",
  });
};

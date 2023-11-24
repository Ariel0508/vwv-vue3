// 訂單頁相關
import httpInstance from "../utils/http";

export const getCheckInfoAPI = () => {
  return httpInstance({
    url: "/member/order/pre",
  });
};

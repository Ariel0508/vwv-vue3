import httpInstance from "@/utils/http";

// 獲取banner
export function getBannerAPI(params = {}) {
  // 默認為1 商品為2
  const { distributionSite = '1' } = params
  return httpInstance({
    url: "/home/banner",
    params: {
      distributionSite
    },
  });
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}fimdNewAPI
 */
export function findNewAPI() {
  return httpInstance({
    url: "/home/new",
  });
}
// 獲取人氣推薦
export function getHotAPI() {
  return httpInstance({
    url: "/home/hot",
  });
}
// 獲取產品列表
export function getGoodsAPI() {
  return httpInstance({
    url: "/home/goods",
  });
}

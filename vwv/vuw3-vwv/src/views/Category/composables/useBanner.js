// 封裝banner輪播圖業務相關代碼
import { onMounted, ref } from 'vue'
import { getBannerAPI } from '@/apis/home'

export function useBanner(){
    // 獲取banner
const bannerList = ref([])

const getBanner = async () => {
    const res = await getBannerAPI({
        distributionSite: '2'
    })
    // console.log(res)
    bannerList.value = res.result
}
onMounted(() => getBanner())

// 將組件會用到的數據，用物件的形式return出去
return {
    bannerList
}

}
// 封裝分類數據業務相關代碼
import { getCategoryAPI } from '@/apis/category'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { onBeforeRouteUpdate } from 'vue-router'

export function useCategory (){
    const categoryData = ref({})
const route = useRoute()
// route.params.id存在置後性的問題拿不到最新的數據
const getCategory = async (id = route.params.id) => {
    const res = await getCategoryAPI(id)
    categoryData.value = res.result
}

onMounted(() => getCategory())
// 目標:路由參數變化時，可以將分類數據接口重新發送
// to :目標路由對象
onBeforeRouteUpdate((to) => {
    // console.log("路由變化了")
    // 重新發送函數
    // 存在問題:使用最新的路由參數請求最新的分類數據
    // console.log(to)
    getCategory(to.params.id)
})

return {
    categoryData
}
}
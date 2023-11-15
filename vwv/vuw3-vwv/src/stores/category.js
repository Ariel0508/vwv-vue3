import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategroyAPI } from '@/apis/layout'
export const useCategroyStore = defineStore('categroy', () =>{
//  導航列表的數據管理
// state導航列表數據
const categroyList = ref([])
// action獲取導航數據方法
const getCategroy = async () =>{
const res = await getCategroyAPI()
categroyList.value = res.result
}
return { 
    categroyList,
    getCategroy
}
})

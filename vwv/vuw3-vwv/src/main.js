import { createApp } from 'vue'
import { createPinia } from 'pinia'


import App from './App.vue'
import router from './router'
// 引入初始化樣式文件
import '@/styles/common.scss'

import { useIntersectionObserver } from '@vueuse/core'

// // 測試接口函數
// import {getCategory} from "@/apis/testAPI"
// getCategory().then(res =>{
//     console.log(res)
// })
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// 定義全局指令
app.directive('img-lazy',{
    mounted(el, binding){
    // el:指令綁定的那個元素(img)
    // binding:binding.value指令等於後面綁定的表達式的值 圖片url
    console.log(el, binding.value)
    useIntersectionObserver(
        el,
        ([{ isIntersecting }] ) => {
        //   console.log(isIntersecting)
        if(isIntersecting){
        // 進入視口區域
        el.src = binding.value
        }
        },
      )
    }
})

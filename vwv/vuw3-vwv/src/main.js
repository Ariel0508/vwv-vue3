import { createApp } from "vue"
import { createPinia } from "pinia"

import App from "./App.vue"
import router from "./router"
// 引入初始化樣式文件
import "@/styles/common.scss"

// 引入懶加載指令並且註冊
import { lazyPlugin } from "@/directives"

// 引入全局組件插件
import { componentPlugin } from "@/components"

// // 測試接口函數
// import {getCategory} from "@/apis/testAPI"
// getCategory().then(res =>{
//     console.log(res)
// })
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount("#app")

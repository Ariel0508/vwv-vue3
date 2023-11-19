// 把components中的所有組件都進行全局化註冊
// 通過插件的方式
import ImageView from './ImageView/index.vue'
import XtxSku from './XtxSku/index.vue'

export const componentPlugin = {
    install(app){
    // app.component('組件名字', 組件配置物件)
       app.component('XtxImageView', ImageView)
       app.component('XtxSku', XtxSku)
    }
} 
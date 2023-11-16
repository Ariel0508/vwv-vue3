<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeHot from './components/HomeHot.vue'
import HomeNew from './components/HomeNew.vue'
import HomeProduct from './components/HomeProduct.vue'
</script>

<template>
    <div class="container">
        <HomeCategory />
        <HomeBanner />
    </div>
    <HomeNew />
    <HomeHot />
    <HomeProduct />
    <!-- 測試面板組件 -->
    <!-- <HomePanel title="新鮮好物" sub-title="新鮮好物 好多商品">
        <div>
            我是新鮮好物的插槽內容
        </div>
    </HomePanel >
    <HomePanel title="人氣推薦" sub-title="人氣推薦 好多商品"> 
        <div>
            我是人氣好物的插槽內容
        </div>
    </HomePanel > -->
     
</template>
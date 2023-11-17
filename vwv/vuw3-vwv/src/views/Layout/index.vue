<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'

//觸發獲取列表導航的action
import { useCategoryStore } from '@/stores/category'
import { onMounted } from 'vue'

const CategoryStore = useCategoryStore()

onMounted(() => CategoryStore.getCategory())
</script>
  
<template>
  <LayoutFixed />
  <LayoutNav />
  <LayoutHeader />
  <!-- 添加key 破壞複用機制 強制銷毀重建 -->
  <!-- <RouterView :key="$route.fullPath" /> -->
  <RouterView />
  <LayoutFooter />
</template>
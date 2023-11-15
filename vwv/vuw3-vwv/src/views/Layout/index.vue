<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'

//觸發獲取列表導航的action
import { useCategroyStore } from '@/stores/category'
import { onMounted } from 'vue'

const CategroyStore = useCategroyStore()

onMounted(() => CategroyStore.getCategroy())
</script>
  
<template>
  <LayoutFixed />
  <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
</template>
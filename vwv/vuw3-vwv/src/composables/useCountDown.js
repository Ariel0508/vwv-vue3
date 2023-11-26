// 封裝到計時邏輯函數
import { ref, computed, onUnmounted } from "vue";
import dayjs from "dayjs";

export const useCountDown = () => {
  // 1.響應式數據
  let timer = null
  const time = ref(0);
  // 格式化時間 => xx分xx秒
  const formatTime = computed(() => dayjs.unix(time.value).format("mm分ss秒"));
  // 2.開啟到計時的函數
  const start = (currentTime) => {
    // 開始到計時的邏輯
    // 核心邏輯的編寫: 每隔一秒減1
    time.value = currentTime;
    timer = setInterval(() => {
      time.value--;
    }, 1000);
  };
// 組件銷毀時清除定時器
onUnmounted(()=>{
timer && clearInterval(timer)
})
  return {
    formatTime,
    start,
  };
};

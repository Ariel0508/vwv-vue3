<script setup>
// 定義props
defineProps({
    // 主標
    title: {
        type: String
    },
    // 副標題
    subTitle: {
        type: String
    }
})
</script>


<template>
    <div class="home-panel">
        <div class="container">
            <div class="head">
                <!-- 主標題和副標題是純文本，可以抽象成prop傳入 -->
                <h3>
                    {{ title }}<small>{{ subTitle }}</small>
                </h3>
            </div>
            <!-- 主体内容区域 -->
            <!-- 主體內容是複雜的模板，抽象成插槽傳入，只有一塊插槽用默認寫法<slot /> -->
            <slot />
        </div>
    </div>
</template>

<style scoped lang='scss'>
.home-panel {
    background-color: #fff;

    .head {
        padding: 40px 0;
        display: flex;
        align-items: flex-end;

        h3 {
            flex: 1;
            font-size: 32px;
            font-weight: normal;
            margin-left: 6px;
            height: 35px;
            line-height: 35px;

            small {
                font-size: 16px;
                color: #999;
                margin-left: 20px;
            }
        }
    }
}
</style>
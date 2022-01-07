import { ref } from 'vue'

export const initText = ref(`<template>
        <view class="relative">
            <image src="..."  class="cover" />
            <view class="desc">
                😋 语义化的模板，更清晰的结构
            </view>
        </view>
</template>

<style scoped lang="less">
@import (reference) "@/uni_modules/tob-less/index.less";

.cover {
    
}

.desc {
    .w-full; .absolute;
    
}
</style>`)

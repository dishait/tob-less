import { useMediaQuery } from '@vueuse/core'
import { computed, unref } from 'vue'

const isLargeScreen = useMediaQuery('(min-width: 960px)')

const largeScreenText = `<template>
    <div class="bg-white p-2" :class="AppTheme">    
        <img :src="url" class="rounded-lg h-full w-40" />
        <div class="flex-1 mt-3 ml-5 relative">
            <div class="text-neutral text-3xl">🤔 自定义主题</div>
            <div class="cursor-pointer mt-18 text-right text-xl">
                    <span class="bg-neutral rounded-sm text-white p-1 px-3" @click="ToggleAppTheme('')">TO ORIGIN</span>
                    <span class="rounded-sm shadow-sm text-neutral ml-5 p-1 px-3" @click="ToggleAppTheme('fill')">TO FILL</span>
            </div>
            <div class="text-sm text-base right-0 bottom-0 absolute">
                满足个性化需求
            </div>
    </div>
</template>`

const smallScreenText = `<template>
        <div :class="AppTheme" class="bg-white p-2">
            <img :src="url" class="rounded-lg h-full w-40" />
            <div class="flex-col flex mt-20 ml-4">
                <span class="rounded-sm shadow-sm text-neutral mb-5 p-1 px-3" @click="ToggleAppTheme('fill')">FILL</span>
                <span class="bg-neutral rounded-sm text-white p-1 px-3" @click="ToggleAppTheme('')">ORIGIN</span>
            </div>
        </div>
</template>`

export const initText = computed(() => {
	return unref(isLargeScreen)
		? largeScreenText
		: smallScreenText
})

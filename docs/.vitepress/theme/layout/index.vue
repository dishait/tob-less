<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
const route = useRoute()
const active = computed(() => {
    const isGuide = route.path.includes('/guide')
    return isGuide ? 'text-primary' : null
})

const router = useRouter()
const toLink = url => window.location.href = url
                                                                                                                                                                                                                                                                                                                                                                                                                                        </script>

<template>
    <Layout>
        <template #navbar-search>
            <div
                :class="[active]"
                class="cursor-pointer font-semibold text-lg active"
                @click="router.go('/guide/')"
            >Guide</div>

            <div
                class="cursor-pointer font-semibold mx-4 text-lg active"
                @click="toLink('https://github.com/markthree/tob-less')"
            >Github</div>

            <div
                class="cursor-pointer font-semibold text-lg active"
                @click="router.go('/guide/')"
            >Gitee</div>
        </template>
    </Layout>
</template>

<style scoped lang="less">
@import (reference, less) "../custom.less";
.active {
    transition: all 0.2s ease-in-out;
}

.active:hover {
    .text-primary;
}
</style>
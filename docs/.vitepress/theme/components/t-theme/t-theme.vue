<script setup>
import { initText } from "./text.js";
import url from "../../static/theme.jpeg";
import { useToggle, useMediaQuery } from '@vueuse/core'
import { ref, computed, onMounted, unref } from "vue";
import CodeMirror from '../../codemirror/CodeMirror.vue'

const [themeRef, toggle] = useToggle(false)


const theme = computed(() => {
    return unref(themeRef) ? 'theme' : null
})
const isLargeScreen = useMediaQuery('(min-width: 960px)')

const el = ref(null)
</script>

<template>
    <div class="container flex flex-wrap-reverse mt-5 mb-20 w-full justify-center">
        <div class="bg-white rounded-lg flex shadow mb-5 p-2 transition custom" :class="theme">
            <img :src="url" class="rounded-lg h-full w-40" />

            <div class="flex-1 mt-3 ml-5 relative" v-if="isLargeScreen">
                <div class="text-neutral text-3xl">🤔 自定义主题</div>
                <div class="cursor-pointer mt-18 text-right text-xl">
                    <span
                        class="bg-neutral rounded-sm text-white p-1 px-3"
                        @click="toggle(false)"
                    >TO ORIGIN</span>
                    <span
                        class="rounded-sm shadow-sm text-neutral ml-5 p-1 px-3"
                        @click="toggle(true)"
                    >TO FILL</span>
                </div>
                <div class="text-sm text-base right-0 bottom-0 absolute">满足个性化需求</div>
            </div>

            <div v-else class="flex-col flex mt-20 ml-4">
                <span
                    class="rounded-sm shadow-sm text-neutral mb-5 p-1 px-3"
                    @click="toggle(true)"
                >FILL</span>
                <span
                    class="bg-neutral rounded-sm text-white p-1 px-3"
                    @click="toggle(false)"
                >ORIGIN</span>
            </div>
        </div>
        <div>
            <CodeMirror
                :value="initText"
                class="rounded-lg shadow-lg editor"
                mode="htmlmixed"
                ref="el"
            />
        </div>
    </div>
</template>   

<style scoped>
.custom {
    width: 100vw;
    margin-top: 20px;
    height: 300px;
    margin-left: 0;
    margin-right: 0;
    overflow: hidden;
}

.editor {
    width: 100vw;
    height: 580px;
    pointer-events: none;
}

@media screen and (min-width: 960px) {
    .editor {
        width: 584px;
        height: 500px;
    }

    .custom {
        flex: 1;
        height: 50vh;
        margin-top: 90px;
        margin-right: 30px;
    }
}

.container {
    align-items: start;
}

.theme {
    --white: 37, 56, 62;
    --base: 249, 244, 244;
    --neutral: 249, 244, 244;
}
</style>

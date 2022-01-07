<script setup>
import { ref } from "vue";
import { initText } from "./text.js";
import url from "../../static/mixins.jpeg";
import useTyping from "../../codemirror/typing.js";
import CodeMirror from '../../codemirror/CodeMirror.vue'
const el = ref(null)

const [typeingEl, avatar, text] = useTyping({
    editorEl: el,
    paths: [{
        ref: 'w-20 h-20',
        cursor: [13, 3],
        text: `w-full h-full`
    }, {
        ref: 'w-full absolute',
        cursor: [18, 3],
        text: `bottom-0 bg-info p-2 mb-10 text-white bg-opacity-20`
    }],
    resolver: {
        atom: text => [' ', '.', ...text, ';'],
        largeScreen: ch => {
            const notShouldNoop = ch !== ';' && ch !== '.'
            const refCh = notShouldNoop ? ch : ''
            return [refCh, ch]
        },
        smallScreen: text => {
            const refText = ' ' + text
            const texts = text.split(' ')
            const typingText = texts.map(v => `.${v};`).join(' ')
            return [refText, typingText]
        }
    }
})
</script>

<template>
    <div class="container flex flex-wrap-reverse mt-5 mb-20 w-full justify-center">
        <div class="rounded-lg shadow mt-15 mb-5 transition-hack relative custom">
            <img :src="url" :class="avatar" />
            <div :class="text">😋语义化的模板，更清晰的结构</div>
        </div>
        <div>
            <div ref="typeingEl"></div>
            <CodeMirror
                ref="el"
                :value="initText"
                class="rounded-lg shadow-lg editor"
                mode="htmlmixed"
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
        height: 65vh;
        margin-top: 30px;
        margin-right: 30px;
    }
}

.container {
    align-items: start;
}
</style>
<script setup>
import { ref } from "vue";
import { initText } from "./text.js";
import url from "../../static/atom.jpeg";
import useTyping from "../../codemirror/typing.js";
import CodeMirror from '../../codemirror/CodeMirror.vue'

const el = ref(null)

const [typeingEl, avatar, text] = useTyping({
    editorEl: el,
    paths: [{
        ref: 'w-20 h-20',
        cursor: [2, 37],
        text: `w-full h-full`
    }, {
        ref: 'w-full absolute',
        cursor: [3, 40],
        text: `bottom-0 bg-white p-2 mb-10 bg-opacity-20 text-white`
    }],
    resolver: {
        atom: text => [' ', ...text],
        largeScreen: ch => [ch, ch],
        smallScreen: text => {
            const finalText = ' ' + text
            return [finalText, finalText]
        }
    }
})
</script>

<template>
    <div class="container flex flex-wrap-reverse mt-5 mb-20 w-full justify-center">
        <div class="rounded-lg shadow mb-5 transition-hack relative custom">
            <img :src="url" :class="avatar" />
            <div :class="text">🧐 流畅开发体验，告别低效开发</div>
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
<template>
  <div class="editor" ref="el" />
</template>

<script setup>
import CodeMirror from './codemirror'
import { useDebounceFn } from '@vueuse/core'
import { ref, onMounted, watchEffect } from 'vue'

const props = defineProps({
  mode: {
    type: String,
    default: ''
  },
  value: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['change'])

const el = ref()
const editorRef = ref()

onMounted(() => {
  const addonOptions = {
    autoCloseBrackets: true,
    autoCloseTags: true,
    foldGutter: false
  }

  const editor = CodeMirror(el.value, {
    value: '',
    mode: props.mode,
    readOnly: false,
    lineWrapping: true,
    lineNumbers: true,
    ...addonOptions
  })

  editorRef.value = editor

  editor.on('change', () => {
    emit('change', editor.getValue())
  })

  watchEffect(() => {
    const cur = editor.getValue()
    if (props.value !== cur) {
      editor.setValue(props.value)
    }
  })

  watchEffect(() => {
    editor.setOption('mode', props.mode)
  })

  window.addEventListener(
    'resize',
    useDebounceFn(() => {
      editor.refresh()
    }, 100)
  )
})

defineExpose({
  editorRef
})
</script>

<style>
.editor {
  position: relative;
  height: 100%;
  width: 100%;
  background-color: #1e293b !important;
}

.CodeMirror {
  font-family: var(--font-code);
  line-height: 1.5;
  height: 100%;
  font-size: 14px;
}
</style>

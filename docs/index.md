---
home: true
tagline: 主题驱动的
actionText: 👉 Get Started
actionLink: /guide/
features:
  - title: 🧐 原子的
    details: 开发效率直接翻一番
  - title: 😀 主题驱动
    details: 自定义主题，满足个性化需求
  - title: 😋 支持Mixins
    details: 语义化的模板，更清晰的结构
---

<br />
<br />

<div class="text-center text-sm">
 本文档基于<t-tag size="md" color="accent" rounded="lg" class="mx-1">VitePress + tob less</t-tag>构建
</div>


<script setup>
import { init } from 'ityped'
import { onMounted } from 'vue'


onMounted(() => {
  const oneElement = document.querySelector('.tagline')
  init(oneElement, { showCursor: false,  disableBackTyping: true, strings: [' uniapp 样式库'] });
})
</script>
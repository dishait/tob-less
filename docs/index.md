---
home: true
tagline: 主题驱动的
actionText: 👉 Get Started
actionLink: /guide/
features:
  - title: 🧐 原子的
    details: 流畅开发体验，告别低效
  - title: 🤔 主题驱动
    details: 自定义主题，满足个性化需求
  - title: 😋 支持Mixins
    details: 语义化的模板，更清晰的结构
---

<!-- <br /> -->


<script setup>
import { init } from 'ityped'
import { onMounted } from 'vue'

onMounted(() => {
  const oneElement = document.querySelector('.tagline')
  init(oneElement, { showCursor: false,  disableBackTyping: true, strings: [' uniapp 样式库'] });
})
</script>
<!-- 
# :monocle_face: 原子的

<br />

<t-atom />

<br />
<br />
<br />

# :thinking: 主题驱动

<br />

<t-theme />


<br />
<br />
<br />

# :yum: 支持 Mixins

<br />

<t-mixins /> -->


<div class="mt-10 text-center text-sm">
 本文档基于<t-tag size="md" :light="false" color="accent" rounded="base" class="mx-1">VitePress + tob less</t-tag>构建
</div>
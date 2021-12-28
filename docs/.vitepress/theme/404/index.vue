<template>
  <div class="flex flex-wrap h-screen text-center justify-around items-center">
    <div class="font-blod desc">
      <div class="text-7xl tip">404</div>
      <div class="text-3xl content" id="one">The Page</div>
      <t-btn color=" " rounded="lg" shadow=" " size="btn" light @click="back">👉 Go Back</t-btn>
    </div>

    <img src="./404.svg" class="notFoundCover" alt="page not found" />
  </div>
</template>

<script setup>
import { init } from 'ityped'
import { onMounted } from 'vue'
import { useRouter } from 'vitepress'
import tBtn from "../components/t-btn.vue"

onMounted(() => {
  const oneElement = document.querySelector('#one')

  init(oneElement, { showCursor: false, disableBackTyping: true, strings: [' is not found!'] });
})


const router = useRouter()
const back = () => router.go('/')
</script>

<style lang="less" scoped>
.tip {
  margin-bottom: 15px;
}

.content {
  height: 40px;
}

.notFoundCover {
  width: 700px;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  margin: 0 5px;
}

.desc {
  flex: 1;
  width: 300px;
}

.btn {
  margin-top: 30px;
  font-size: 20px;
  padding: 12px 20px;
  --tw-shadow-color: 8, 145, 178;
  --tw-shadow: 0 4px 6px -1px rgba(var(--tw-shadow-color), 0.1),
    0 2px 4px -1px rgba(var(--tw-shadow-color), 0.06);
  box-shadow: 0 0 #0000, 0 0 #0000, 0 0 #0000, var(--tw-shadow);
}
</style>
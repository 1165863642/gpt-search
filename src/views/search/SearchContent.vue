<template>
  <div class="contains">
    <div class="search">
      <el-input v-model="input" class="w-50 m-2" size="large" placeholder="Please Input" :prefix-icon="Search"
        @keyup.enter="keyUp" />
    </div>
    <div class="result">
      <el-text>{{ resultContent }}</el-text>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import { useRouter } from "vue-router"
import { useRoute } from "vue-router"
import { gptSearch } from '@/api/gpt'

const route = useRoute()
const input = ref(route.query.text)
const resultContent = ref('')

gptSearch({ text: String(input.value) }).then(res => {
  resultContent.value = res
})
// 路由
const router = useRouter()
// 跳转到搜索页
const keyUp = () => {
  router.push({
    path: 'search',
    query: {
      text: input.value
    },
  })
  gptSearch({ text: String(input.value) }).then(res => {
    resultContent.value = res
  })
}

</script>

<style scoped>
.contains .search {
  position: relative;
  width: 600px;
  height: 45px;
  text-align: center;
}

.contains .search :deep(.el-input__wrapper) {
  border-radius: 20px;
}

.contains .result {
  margin-top: 20px;
  width: 600px;
}
</style>

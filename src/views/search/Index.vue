<script setup lang="ts">
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import { useRouter } from "vue-router"
import { gptSearch } from '@/api/gpt'
import assetLogo from '@/assets/img/logo5.svg'

// 路由
const router = useRouter()
const resultContent = ref('')
const logo = ref('')
const loading = ref(false)


logo.value = assetLogo
// 搜索内容
const input = ref('')
// 跳转到搜索页
const keyUp = () => {
  // router.push({
  //   path: 'search',
  //   query: {
  //     text: input.value
  //   },
  // })
  loading.value = true
  gptSearch({ text: String(input.value) }).then(res => {
    resultContent.value = res
  }).finally(() => {
    loading.value = false
  })
}
</script>

<template>
  <div class="contains">
    <div class="search">
      <div>
        <el-image :src="logo"></el-image>
      </div>
      <div><el-input v-model="input" class="w-50 m-2" size="large" placeholder="Please Input" :prefix-icon="Search"
          @keyup.enter="keyUp" /></div>
      <div class="result" v-loading="loading" :style="{ border: resultContent ? '1px solid #ddd' : 'none' }">
        <el-scrollbar height="300px">
          <el-text style="white-space: pre-wrap; float: left;">{{ resultContent }}</el-text>
        </el-scrollbar>
      </div>
    </div>

  </div>
</template>

<style scoped>
.contains .search {
  position: relative;
  width: 600px;
  height: 45px;
  left: 50%;
  top: 40%;
  margin-left: -300px;
  margin-top: -100px;
  text-align: center;
}

.contains .search :deep(.el-input__wrapper) {
  border-radius: 20px;
}


.contains .result {
  margin: 0 auto;
  margin-top: 30px;
  width: 500px;
  padding: 10px;
}

.contains .search .el-image {
  width: 360px;
  margin-top: -200px;
  height: 180px;
}
</style>

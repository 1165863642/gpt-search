<script setup lang="ts">
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import { useRouter } from "vue-router"
import { gptSearch } from '@/api/gpt'
import assetLogo from '@/assets/img/logo5.svg'
// import { useI18n } from 'vue-i18n'

// const { t } = useI18n()


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
      <div><el-input v-model="input" size="large" :placeholder="$t('search.placeholder')" :prefix-icon="Search"
          @keyup.enter="keyUp" /></div>
      <div class="result" v-loading="loading" :style="{ border: resultContent ? '1px solid #ddd' : 'none' }">
        <el-scrollbar height="300px">
          <el-text style="white-space: pre-wrap; text-align: left;">{{ resultContent }}</el-text>
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contains .search {
  position: relative;
  width: 200px;
  height: 50px;
  left: 50%;
  top: 40%;
  margin-left: -100px;
  margin-top: -100px;
  text-align: center;
}

.contains .search :deep(.el-input__wrapper) {
  border-radius: 100px;
}

.contains .search .el-input {
  height: 30px;
}


.contains .result {
  margin: 0 auto;
  margin-top: 30px;
  width: 300px;
  padding: 10px;
  text-align: left;
  background: white;
}

.contains .search .el-image {
  width: 150px;
  margin-top: -100px;
  height: 180px;
}
</style>

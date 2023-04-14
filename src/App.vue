<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()

const changeLang = (lang: string) => {
  locale.value = lang
  localStorage.setItem('lang', lang)// 重要！下面遇到问题里解释
}

</script>

<template>
  <div class="contains">
    <el-dropdown style=" z-index: 11111; float: right; ">
      <span class="el-dropdown-link">
        {{ $t('language') }}
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="changeLang('zh')">中文</el-dropdown-item>
          <el-dropdown-item @click="changeLang('en')">English</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <RouterView />
  </div>
</template>

<style scoped >
body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}

.contains {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  /* padding: 20px; */
  background: white;
}
</style>

<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
const input = ref('')
console.log(process.env)
</script>

<template>
  <!--  <header>-->
  <!--    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />-->

  <!--    <div class="wrapper">-->
  <!--      <HelloWorld msg="You did it!" />-->

  <!--      <nav>-->
  <!--        <RouterLink to="/">Home</RouterLink>-->
  <!--        <RouterLink to="/about">About</RouterLink>-->
  <!--      </nav>-->
  <!--    </div>-->
  <!--  </header>-->

  <!--  <RouterView />-->
  <div class="contains">
    <div class="search">
      <el-input v-model="input" placeholder="Please input">
        <template #prepend>
          <el-button :icon="Search" />
        </template>
      </el-input>
    </div>
  </div>
</template>

<style scoped type="sass">
.contains {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 20px;

}

.contains .search {
  position: relative;
  width: 600px;
  height: 45px;
  left: 50%;
  top: 40%;
  margin-left: -300px;
  margin-top: -25px;
  /* background-color: transparent; */
  /*覆盖原背景颜色，设置成透明 */
  border-radius: 35px;
  border: 1px solid #ddd;
  /* box-shadow: 0 0 0 0px; */
  text-align: center;
}

.contains .search .el-input {
  width: 570px;
  height: 45px;
  line-height: 45px;
}

.contains .search :deep(.el-button) {
  width: 20px;
  height: 45px;
  margin-left: -10px;
}

.contains .search :deep(.el-input-group__prepend) {
  margin-left: -25px;
}

.contains .search :deep(.el-input-group__prepend),
.contains .search :deep(.el-input__wrapper) {
  background: transparent;
  border: none;
  box-shadow: 0 0 0 0px;
}


/*header {*/
/*  line-height: 1.5;*/
/*  max-height: 100vh;*/
/*}*/

/*.logo {*/
/*  display: block;*/
/*  margin: 0 auto 2rem;*/
/*}*/

/*nav {*/
/*  width: 100%;*/
/*  font-size: 12px;*/
/*  text-align: center;*/
/*  margin-top: 2rem;*/
/*}*/

/*nav a.router-link-exact-active {*/
/*  color: var(--color-text);*/
/*}*/

/*nav a.router-link-exact-active:hover {*/
/*  background-color: transparent;*/
/*}*/

/*nav a {*/
/*  display: inline-block;*/
/*  padding: 0 1rem;*/
/*  border-left: 1px solid var(--color-border);*/
/*}*/

/*nav a:first-of-type {*/
/*  border: 0;*/
/*}*/

/*@media (min-width: 1024px) {*/
/*  header {*/
/*    display: flex;*/
/*    place-items: center;*/
/*    padding-right: calc(var(--section-gap) / 2);*/
/*  }*/

/*  .logo {*/
/*    margin: 0 2rem 0 0;*/
/*  }*/

/*  header .wrapper {*/
/*    display: flex;*/
/*    place-items: flex-start;*/
/*    flex-wrap: wrap;*/
/*  }*/

/*  nav {*/
/*    text-align: left;*/
/*    margin-left: -1rem;*/
/*    font-size: 1rem;*/

/*    padding: 1rem 0;*/
/*    margin-top: 1rem;*/
/*  }*/
/*}*/
</style>

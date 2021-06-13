<template>
  <div id="app">
    <Header v-if="!$route.meta.hideHeader" />
    <router-view />
    <Footer v-if="!$route.meta.hideFooter" />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  name: "app",
  components: {
    Header: defineAsyncComponent(() => import("./components/common/Header")),
    Footer: defineAsyncComponent(() => import("./components/common/Footer")),
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&family=Playfair+Display:wght@400;500&display=swap");
/* 최상위 root에 font-size부여 */
:root {
  font-size: 16px;
}
body {
  font-size: 1rem;
  font-family: "Noto Sans KR", sans-serif;
  button {
    font-family: "Noto Sans KR", sans-serif;
  }
}
</style>

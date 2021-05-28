<template>
  <Header />
  <router-view />
</template>

<script>
import Header from "./components/common/Header.vue";
export default {
  name: "app",
  components: {
    Header,
  },
};
</script>

<style lang="scss">
/* 최상위 root에 font-size부여 */
:root {
  font-size: 20px;
}

body {
  font-size: 1rem;
}

@media screen and (max-width: 1024px) {
  :root {
    font-size: 20px;
  }

  body {
    font-size: 1rem;
  }
}

@media screen and (max-width: 768px) {
  :root {
    font-size: 16px;
  }

  body {
    font-size: 1rem;
  }
}
</style>

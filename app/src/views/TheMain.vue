<template>
  <div id="theMain">
    <MainBanner />
    <MainNewWork />
    <ul>
      <li v-for="(item, index) in slideItems" :key="index" class="slide-index">
        <h2 class="mainSlideTitle">{{ item.slideTitle }}</h2>
        <MainSlide :laftelSlide="item" :index="index" />
      </li>
    </ul>
    <VsubBanner />
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";
import slideList from "../assets/data/laftelslide.json";
export default {
  name: "TheMain",
  data() {
    return {
      slideItems: slideList.laftelSlide
    };
  },
  components: {
    MainBanner: defineAsyncComponent(() => import("../layout/MainBanner")),
    MainNewWork: defineAsyncComponent(() => import("../layout/MainNewWork")),
    MainSlide: defineAsyncComponent(() => import("../layout/MainSlide")),
    VsubBanner: defineAsyncComponent(() => import("../layout/VsubBanner"))
  }
};
</script>
<style lang="scss" scoped>
.slide-index {
  margin: 4rem 0;
}

.mainSlideTitle {
  width: 93.5vw;
  margin: 0 auto;
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: -0.05rem;
  margin-bottom: 0.5rem;
  height: 2rem;
}

// tablet
@media screen and (max-width: 1024px) {
  .mainSlideTitle {
    width: 95vw;
    font-size: 1.35rem;
    line-height: 2rem;
    height: auto;
  }
}

//mobile 480px기준
@media screen and (max-width: 768px) {
  .slide-index {
    margin: 2rem 0;
  }
  .mainSlideTitle {
    width: 90vw;
  }
}
</style>

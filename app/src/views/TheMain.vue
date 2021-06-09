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
import MainBanner from "../layout/MainBanner";
import MainNewWork from "../layout/MainNewWork";
import MainSlide from "../layout/MainSlide";
import VsubBanner from "../layout/VsubBanner";
// import MainSlideList from "../assets/data/MainSlideList.json";
import slideList from "../assets/data/laftelslide.json";
export default {
  name: "TheMain",
  data() {
    return {
      // slideItems: MainSlideList.MainSlide,
      slideItems: slideList.laftelSlide,
    };
  },
  components: {
    MainBanner,
    MainNewWork,
    MainSlide,
    VsubBanner,
  },
};
</script>
<style lang="scss" scoped>
.slide-index {
  margin: 3rem 0;
}

.mainSlideTitle {
  width: 95vw;
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
    font-size: 1.35rem;
  }
}

@media screen and (max-width: 768px) {
  .mainSlideTitle {
    width: 90vw;
  }
}
</style>

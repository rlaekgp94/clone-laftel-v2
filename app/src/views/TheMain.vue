<template>
  <div id="theMain">
    <MainBanner />
    <MainNewWork />
    <MainSlide :slideItems="slideItems" :slide="'title01'" />
    <MainSlide :slideItems="slideItems" :slide="'title02'" />
    <MainSlide :slideItems="slideItems" :slide="'title03'" />
    <VsubBanner />
  </div>
</template>
<script>
import MainBanner from "../layout/MainBanner";
import MainNewWork from "../layout/MainNewWork";
import MainSlide from "../layout/MainSlide";
import VsubBanner from "../layout/VsubBanner";
import MainSlideList from "../assets/data/MainSlideList.json";
export default {
  name: "TheMain",
  data() {
    return {
      slideItems: MainSlideList.MainSlide,
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
<style lang="scss" scoped></style>

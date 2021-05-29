<template>
  <div id="theMain">
    <MainBanner />
    <MainNewWork />
    <MainSlide />
    <VsubBanner />
  </div>
</template>
<script>
import MainBanner from "../layout/MainBanner";
import MainNewWork from "../layout/MainNewWork";
import MainSlide from "../layout/MainSlide";
import VsubBanner from "../layout/VsubBanner";
export default {
  name: "TheMain",
  components: {
    MainBanner,
    MainNewWork,
    MainSlide,
    VsubBanner,
  },
};
</script>
<style lang="scss" scoped></style>

<template>
  <div id="mainNewWork">
    <div id="mainNewWorkWrap" v-once class="swiper-container">
      <h2 class="mainSlideTitle">요일별 신작</h2>

      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <Vthumbnail class="slide-thumbnail-img" />
          <div class="slide-thumbnail-title">애니메이션 제목입니다01</div>
        </div>
        <div class="swiper-slide">
          <Vthumbnail class="slide-thumbnail-img" />
          <div class="slide-thumbnail-title">애니메이션 제목입니다02</div>
        </div>
        <div class="swiper-slide">
          <Vthumbnail class="slide-thumbnail-img" />
          <div class="slide-thumbnail-title">애니메이션 제목입니다03</div>
        </div>
        <div class="swiper-slide">
          <Vthumbnail class="slide-thumbnail-img" />
          <div class="slide-thumbnail-title">애니메이션 제목입니다04</div>
        </div>
        <div class="swiper-slide">
          <Vthumbnail class="slide-thumbnail-img" />
          <div class="slide-thumbnail-title">애니메이션 제목입니다05</div>
        </div>
      </div>
    </div>
    <div class="swiper-button-prev-unique">
      <svg width="40" height="40" class="prev-icon">
        <path
          d="M10.6048 36.0619C11.4113 36.8684 12.7187 36.8684 13.5252 36.0619L28.1268 21.4602C28.9333 20.6538 28.9333 19.3463 28.1268 18.5399L13.5252 3.93824C12.7187 3.1318 11.4113 3.13181 10.6048 3.93824C9.7984 4.74467 9.79839 6.05213 10.6048 6.85857L23.7463 20.0001L10.6048 33.1416C9.79839 33.948 9.79839 35.2555 10.6048 36.0619Z"
        ></path>
      </svg>
    </div>
    <div class="swiper-button-next-unique">
      <svg width="40" height="40" class="next-icon">
        <path
          d="M10.6048 36.0619C11.4113 36.8684 12.7187 36.8684 13.5252 36.0619L28.1268 21.4602C28.9333 20.6538 28.9333 19.3463 28.1268 18.5399L13.5252 3.93824C12.7187 3.1318 11.4113 3.13181 10.6048 3.93824C9.7984 4.74467 9.79839 6.05213 10.6048 6.85857L23.7463 20.0001L10.6048 33.1416C9.79839 33.948 9.79839 35.2555 10.6048 36.0619Z"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";
import Vthumbnail from "../components/Vthumbnail";
// import laftelList from "../assets/data/laftel.json";
export default {
  name: "MainSlide",
  data() {
    return {
      // laftelItems: laftelList.laftel,
      // itemTitle: "",
      // itemSrc: "",
    };
  },
  mounted() {
    const navigation = $(
        "#mainNewWork .swiper-button-prev-unique,#mainNewWork .swiper-button-next-unique"
      ),
      slideWrap = $("#mainNewWork");

    navigation.hide();
    slideWrap.hover(
      function () {
        navigation.fadeIn();
      },
      function () {
        navigation.fadeOut();
      }
    );

    new Swiper("#mainNewWork .swiper-container", {
      //   slidesPerView: 7,
      spaceBetween: 8,
      // slidesPerGroup: 6,
      speed: 1200,
      loop: true,
      // loopFillGroupWithBlank: true,
      navigation: {
        nextEl: "#mainNewWork .swiper-button-next-unique",
        prevEl: "#mainNewWork .swiper-button-prev-unique",
      },
      breakpoints: {
        "@0.50": {
          slidesPerView: 2.25,
          slidesPerGroup: 2,
        },
        "@1.00": {
          slidesPerView: 3.13,
          slidesPerGroup: 3,
        },
        "@1.50": {
          slidesPerView: 6.13,
          slidesPerGroup: 6,
        },
      },
    });
  },
  components: {
    Vthumbnail,
  },
};
</script>

<style lang="scss" scoped>
#mainNewWork {
  width: 100%;
  height: 15.5rem;
  margin: 3rem 0;
  position: relative;
  overflow: hidden;
}

.mainSlideTitle {
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: -0.05rem;
  margin-bottom: 0.5rem;
  height: 2rem;
}

.swiper-container {
  width: auto;
  height: 100%;
  margin-left: 2.5rem;
  display: flex;
  flex-direction: column;
}

.swiper-wrapper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  width: 100%;
  height: 12.5rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  .slide-thumbnail-img {
    width: 100%;
  }
  .slide-thumbnail-title {
    height: 2rem;
    font-size: 1.15rem;
    font-weight: 400;
    margin-top: 0.5rem;
  }
}

.swiper-button-prev-unique {
  left: 0;
}
.swiper-button-next-unique {
  right: 0;
}
.swiper-button-prev-unique,
.swiper-button-next-unique {
  height: 10.4rem;
  position: absolute;
  top: 2.25rem;
  z-index: 2;
  cursor: pointer;
  width: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  background: rgba(0, 0, 0, 0.4);
  .prev-icon {
    transform: rotate(180deg) scale(0.75);
    fill: #fff;
    margin-left: 0.25rem;
  }
  .next-icon {
    fill: #fff;
    transform: scale(0.75);
    margin-right: 0.25rem;
  }
}

// tablet
@media screen and (max-width: 1024px) {
  .mainSlideTitle {
    font-size: 1.35rem;
    margin-bottom: 0.25rem;
  }

  .swiper-container {
    margin-left: 1rem;
  }
  .swiper-slide {
    .slide-thumbnail-title {
      font-size: 0.875rem;
    }
  }

  .swiper-button-prev-unique,
  .swiper-button-next-unique {
    opacity: 0;
  }
}

//mobile 480px기준
@media screen and (max-width: 768px) {
  .swiper-slide {
    .slide-thumbnail-title {
      font-size: 0.75rem;
    }
  }
}
</style>

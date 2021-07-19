<template>
  <div id="mainSlide">
    <div id="mainSlideWrap" class="swiper-container">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(slide, indexContent) in laftelSlide.animation"
          :key="indexContent"
        >
          <Vthumbnail
            class="slide-thumbnail-img"
            :style="{
              backgroundImage: 'url(' + slide.itemScr + ')'
            }"
          />
          <div class="slide-thumbnail-title">{{ slide.itemTitle }}</div>
        </div>
      </div>
      <div id="swiper-navigation">
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
    </div>
  </div>
</template>

<script>
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";
import Vthumbnail from "../components/Vthumbnail";
export default {
  name: "MainSlide",
  props: { laftelSlide: Object },
  mounted() {
    new Swiper("#mainSlide .swiper-container", {
      spaceBetween: 8,
      speed: 1200,
      // loop: true,
      // loopFillGroupWithBlank: true,
      navigation: {
        nextEl: "#swiper-navigation .swiper-button-next-unique",
        prevEl: "#swiper-navigation .swiper-button-prev-unique"
      },
      breakpoints: {
        "@0.50": {
          slidesPerView: 1.75,
          slidesPerGroup: 1
        },
        "@1.00": {
          slidesPerView: 3.5,
          slidesPerGroup: 3
        },
        "@1.50": {
          slidesPerView: 6,
          slidesPerGroup: 6
        }
      }
    });
  },
  components: {
    Vthumbnail
  }
};
</script>

<style lang="scss" scoped>
#mainSlide {
  width: 100%;
  height: 14rem;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
}

.swiper-container {
  width: 93.5vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: visible;
}

#mainSlide:hover #swiper-navigation {
  display: block;
}

.swiper-wrapper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  width: 100%;
  height: auto;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .slide-thumbnail-img {
    width: 100%;
  }
  .slide-thumbnail-title {
    letter-spacing: -0.05rem;
    height: 4rem;
    font-size: 1.1rem;
    line-height: 1.5rem;
    font-weight: 400;
    margin-top: 0.5rem;
  }
}

#swiper-navigation {
  width: 100vw;
  height: auto;
  display: none;
}

.swiper-button-prev-unique.swiper-button-disabled {
  opacity: 0;
}

.swiper-button-next-unique.swiper-button-disabled {
  opacity: 0;
}

.swiper-button-prev-unique {
  left: calc(-50vw + 50%);
}
.swiper-button-next-unique {
  right: calc(-50vw + 50%);
}
.swiper-button-prev-unique,
.swiper-button-next-unique {
  height: 10.5rem;
  position: absolute;
  top: 0;
  z-index: 2;
  cursor: pointer;
  width: 3.4rem;
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
  #mainSlide {
    height: 12.5rem;
  }
  .swiper-container {
    width: 95vw;
  }

  .swiper-button-prev-unique,
  .swiper-button-next-unique {
    display: none;
  }
}

//mobile 480px기준
@media screen and (max-width: 768px) {
  .swiper-container {
    width: 90vw;
  }
}
</style>

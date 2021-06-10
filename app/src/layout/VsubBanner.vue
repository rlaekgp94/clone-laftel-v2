<template>
  <div id="subBanner">
    <div class="sub-banner-wrap">
      <div class="sub-banner-inner">
        <div class="sub-banner-title">
          <p class="sub-banner-text01">멤버십 이용자라면</p>
          <p class="sub-banner-text02">
            <span>라프텔 TV 앱</span>으로도 웅장하게 즐겨보세요!
          </p>
        </div>
        <img
          src="https://asset.laftel.net/static/media/home-tv.797f41ee.png"
          alt="banner-TVImage"
          class="sub-banner-img"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
#subBanner {
  width: 93.5vw;
  height: 7rem;
  background-color: rgb(240, 237, 255);
  margin: 2rem auto 4rem;
  border-radius: 0.25rem;
}

.sub-banner-wrap {
  position: relative;
  width: 100%;
  height: 100%;
}
.sub-banner-inner {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .sub-banner-title {
    margin-right: 2rem;
    color: #323232;
    line-height: 2rem;
    .sub-banner-text01 {
      font-size: 1rem;
      font-weight: 500;
    }
    .sub-banner-text02 {
      font-size: 1.5rem;
      font-weight: 600;
      span {
        color: #816bff;
      }
    }
  }
  .sub-banner-img {
    width: 13rem;
    height: 9rem;
    margin-bottom: 1.35rem;
  }
}

// tablet
@media screen and (max-width: 1024px) {
  .sub-banner-inner {
    .sub-banner-title {
      line-height: 1.5rem;
      .sub-banner-text01 {
        font-size: 0.75rem;
      }
      .sub-banner-text02 {
        font-size: 1.125rem;
      }
    }
  }
}

//mobile 480px기준
@media screen and (max-width: 768px) {
  #subBanner {
    width: 90vw;
  }
  .sub-banner-inner {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .sub-banner-title {
      margin-right: 0.5rem;
      line-height: 1rem;
      width: 9rem;
      .sub-banner-text01 {
        font-size: 0.75rem;
      }
      .sub-banner-text02 {
        line-height: 1.5rem;
        font-size: 1rem;
      }
    }
    .sub-banner-img {
      width: 10rem;
      height: 7rem;
      margin-bottom: 0.5rem;
    }
  }
}
</style>

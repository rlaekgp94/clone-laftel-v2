<template>
  <transition name="slide">
    <div id="tm-menu-wrap" v-if="open">
      <div class="menu-top">
        <div class="welcome-message">
          라프텔에 오신 것을<br />
          환영합니다&#33;
        </div>
        <router-link to="/login" class="login-button"
          >로그인 &#47; 가입</router-link
        >
      </div>
      <div class="menu-content">
        <a href="#" class="menu-item-wrap">
          <div class="menu-item">
            <svg width="30" height="30" class="barcode-icon">
              <path
                d="M6.79709402,11.2834188 C7.02017094,11.2406838 7.21931624,11.4150427 7.21931624,11.6321368 L7.21931624,18.3201709 C7.21931624,18.537265 7.02017094,18.7116239 6.79709402,18.6688889 C6.62529915,18.6364103 6.50991453,18.4731624 6.50991453,18.2979487 L6.50991453,11.654359 C6.50991453,11.4791453 6.62529915,11.3158974 6.79709402,11.2834188 Z M9.70470085,11.1535897 C9.90042735,11.1535897 10.0594017,11.3125641 10.0594017,11.5091453 L10.0594017,18.4886325 C10.0594017,18.6903419 9.88931624,18.8458974 9.69529915,18.8458974 L8.53034188,18.8458974 C8.32435897,18.8458974 8.16623932,18.6792308 8.16623932,18.4886325 L8.16623932,11.5108547 C8.16623932,11.3082906 8.33632479,11.1535897 8.53034188,11.1535897 L9.70470085,11.1535897 Z M11.2964103,11.2804274 C11.474188,11.3052137 11.5989744,11.4547863 11.5989744,11.6317094 L11.5989744,18.3197436 C11.5989744,18.5368376 11.3989744,18.7111966 11.1750427,18.6693162 C11.0041026,18.6359829 10.8878632,18.472735 10.8878632,18.2975214 L10.8878632,11.6573504 C10.8878632,11.4325641 11.0733333,11.2496581 11.2964103,11.2804274 Z M12.8322222,11.2834188 C13.0561538,11.2406838 13.2544444,11.4150427 13.2544444,11.6321368 L13.2544444,18.3201709 C13.2544444,18.537265 13.0561538,18.7116239 12.8322222,18.6688889 C12.6604274,18.6364103 12.5450427,18.4731624 12.5450427,18.2979487 L12.5450427,11.654359 C12.5450427,11.4791453 12.6604274,11.3158974 12.8322222,11.2834188 Z M15.2669231,11.1535897 C15.4626496,11.1535897 15.6216239,11.3125641 15.6216239,11.5091453 L15.6216239,18.4886325 C15.6216239,18.6903419 15.4549573,18.8458974 15.264359,18.8458974 L14.4412821,18.8458974 C14.2387179,18.8458974 14.0831624,18.6792308 14.0831624,18.4886325 L14.0831624,11.5108547 C14.0831624,11.3082906 14.2506838,11.1535897 14.4412821,11.1535897 L15.2669231,11.1535897 Z M5.31931624,11.1535897 C5.51247863,11.1535897 5.6808547,11.3082906 5.6808547,11.5108547 L5.6808547,18.4886325 C5.6808547,18.6903419 5.51247863,18.8458974 5.31931624,18.8458974 L4.74068376,18.8458974 C4.53555556,18.8458974 4.3791453,18.6792308 4.3791453,18.4886325 L4.3791453,11.5108547 C4.3791453,11.3082906 4.54837607,11.1535897 4.74068376,11.1535897 L5.31931624,11.1535897 Z M18.8034188,22.682906 L18.8034188,7.31623932 C18.8034188,6.6991453 18.3008547,6.1965812 17.682906,6.1965812 L2.31709402,6.1965812 C1.7,6.1965812 1.1974359,6.6991453 1.1974359,7.31623932 L1.1974359,22.682906 C1.1974359,23.3008547 1.7,23.8034188 2.31709402,23.8034188 L17.682906,23.8034188 C18.3008547,23.8034188 18.8034188,23.3008547 18.8034188,22.682906 Z M17.682906,5 C18.9615385,5 20,6.03931624 20,7.31623932 L20,22.682906 C20,23.9606838 18.9615385,25 17.682906,25 L2.31709402,25 C1.04017094,25 -1.0658141e-14,23.9606838 -1.0658141e-14,22.682906 L-1.0658141e-14,7.31623932 C-1.0658141e-14,6.03931624 1.04017094,5 2.31709402,5 L17.682906,5 Z"
              ></path>
            </svg>
            <span>이용권 구매하기</span>
          </div>
          <!-- 연결페이지 생성 이후에 router-link로 변경하기 -->
          <svg width="30" height="30" class="next-icon">
            <path d="m16.6 10l10 10-10 10-2.3-2.3 7.7-7.7-7.7-7.7z"></path>
          </svg>
        </a>
      </div>
      <div class="tm-gnb-wrap">
        <div class="tm-gnb-inner">
          <a href="#">홈</a>
          <a href="#">태그검색</a>
          <a href="#">테마추천</a>
          <a href="#">요일별신작</a>
        </div>
        <div class="tm-gnb-service">
          <a href="#">멤버십 무료체험</a>
          <a href="#">고객센터</a>
        </div>
      </div>
      <!-- 연결페이지 생성 이후에 router-link로 변경하기 -->
    </div></transition
  >
</template>

<script>
export default {
  props: ["open"],
};
</script>

<style lang="scss" scoped>
.slide {
  &-leave-active,
  &-enter-active {
    transition: 0.25s;
  }
  &-enter {
    transform: translate(-100%, 0);
  }
  &-leave-to {
    transform: translate(100%, 0);
  }
}
#tm-menu-wrap {
  display: none;
}
// tablet, mobile
@media screen and (max-width: 1024px) {
  #tm-menu-wrap {
    overflow: hidden;
    display: block;
    background: #fff;
    position: fixed;
    top: 0;
    right: 0;
    max-width: 26rem;
    width: calc(100% - 7.8rem);
    height: 100%;
    z-index: 30;
    font-weight: 600;
    a {
      color: #fff;
    }
    // 웰컴메세지, 로그인/가입 버튼
    .menu-top {
      height: 7.5rem;
      padding: 1.5rem 1rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background-color: rgb(40, 42, 53);
      color: #fff;
      position: relative;
      .welcome-message {
        line-height: 1.5rem;
      }
      .login-button {
        position: absolute;
        bottom: 1.5rem;
        right: 1rem;
        width: 6.6rem;
        height: 1.875rem;
        background: none;
        border: 1px solid #fff;
        border-radius: 1rem;
        font-weight: 600;
        font-size: 0.875rem;
        text-align: center;
        line-height: 1.875rem;
      }
    }
    // 이용권 구매하기 링크버튼
    .menu-content {
      svg {
        fill: #fff;
      }
      .menu-item-wrap {
        padding: 0.75rem 1rem;
        background: rgb(129, 107, 255);
        height: 1.25rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.875rem;
        .menu-item {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .next-icon {
        width: 2rem;
        height: 2.5rem; //수정
        margin: -0.3125rem 0 0 0;
        transform: scale(0.5);
      }
    }
    .tm-gnb-wrap {
      div {
        a {
          display: flex;
          flex-direction: column;
          font-size: 0.875rem;
          height: 1.25rem;
          padding: 0.75rem 1rem;
          color: #000;
        }
      }
      .tm-gnb-inner {
        border-bottom: 0.0625rem solid #dddddd;
        margin-bottom: 0.5rem;
        padding-bottom: 0.5rem;
      }
    }
  }
}
</style>

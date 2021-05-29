<template>
  <div id="tm-menu-wrap">
    <div class="menu-top">
      <div class="welcome-message">
        {{ UserId }}님,<br />
        환영합니다&#33;
      </div>
      <div class="notice-icon-wrap">
        <svg width="24" height="24" class="notice-icon">
          <path
            d="M20.113 16.716c0-.625-.507-1.131-1.136-1.131a1.13 1.13 0 0 1-1.128-1.13V9.548a6.037 6.037 0 1 0-12.075 0v4.909c0 .623-.508 1.129-1.13 1.129-.626 0-1.135.507-1.135 1.131v.378h16.603v-.378m-4.905 1.888a3.396 3.396 0 1 1-6.792 0H3.51c-.834 0-1.51-.675-1.51-1.509v-.379c0-1.329.984-2.429 2.264-2.614V9.547A7.546 7.546 0 0 1 11.811 2a7.547 7.547 0 0 1 7.547 7.547v4.555a2.64 2.64 0 0 1 2.264 2.614v.38c0 .835-.676 1.508-1.51 1.508h-4.905zm-1.51 0H9.925a1.887 1.887 0 1 0 3.774 0z"
          ></path>
        </svg>
      </div>
      <div class="user-info-content">
        <div>
          <p>보유포인트</p>
          <span>{{ UserPoint }}P</span>
        </div>
        <div class="user-info-level-wrap">
          <div class="user-info-level-inner">
            <p>등급</p>
            <svg width="40" height="40" class="info-icon">
              <path
                d="m25.1 18.8c0.9-1 1.5-2.3 1.5-3.8 0-3.7-2.9-6.6-6.6-6.6s-6.6 2.9-6.6 6.6h3.2c0-1.8 1.6-3.4 3.4-3.4s3.4 1.6 3.4 3.4c0 0.9-0.4 1.7-1.1 2.3l-2 2.2c-1.2 1.2-1.9 2.8-1.9 4.6v0.9h3.2c0-2.5 0.8-3.4 2-4.7z m-3.5 12.8v-3.2h-3.2v3.2h3.2z m-1.6-28.2c9.2 0 16.6 7.4 16.6 16.6s-7.4 16.6-16.6 16.6-16.6-7.4-16.6-16.6 7.4-16.6 16.6-16.6z"
              ></path>
            </svg>
          </div>
          <span class="user-level-text">가입했덕</span>
        </div>
      </div>
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
      <div class="tm-gnb-top">
        <a href="#">홈</a>
        <a href="#">태그검색</a>
        <a href="#">테마추천</a>
        <a href="#">요일별신작</a>
        <a href="#">내 보관함</a>
        <a href="#">멤버십 무료체험</a>
      </div>
      <div class="tm-gnb-center">
        <a href="#">쿠폰 등록</a>
        <a href="#">친구 초대</a>
      </div>
      <div class="tm-gnb-bottom">
        <a href="#">내 멤버십 관리</a>
        <a href="#">설정</a>
        <a href="#">고객센터</a>
        <a href="#">RIDI 계정으로 통합</a>
        <a href="#">로그아웃</a>
      </div>
    </div>
    <!-- 연결페이지 생성 이후에 router-link로 변경하기 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      UserId: "root_user",
      UserPoint: "100",
    };
  },
};
</script>

<style lang="scss" scoped>
#tm-menu-wrap {
  display: none;
}
// tablet, mobile
@media screen and (max-width: 1024px) {
  #tm-menu-wrap {
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
    // 웰컴메세지, 사용자정보
    .menu-top {
      height: 8.25rem;
      padding: 1.5rem 1rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background-color: rgb(40, 42, 53);
      color: #fff;
      position: relative;
      // 사용자 알림
      .notice-icon-wrap {
        width: 2.5rem;
        height: 2.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        fill: #fff;
        position: absolute;
        top: 1.25rem;
        right: 0.5rem;
        .notice-icon {
          transform: scale(0.9);
        }
      }
      // 웰컴메세지
      .welcome-message {
        line-height: 1.5rem;
      }
      //사용자정보
      .user-info-content {
        font-size: 0.75rem;
        display: flex;
        flex-direction: column;
        span {
          font-size: 0.875rem;
        }
        div {
          height: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .user-info-level-wrap {
          .info-icon {
            width: 2.5rem;
            hieght: 2.5rem;
            margin: 0.125rem 0 0 -0.5625rem;
            transform: scale(0.35);
            fill: #fff;
          }
          .user-level-text {
            color: #ffc300;
          }
        }
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
        hieght: 2.5rem;
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
      .tm-gnb-top {
        border-bottom: 0.0625rem solid #dddddd;
        margin-bottom: 0.5rem;
        padding-bottom: 0.5rem;
      }
      .tm-gnb-center {
        border-bottom: 0.0625rem solid #dddddd;
        margin-bottom: 0.5rem;
        padding-bottom: 0.5rem;
      }
    }
  }
}
</style>

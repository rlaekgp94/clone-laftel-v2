<template>
  <header>
    <VuserTab v-show="show" v-click-outside="onClickOutside" />
    <div v-if="blackActive" id="tm-menu-mask" @click="blackToggle"></div>
    <VuserMenuOut :open="navOpen" v-click-outside="offTogglenav" />
    <div class="desktop-gnb-wrap">
      <router-link to="/">
        <svg width="66" height="17" class="desktop-logo">
          <path
            d="M 4.911 16.884 h 2.446 c 0.87 0 1.574 -0.707 1.574 -1.579 V 15 c 0 -0.871 -0.704 -1.578 -1.574 -1.578 H 4.911 a 1.465 1.465 0 0 1 -1.458 -1.463 V 2.185 c 0 -0.871 -0.705 -1.578 -1.575 -1.578 h -0.304 C 0.705 0.607 0 1.314 0 2.185 v 9.774 c 0 2.709 2.21 4.925 4.911 4.925 M 35.298 4.07 h 1.66 v 11.236 c 0 0.871 0.705 1.577 1.574 1.577 h 0.305 c 0.87 0 1.574 -0.706 1.574 -1.578 V 4.07 h 1.66 c 0.87 0 1.574 -0.707 1.574 -1.579 v -0.305 c 0 -0.871 -0.705 -1.578 -1.574 -1.578 h -6.773 c -0.87 0 -1.574 0.707 -1.574 1.578 v 0.305 c 0 0.872 0.705 1.58 1.574 1.58 M 46.487 16.852 c 0.103 0.02 0.21 0.032 0.318 0.032 h 6.345 c 0.87 0 1.574 -0.707 1.574 -1.579 V 15 c 0 -0.871 -0.705 -1.578 -1.574 -1.578 H 48.683 V 10.49 h 3.473 c 0.868 0 1.573 -0.706 1.573 -1.578 v -0.306 c 0 -0.871 -0.705 -1.578 -1.574 -1.578 h -3.472 V 4.07 H 53.15 c 0.87 0 1.574 -0.707 1.574 -1.578 v -0.305 c 0 -0.872 -0.705 -1.579 -1.574 -1.579 H 46.805 c -0.87 0 -1.575 0.707 -1.575 1.579 v 13.119 c 0 0.763 0.54 1.4 1.257 1.547 M 14.397 5.576 c 0 -0.727 0.51 -1.377 1.228 -1.49 c 0.903 -0.14 1.69 0.566 1.69 1.446 v 3.606 h -2.918 V 5.576 Z m -1.88 11.308 h 0.305 c 0.87 0 1.575 -0.707 1.575 -1.579 V 12.6 h 2.918 v 2.705 c 0 0.872 0.704 1.579 1.573 1.579 h 0.305 c 0.87 0 1.574 -0.707 1.574 -1.579 V 5.532 c 0 -2.842 -2.433 -5.142 -5.313 -4.909 c -2.567 0.208 -4.51 2.427 -4.51 5.01 v 9.672 c 0 0.872 0.704 1.579 1.574 1.579 Z M 28.12 4.07 h 2.445 c 0.869 0 1.574 -0.708 1.574 -1.58 v -0.305 c 0 -0.871 -0.705 -1.578 -1.574 -1.578 h -2.446 c -2.7 0 -4.91 2.216 -4.91 4.925 v 9.773 c 0 0.872 0.703 1.578 1.573 1.578 h 0.304 c 0.87 0 1.574 -0.706 1.574 -1.578 V 10.92 h 3.905 c 0.869 0 1.574 -0.707 1.574 -1.579 v -0.304 c 0 -0.872 -0.705 -1.579 -1.574 -1.579 H 26.66 V 5.532 c 0 -0.805 0.657 -1.463 1.46 -1.463 M 61.649 16.884 h 2.445 c 0.87 0 1.574 -0.707 1.574 -1.579 V 15 c 0 -0.871 -0.705 -1.578 -1.574 -1.578 h -2.445 c -0.803 0 -1.46 -0.658 -1.46 -1.463 V 2.185 c 0 -0.871 -0.705 -1.578 -1.573 -1.578 h -0.305 c -0.87 0 -1.574 0.707 -1.574 1.578 v 9.774 c 0 2.709 2.21 4.925 4.912 4.925"
          ></path>
        </svg>
      </router-link>

      <div class="gnb-wrap">
        <ul class="gnb-inner">
          <li><a href="#">태그검색</a></li>
          <li><a href="#">요일별 신작</a></li>
          <li><a href="#">테마추천</a></li>
          <li><a href="#">멤버십</a></li>
        </ul>
        <div class="gnb-right">
          <div class="search-icon-wrap">
            <svg width="24" height="24" class="search-icon">
              <path
                d="M16.552 10.315a6.214 6.214 0 0 1-1.819 4.412 6.142 6.142 0 0 1-4.414 1.843 6.142 6.142 0 0 1-4.414-1.843c-2.426-2.424-2.426-6.375 0-8.824a6.184 6.184 0 0 1 4.414-1.842c1.65 0 3.226.654 4.414 1.842a6.214 6.214 0 0 1 1.819 4.412m5.142 9.891l-4.754-4.751c2.547-3.273 2.256-8.073-.679-11.007C14.684 2.848 12.575 2 10.343 2a8.332 8.332 0 0 0-5.918 2.448C2.85 6 2 8.11 2 10.34s.873 4.34 2.45 5.916a8.312 8.312 0 0 0 5.893 2.424 8.444 8.444 0 0 0 5.142-1.746l4.73 4.752c.193.194.46.315.727.315.267 0 .533-.121.728-.315.436-.436.436-1.067.024-1.479"
              ></path>
            </svg>
          </div>
          <div class="desktop-userin-wrap">
            <div class="desktop-userin-inner">
              <div class="notice-icon-wrap">
                <svg width="24" height="24" class="notice-icon">
                  <path
                    d="M20.113 16.716c0-.625-.507-1.131-1.136-1.131a1.13 1.13 0 0 1-1.128-1.13V9.548a6.037 6.037 0 1 0-12.075 0v4.909c0 .623-.508 1.129-1.13 1.129-.626 0-1.135.507-1.135 1.131v.378h16.603v-.378m-4.905 1.888a3.396 3.396 0 1 1-6.792 0H3.51c-.834 0-1.51-.675-1.51-1.509v-.379c0-1.329.984-2.429 2.264-2.614V9.547A7.546 7.546 0 0 1 11.811 2a7.547 7.547 0 0 1 7.547 7.547v4.555a2.64 2.64 0 0 1 2.264 2.614v.38c0 .835-.676 1.508-1.51 1.508h-4.905zm-1.51 0H9.925a1.887 1.887 0 1 0 3.774 0z"
                  ></path>
                </svg>
              </div>
              <div class="desktop-userin-button" @click.stop="offClickOutside">
                <p class="desktop-userin-id">USER ID</p>
                <svg width="24" height="24" class="tab-icon">
                  <path
                    d="m12.3 13l7.7 7.7 7.7-7.7 2.3 2.4-10 10-10-10z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <!-- 데스크탑 사용자 로그인상태 -->
          <router-link to="/login" class="desktop-userout-button"
            >로그인/가입</router-link
          ><!--데스크탑 사용자 로그아웃상태 -->
          <!-- 연결페이지 생성 이후에 router-link로 변경하기 -->
        </div>
      </div>
    </div>
    <!-- Desktop 네비게이션 -->
    <div class="tm-gnb-wrap">
      <div class="tm-gnb-inner">
        <svg width="66" height="17" class="tm-logo">
          <path
            d="M 4.911 16.884 h 2.446 c 0.87 0 1.574 -0.707 1.574 -1.579 V 15 c 0 -0.871 -0.704 -1.578 -1.574 -1.578 H 4.911 a 1.465 1.465 0 0 1 -1.458 -1.463 V 2.185 c 0 -0.871 -0.705 -1.578 -1.575 -1.578 h -0.304 C 0.705 0.607 0 1.314 0 2.185 v 9.774 c 0 2.709 2.21 4.925 4.911 4.925 M 35.298 4.07 h 1.66 v 11.236 c 0 0.871 0.705 1.577 1.574 1.577 h 0.305 c 0.87 0 1.574 -0.706 1.574 -1.578 V 4.07 h 1.66 c 0.87 0 1.574 -0.707 1.574 -1.579 v -0.305 c 0 -0.871 -0.705 -1.578 -1.574 -1.578 h -6.773 c -0.87 0 -1.574 0.707 -1.574 1.578 v 0.305 c 0 0.872 0.705 1.58 1.574 1.58 M 46.487 16.852 c 0.103 0.02 0.21 0.032 0.318 0.032 h 6.345 c 0.87 0 1.574 -0.707 1.574 -1.579 V 15 c 0 -0.871 -0.705 -1.578 -1.574 -1.578 H 48.683 V 10.49 h 3.473 c 0.868 0 1.573 -0.706 1.573 -1.578 v -0.306 c 0 -0.871 -0.705 -1.578 -1.574 -1.578 h -3.472 V 4.07 H 53.15 c 0.87 0 1.574 -0.707 1.574 -1.578 v -0.305 c 0 -0.872 -0.705 -1.579 -1.574 -1.579 H 46.805 c -0.87 0 -1.575 0.707 -1.575 1.579 v 13.119 c 0 0.763 0.54 1.4 1.257 1.547 M 14.397 5.576 c 0 -0.727 0.51 -1.377 1.228 -1.49 c 0.903 -0.14 1.69 0.566 1.69 1.446 v 3.606 h -2.918 V 5.576 Z m -1.88 11.308 h 0.305 c 0.87 0 1.575 -0.707 1.575 -1.579 V 12.6 h 2.918 v 2.705 c 0 0.872 0.704 1.579 1.573 1.579 h 0.305 c 0.87 0 1.574 -0.707 1.574 -1.579 V 5.532 c 0 -2.842 -2.433 -5.142 -5.313 -4.909 c -2.567 0.208 -4.51 2.427 -4.51 5.01 v 9.672 c 0 0.872 0.704 1.579 1.574 1.579 Z M 28.12 4.07 h 2.445 c 0.869 0 1.574 -0.708 1.574 -1.58 v -0.305 c 0 -0.871 -0.705 -1.578 -1.574 -1.578 h -2.446 c -2.7 0 -4.91 2.216 -4.91 4.925 v 9.773 c 0 0.872 0.703 1.578 1.573 1.578 h 0.304 c 0.87 0 1.574 -0.706 1.574 -1.578 V 10.92 h 3.905 c 0.869 0 1.574 -0.707 1.574 -1.579 v -0.304 c 0 -0.872 -0.705 -1.579 -1.574 -1.579 H 26.66 V 5.532 c 0 -0.805 0.657 -1.463 1.46 -1.463 M 61.649 16.884 h 2.445 c 0.87 0 1.574 -0.707 1.574 -1.579 V 15 c 0 -0.871 -0.705 -1.578 -1.574 -1.578 h -2.445 c -0.803 0 -1.46 -0.658 -1.46 -1.463 V 2.185 c 0 -0.871 -0.705 -1.578 -1.573 -1.578 h -0.305 c -0.87 0 -1.574 0.707 -1.574 1.578 v 9.774 c 0 2.709 2.21 4.925 4.912 4.925"
          ></path>
        </svg>
        <div class="tm-search-icon-wrap">
          <svg width="24" height="24" class="tm-search-icon">
            <path
              d="M16.552 10.315a6.214 6.214 0 0 1-1.819 4.412 6.142 6.142 0 0 1-4.414 1.843 6.142 6.142 0 0 1-4.414-1.843c-2.426-2.424-2.426-6.375 0-8.824a6.184 6.184 0 0 1 4.414-1.842c1.65 0 3.226.654 4.414 1.842a6.214 6.214 0 0 1 1.819 4.412m5.142 9.891l-4.754-4.751c2.547-3.273 2.256-8.073-.679-11.007C14.684 2.848 12.575 2 10.343 2a8.332 8.332 0 0 0-5.918 2.448C2.85 6 2 8.11 2 10.34s.873 4.34 2.45 5.916a8.312 8.312 0 0 0 5.893 2.424 8.444 8.444 0 0 0 5.142-1.746l4.73 4.752c.193.194.46.315.727.315.267 0 .533-.121.728-.315.436-.436.436-1.067.024-1.479"
            ></path>
          </svg>
        </div>
        <div class="tm-menu-icon-wrap" @click="onTogglenav">
          <svg width="30" height="30" class="tm-menu-text">
            <path
              d="M0 10h1.588l1.76 2.832L5.108 10h1.588v6.696H5.233v-4.371l-1.885 2.86H3.31l-1.866-2.832v4.343H0V10zm8.303 0h5.051v1.31H9.767v1.359h3.157v1.31H9.767v1.407h3.635v1.31H8.303V10zm6.41 0h1.358l3.138 4.123V10h1.454v6.696H19.41l-3.243-4.257v4.257h-1.454V10zm10.35 6.802c-.899 0-1.607-.25-2.123-.747-.517-.497-.775-1.24-.775-2.229V10h1.473v3.788c0 .549.127.962.382 1.239.256.277.61.416 1.062.416.453 0 .807-.134 1.062-.402s.383-.67.383-1.205V10H28v3.779c0 .51-.069.953-.206 1.33-.137.376-.333.69-.588.942-.255.251-.564.44-.928.564a3.736 3.736 0 0 1-1.215.187z"
            ></path>
          </svg>
          <svg width="30" height="30" class="tm-menu-img">
            <path
              d="M42.638 1H23.362a1.029 1.029 0 0 0 0 2.057h19.276a1.029 1.029 0 0 0 0-2.057zm0 6.8H30.695a1.029 1.029 0 0 0 0 2.057h11.943a1.029 1.029 0 0 0 0-2.057zm0 6.8h-6.943a1.029 1.029 0 1 0 0 2.057h6.943a1.029 1.029 0 0 0 0-2.057z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
    <!-- tablet, mobile 네비게이션 -->
  </header>
</template>

<script>
import $ from "jquery";
import VuserTab from "./VuserTab";
import VuserMenuOut from "./VuserMenuOut";
import vClickOutside from "click-outside-vue3";
export default {
  name: "Header",
  data() {
    return {
      show: false,
      navOpen: false,
    };
  },
  computed: {
    blackActive: function () {
      return this.navOpen;
    },
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
  methods: {
    offClickOutside() {
      this.show = true;
    },
    onClickOutside() {
      this.show = false;
    },
    onTogglenav() {
      this.navOpen = true;
    },
    offTogglenav() {
      this.navOpen = false;
    },
    blackToggle: function () {
      this.navOpen = false;
    },
  },
  mounted() {
    let nav = $("header"),
      navText = $(".desktop-gnb-wrap a,.desktop-userin-id"),
      navIcon = $(".desktop-gnb-wrap svg,.tm-gnb-wrap svg"),
      tmLogo = $(".tm-logo");

    $(window).scroll(function () {
      let scroll = $(window).scrollTop();
      if (scroll === 0) {
        nav.css({ background: "transparent", "box-shadow": "none" });
        navText.css("color", "#fff");
        navIcon.css("fill", "#fff");
        tmLogo.css("display", "none");
      } else {
        nav.css({ background: "#fff", "box-shadow": "0 0 0.1875 #75757556" });
        navText.css("color", "#000");
        navIcon.css("fill", "#000");
        tmLogo.css("display", "block");
      }
    });
  },
  components: {
    VuserTab,
    VuserMenuOut,
  },
};
</script>

<style lang="scss" scoped>
#tm-menu-mask {
  position: fixed;
  z-index: 30;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  transition: all 0.5s;
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  background: transparent;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: -0.03125rem;
  fill: #fff;
  .desktop-gnb-wrap {
    width: 100%;
    display: flex;
    align-items: center;
    a {
      color: #fff;
    }
    // 로고
    .desktop-logo {
      margin: 0 0 0 3.75rem;
      fill: #fff;
      transform: scale(1.15);
    }
    .gnb-wrap {
      margin: 0 3.75rem 0 3.125rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      // 데스크탑상태의 네비게이션
      .gnb-inner {
        display: flex;
        li {
          &:not(:first-child) {
            margin-left: 1.5rem;
          }
        }
      }
      // 네비게이션 우측
      .gnb-right {
        display: flex;
        align-items: center;
        // 검색버튼
        .search-icon-wrap {
          width: 2.5rem;
          height: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          margin-right: 0.7rem;
          &:hover {
            background: rgba(255, 255, 255, 0.2);
            border-radius: 12.5rem;
          }
          .search-icon {
            transform: scale(0.85);
          }
        }
        // desktop-userout 사용자 로그아웃상태
        .desktop-userout-button {
          margin-left: 0.7rem;
          // display: none;
        }
        // desktop-userin-wrap 사용자 로그인상태
        .desktop-userin-wrap {
          display: none;
          .desktop-userin-inner {
            display: flex;
            align-items: center;
            color: #fff;
            // 알림버튼
            .notice-icon-wrap {
              width: 2.5rem;
              height: 2.5rem;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              margin-right: 1.25rem;
              &:hover {
                background: rgba(255, 255, 255, 0.2);
                border-radius: 12.5rem;
              }
              .notice-icon {
                transform: scale(0.9);
              }
            }
          }
          //사용자 탭메뉴
          .desktop-userin-button {
            cursor: pointer;
            display: flex;
            align-items: center;
            .desktop-userin-id {
              margin-left: 0.5rem;
            }
            .tab-icon {
              width: 2rem;
              margin-top: -0.625rem;
              margin-right: -0.3rem;
              transform: scale(0.7);
            }
          }
        }
      }
    }
  }
  .tm-gnb-wrap {
    display: none;
  }
}

// tablet
@media screen and (max-width: 1024px) {
  header {
    height: 3rem;
    .desktop-gnb-wrap {
      display: none;
    }
    .tm-gnb-wrap {
      display: block;
      width: 100%;
      .tm-gnb-inner {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        .tm-logo {
          display: none;
          fill: #000;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .tm-search-icon-wrap {
          margin-right: 1rem;
        }
        .tm-menu-icon-wrap {
          cursor: pointer;
          display: flex;
          position: relative;
          .tm-menu-text {
            position: absolute;
            bottom: 0;
          }
          .tm-menu-img {
            width: 3.75rem;
            margin-top: 0.625rem;
          }
        }
      }
    }
  }
}

//mobile
@media screen and (max-width: 480px) {
}
</style>

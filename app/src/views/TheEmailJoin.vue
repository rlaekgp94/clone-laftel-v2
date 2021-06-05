<template>
  <div id="theEmailJoin">
    <div class="email-join-wrap">
      <VmainLinkLogo />
      <div class="email-join-box">
        <div class="agree-wrap">
          <div class="check-all check-line">
            <label
              >다음 약관에 모두 동의<input
                class="check-box"
                type="checkbox"
                v-model="selectAll"
            /></label>
          </div>
          <div class="contour-line"></div>
          <ul class="check-list">
            <li class="check-line" v-for="content in check" :key="content">
              <label
                ><a href="#" class="agree-link">{{ content.agreeLink }}</a
                >{{ content.agreeText }} ({{ content.Item }})<input
                  type="checkbox"
                  v-model="selected"
                  :value="content.id"
                  number
                  class="check-box" /></label
              ><!-- Router 서비스이용약관,개인정보 처리방침 페이지 연결 보류 -->
            </li>
          </ul>
        </div>
        <button type="submit" class="btn-next">다음</button>
      </div>
    </div>
  </div>
</template>

<script>
import VmainLinkLogo from "../components/VmainLinkLogo";
export default {
  data() {
    return {
      check: [
        {
          id: "1",
          agreeLink: "라프텔 이용약관 ",
          agreeText: "동의",
          Item: "필수",
        },
        {
          id: "2",
          agreeLink: "개인정보 수집 및 이용",
          agreeText: "에 대한 안내",
          Item: "필수",
        },
        {
          id: "3",
          agreeText: "맞춤 할인 및 이벤트 소식 메일 수신",
          Item: "선택",
        },
      ],
      selected: [],
    };
  },
  computed: {
    selectAll: {
      get: function () {
        return this.check ? this.selected.length == this.check.length : false;
      },
      set: function (value) {
        const selected = [];

        if (value) {
          this.check.forEach(function (content) {
            selected.push(content.id);
          });
        }

        this.selected = selected;
      },
    },
  },
  components: {
    VmainLinkLogo,
  },
};
</script>

<style lang="scss" scoped>
.check-box-icon {
  svg {
    fill: none;
  }
}
#theEmailJoin {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(250, 250, 250);
}

.email-join-wrap {
  width: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
}

.email-join-box {
  width: 100%;
  height: auto;
  background: #fff;
  border: 1px solid rgb(238, 238, 238);
  border-radius: 0.25rem;
  padding: 2rem;
}

// 동의 체크박스 wrap
.agree-wrap {
  width: 100%;
}

// 공통 체크박스
.check-line {
  font-size: 1rem;
  line-height: 1.5rem;
  height: 1.5rem;
  label {
    width: 100%;
    display: inline-block;
    cursor: pointer;
    input {
      float: right;
    }
  }
}

// 전체 동의와 필수,선택동의 구분선
.contour-line {
  margin: 1rem 0;
  height: 0.0625rem;
  width: 100%;
  background: rgb(238, 238, 238);
}

// 전체 동의 체크박스
.check-all {
  font-weight: bold;
}

.check-list {
  li:not(:first-child) {
    margin-top: 1rem;
  }
  color: #505050;
}

// 동의약관 링크
.agree-link {
  text-decoration-line: underline;
  color: #505050;
}

.btn-next {
  margin-top: 2rem;
  background: #816bff;
  width: 100%;
  height: 3rem;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  color: #fff;
  border-radius: 0.25rem;
  border: none;
  outline: none;
  transition: all 0.08s ease-in 0s;
  &:hover {
    background: #6e58ff;
  }
}

// tablet
@media screen and (max-width: 1024px) {
  .email-join-wrap {
    width: 100%;
    margin: 0 1rem;
  }
}
</style>

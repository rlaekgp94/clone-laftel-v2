<template>
  <div id="theEmailJoinForms">
    <div class="email-join-forms-wrap">
      <VmainLinkLogo />
      <div class="email-join-forms-box">
        <h3>회원가입</h3>
        <form class="email-join-forms">
          <div class="int-area-wrap">
            <label for="id">이메일</label>
            <div class="int-area">
              <input
                v-model="id"
                placeholder="example@gmail.com"
                type="email"
                name="id"
                id="id"
                autofocus
                autocomplete="off"
                required
              />
            </div>
          </div>
          <div class="int-area-wrap">
            <label for="pw">비밀번호</label>
            <div class="int-area">
              <input
                v-model="pw"
                placeholder="8자 이상 영문/숫자/특수문자 중 2가지 포함"
                type="password"
                name="pw"
                id="pw"
                autocomplete="off"
                required
              />
            </div>
          </div>
          <div class="int-area-wrap">
            <label for="pw-con">비밀번호 확인</label>
            <div class="int-area">
              <input
                v-model="pwcon"
                placeholder="비밀번호를 다시 한 번 입력해주세요."
                type="password"
                name="pw-con"
                id="pw-con"
                autocomplete="off"
                required
              />
            </div>
          </div>
          <router-link :to="{ name: 'email-join-verification' }">
            <button :disabled="disabledActive" type="submit" class="btn-next">
              다음
            </button>
          </router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import VmainLinkLogo from "../components/VmainLinkLogo";
export default {
  data() {
    return {
      id: "",
      pw: "",
      pwcon: ""
      //   necessary: [],
    };
  },
  computed: {
    disabledActive: function () {
      if (this.id.length > 4 && this.pw.length > 4 && this.pwcon.length > 4) {
        return false;
      } else {
        return true;
      }
    }
  },
  components: {
    VmainLinkLogo
  }
};
</script>

<style lang="scss" scoped>
#theEmailJoinForms {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(250, 250, 250);
}

.email-join-forms-wrap {
  width: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
}

.main-link-logo {
  width: 8.25rem;
  height: 2.75rem;
  fill: #816bff;
  margin-bottom: 2.25rem;
}

.email-join-forms-box {
  width: 100%;
  height: auto;
  background: #fff;
  border: 1px solid rgb(238, 238, 238);
  border-radius: 0.25rem;
  padding: 2rem;
  h3 {
    height: 1.5rem;
    font-size: 1rem;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.5rem;
  }
}

.email-join-forms {
  margin-top: 1.5rem;
}

.int-area-wrap {
  &:nth-child(2) {
    margin-top: 1rem;
  }
  display: flex;
  flex-direction: column;
  label {
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.25rem;
    color: rgb(80, 80, 80);
  }
  .int-area {
    margin: 0.5rem 0 1.5rem;
    border-bottom: 1px solid rgb(238, 238, 238);
    padding-bottom: 0.5rem;
    input {
      border: none;
      outline: none;
      font-size: 1rem;
      line-height: 1.5rem;
      font-weight: 500;
      letter-spacing: -0.0375rem;
      color: rgb(18, 18, 18);
      caret-color: rgb(129, 107, 255); //수정
      &::placeholder {
        color: #cfcfcf;
      }
    }
  }
}

.find-pw-link {
  margin-top: 0.5rem;
  text-align: right;
  a {
    color: rgb(138, 138, 138);
    font-size: 0.875rem;
    line-height: 1.5rem;
    text-decoration-line: underline;
    letter-spacing: -0.025rem;
  }
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
  &:disabled {
    background: #e2e2e2;
  }
}

// tablet
@media screen and (max-width: 1024px) {
  .email-join-forms-wrap {
    width: 100%;
    margin: 0 1rem;
  }
}
</style>

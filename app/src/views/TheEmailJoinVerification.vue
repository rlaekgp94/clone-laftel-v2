<template>
  <div id="TheEmailJoinVerification">
    <div class="email-join-verification-wrap">
      <VmainLinkLogo />
      <div class="email-join-verification-box">
        <h3>이메일 인증</h3>
        <form class="email-join-verification">
          <div class="user-join-email">{{ UserEmail }}</div>
          <p class="notice-text">
            위 이메일로 인증코드를 보냈습니다.<br />
            이메일로 받은 인증코드 6자를 입력해주세요.
          </p>
          <div class="verification-code">
            <input
              v-model="code"
              placeholder="인증코드 6자를 입력해주세요."
              type="text"
              name="code"
              id="code"
              autofocus
              autocomplete="off"
              required
            />
            <div class="verification-code-timer">00:00</div>
          </div>
          <button class="btn-code-again" type="button">
            인증코드 다시 보내기
          </button>

          <button :disabled="code.length < 6" type="submit" class="btn-next">
            다음
          </button>
        </form>
      </div>
      <a class="different-email-verification-link" href="#"
        >다른 이메일로 인증하기</a
      >
    </div>
  </div>
</template>

<script>
import VmainLinkLogo from "../components/VmainLinkLogo";
export default {
  data() {
    return {
      UserEmail: "root_user@gmail.com",
      code: [],
    };
  },
  components: {
    VmainLinkLogo,
  },
};
</script>

<style lang="scss" scoped>
#TheEmailJoinVerification {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(250, 250, 250);
}

.email-join-verification-wrap {
  width: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
}

.email-join-verification-box {
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

.email-join-verification {
  margin-top: 1.5rem;
}

.user-join-email {
  color: rgb(129, 107, 255);
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.5rem;
  letter-spacing: -0.0375rem;
}

.notice-text {
  white-space: pre-line;
  margin-top: 0.5rem;
  line-height: 1.5em;
  font-size: 0.875rem;
  color: rgb(80, 80, 80);
  width: 100%;
}

.verification-code {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.5rem 0 1rem;
  border-bottom: 1px solid rgb(238, 238, 238);
  padding-bottom: 0.5rem;
  input {
    width: 100%;
    border: none;
    outline: none;
    font-size: 1.125rem;
    line-height: 1.5rem;
    font-weight: bold;
    letter-spacing: -0.0375rem;
    color: rgb(18, 18, 18);
    caret-color: rgb(129, 107, 255); //수정
    &::placeholder {
      color: #cfcfcf;
    }
  }
}

.btn-code-again {
  float: right;
  height: 1.5rem;
  border-radius: 0.25rem;
  border: 1px solid rgb(226, 226, 226);
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  color: rgb(99, 99, 99);
  font-size: 0.7rem;
  font-weight: bold;
  line-height: 0.5rem;
  letter-spacing: -0.01875rem;
  background: #fff;
  &:hover {
    background: #efefef;
  }
}

.verification-code-timer {
  color: rgb(241, 99, 97);
  font-size: 0.75rem;
  text-align: right;
  letter-spacing: -0.0375rem;
  margin-left: 0.25rem;
  // user-select:none;
}

.btn-next {
  clear: both;
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

.different-email-verification-link {
  color: rgb(138, 138, 138);
  font-size: 0.8125rem;
  line-height: 1.1875rem;
  margin-top: 1rem;
  letter-spacing: -0.01875rem;
  text-decoration: underline;
  &:hover {
    color: #121212;
  }
}

// tablet
@media screen and (max-width: 1024px) {
  .email-join-verification-wrap {
    width: 100%;
    margin: 0 1rem;
  }
}
</style>

<template>
  <div id="theEmailLogin">
    <div class="email-login-wrap">
      <VmainLinkLogo />
      <div class="email-login-box">
        <h3>이메일로 로그인</h3>
        <form class="email-login-form">
          <div class="int-area-wrap">
            <label for="id">이메일</label>
            <div class="int-area">
              <input
                type="email"
                name="id"
                id="id"
                autofocus
                autocomplete="on"
                required
              />
            </div>
          </div>
          <div class="int-area-wrap">
            <label for="pw">비밀번호</label>
            <div class="int-area">
              <input
                type="password"
                name="pw"
                id="pw"
                autocomplete="off"
                required
              />
            </div>
          </div>
          <div class="find-pw-link">
            <router-link to="/find-password">비밀번호 찾기</router-link>
          </div>
          <button type="submit" class="btn-area">로그인</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import VmainLinkLogo from "../components/VmainLinkLogo";
export default {
  components: {
    VmainLinkLogo,
  },
};
</script>

<style lang="scss" scoped>
#theEmailLogin {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(250, 250, 250);
}

.email-login-wrap {
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

.email-login-box {
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

.email-login-form {
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

.btn-area {
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
  .email-login-wrap {
    width: 100%;
    margin: 0 1rem;
  }
}
</style>

<template>
  <div id="theLogin">
    <div class="login-wrap">
      <rouer-link to="/">
        <svg viewBox="0 0 72 24" class="main-link-logo">
          <g transform="translate(3,4)" width="65.3333" height="16">
            <path
              d="M4.911 16.884h2.446c.87 0 1.574-.707 1.574-1.579V15c0-.871-.704-1.578-1.574-1.578H4.911a1.465 1.465 0 0 1-1.458-1.463V2.185c0-.871-.705-1.578-1.575-1.578h-.304C.705.607 0 1.314 0 2.185v9.774c0 2.709 2.21 4.925 4.911 4.925"
            ></path>
            <path
              d="M35.298 4.07h1.66v11.236c0 .871.705 1.577 1.574 1.577h.305c.87 0 1.574-.706 1.574-1.578V4.07h1.66c.87 0 1.574-.707 1.574-1.579v-.305c0-.871-.705-1.578-1.574-1.578h-6.773c-.87 0-1.574.707-1.574 1.578v.305c0 .872.705 1.58 1.574 1.58"
            ></path>
            <path
              d="M46.487 16.852c.103.02.21.032.318.032h6.345c.87 0 1.574-.707 1.574-1.579V15c0-.871-.705-1.578-1.574-1.578H48.683V10.49h3.473c.868 0 1.573-.706 1.573-1.578v-.306c0-.871-.705-1.578-1.574-1.578h-3.472V4.07H53.15c.87 0 1.574-.707 1.574-1.578v-.305c0-.872-.705-1.579-1.574-1.579H46.805c-.87 0-1.575.707-1.575 1.579v13.119c0 .763.54 1.4 1.257 1.547"
            ></path>
            <path
              d="M14.397 5.576c0-.727.51-1.377 1.228-1.49.903-.14 1.69.566 1.69 1.446v3.606h-2.918V5.576zm-1.88 11.308h.305c.87 0 1.575-.707 1.575-1.579V12.6h2.918v2.705c0 .872.704 1.579 1.573 1.579h.305c.87 0 1.574-.707 1.574-1.579V5.532c0-2.842-2.433-5.142-5.313-4.909-2.567.208-4.51 2.427-4.51 5.01v9.672c0 .872.704 1.579 1.574 1.579z"
            ></path>
            <path
              d="M28.12 4.07h2.445c.869 0 1.574-.708 1.574-1.58v-.305c0-.871-.705-1.578-1.574-1.578h-2.446c-2.7 0-4.91 2.216-4.91 4.925v9.773c0 .872.703 1.578 1.573 1.578h.304c.87 0 1.574-.706 1.574-1.578V10.92h3.905c.869 0 1.574-.707 1.574-1.579v-.304c0-.872-.705-1.579-1.574-1.579H26.66V5.532c0-.805.657-1.463 1.46-1.463"
            ></path>
            <path
              d="M61.649 16.884h2.445c.87 0 1.574-.707 1.574-1.579V15c0-.871-.705-1.578-1.574-1.578h-2.445c-.803 0-1.46-.658-1.46-1.463V2.185c0-.871-.705-1.578-1.573-1.578h-.305c-.87 0-1.574.707-1.574 1.578v9.774c0 2.709 2.21 4.925 4.912 4.925"
            ></path>
          </g>
        </svg>
      </rouer-link>
      <p class="login-view-title">
        신작부터 역대 인기 작품까지<br />
        애니메이션을 한 곳에서 편-안하게 즐기세요!
      </p>
      <router-link to="/login/email-login" class="email-login-button">
        <svg viewBox="0 0 24 16" class="email-icon">
          <path
            d="M23.582.32L12 7.238.412.32A1.17 1.17 0 000 1.203v13.594c0 .351.166.665.418.883L12 8.767l11.9 7.226h.1V1.204a1.17 1.17 0 00-.418-.883z"
          ></path>
          <path
            d="M1.281 16h22.62l-8.078-8.002H8.177l-7.76 7.686c.232.198.53.316.864.316z"
          ></path>
          <path
            d="M1.281 0a1.35 1.35 0 00-.87.32l10.704 10.55a1.259 1.259 0 001.764 0L23.581.32A1.333 1.333 0 0022.72 0H1.281z"
          ></path></svg
        >이메일로 로그인
      </router-link>
      <div class="link-wrap">
        <router-link to="/login/email-join">이메일로 가입</router-link>
        <router-link to="/login/api-login">다른 방법으로 계속</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
#theLogin {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: url("https://asset.laftel.net/static/media/img-landing-background.e1eb8272.webp")
    repeat;
  animation: 100s linear 0s infinite normal none running runningBackground;
  @keyframes runningBackground {
    from {
      background-position: 0 0;
    }
    to {
      background-position: calc(-100vw + 100%) 0;
    }
  }
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-wrap {
  width: 29.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.main-link-logo {
  width: 12.1875rem;
  height: 4rem;
  fill: #fff;
}

.login-view-title {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.15rem;
  margin-top: 0.75rem;
  line-height: 2.25rem;
  color: #fff;
  text-align: center;
}

.email-login-button {
  margin: 1.5rem 0 1.75rem;
  width: 100%;
  height: 3rem;
  color: #fff;
  background: #816bff;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: bold;
  line-height: 3rem;
  letter-spacing: -0.05rem;
  text-align: center;
  position: relative;
  cursor: pointer;
  &:hover {
    background: #6e58ff;
  }
  .email-icon {
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
    width: 24px;
    height: 16px;
    path:nth-child(1) {
      fill: rgb(226, 226, 226);
    }
    path:nth-child(2) {
      fill: rgb(208, 208, 208);
    }
    path:nth-child(3) {
      fill: rgb(238, 238, 238);
    }
  }
}
.link-wrap {
  a {
    color: #fff;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: -0.03rem;
  }
  display: flex;
  justify-content: space-between;
  width: 16rem;
}

// tablet
@media screen and (max-width: 1024px) {
  .login-wrap {
    width: 100%;
    margin: 0 1rem;
  }
}
</style>

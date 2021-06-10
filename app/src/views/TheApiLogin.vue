<template>
  <div id="theApiLogin">
    <div class="api-login-wrap">
      <router-link to="/">
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
      </router-link>
      <div class="api-login-button-wrap">
        <router-link to="#" class="api-login-button">
          <svg viewBox="0 0 24 24" class="api-icon">
            <path
              d="M24 21.96c0 1.14-.9 2.04-2.04 2.04H2.04C.96 24 0 23.04 0 21.96V2.04C0 .96.96 0 2.04 0H21.9c1.2 0 2.1.96 2.1 2.04v19.92z"
              fill="#3b5998"
            ></path>
            <path
              d="M12.723 18v-6.001h1.657l.219-2.068h-1.876l.003-1.035c0-.539.051-.828.826-.828h1.036V6h-1.657c-1.99 0-2.691 1.003-2.691 2.69v1.242H9V12h1.24v6h2.483z"
              fill="#fff"
            ></path></svg
          >페이스북으로 계속하기
        </router-link>
        <router-link to="#" class="api-login-button">
          <svg viewBox="0 0 24 24" class="api-icon">
            <path
              d="M24 21.96c0 1.14-.9 2.04-2.04 2.04H2.04C.96 24 0 23.04 0 21.96V2.04C0 .96.96 0 2.04 0H21.9c1.2 0 2.1.96 2.1 2.04v19.92z"
              fill="#55acee"
            ></path>
            <path
              d="M11.827 9.638l.026.428-.433-.053c-1.578-.2-2.957-.883-4.128-2.03l-.572-.568-.147.42c-.312.936-.113 1.926.537 2.59.347.368.269.42-.33.201-.207-.07-.39-.121-.407-.095-.061.06.147.857.312 1.172.226.438.685.867 1.188 1.122l.425.2-.503.008c-.486 0-.503.01-.451.194.174.569.858 1.172 1.622 1.434l.537.186-.468.279a4.873 4.873 0 01-2.324.649c-.39.008-.711.043-.711.069 0 .088 1.058.578 1.674.77 1.847.57 4.04.325 5.688-.648 1.17-.69 2.34-2.066 2.887-3.396.295-.709.589-2.005.589-2.625 0-.403.027-.456.512-.937.286-.28.556-.587.607-.674.087-.167.078-.167-.364-.018-.737.263-.841.228-.476-.166.268-.28.588-.788.588-.937 0-.026-.13.018-.277.097a4.82 4.82 0 01-.763.297l-.468.149-.425-.29c-.234-.156-.564-.331-.737-.384-.442-.123-1.12-.105-1.517.035-1.084.394-1.77 1.409-1.691 2.52z"
              fill="#fff"
            ></path></svg
          >트위터로 계속하기
        </router-link>
        <router-link to="#" class="api-login-button">
          <svg viewBox="0 0 24 24" class="api-icon">
            <path
              d="M24 21.96c0 1.14-.9 2.04-2.04 2.04H2.04C.96 24 0 23.04 0 21.96V2.04C0 .96.96 0 2.04 0H21.9c1.2 0 2.1.96 2.1 2.04v19.92z"
              fill="#f5f5f5"
            ></path>
            <path
              d="M12 8.32c1.127 0 1.887.487 2.32.894l1.694-1.654C14.974 6.593 13.62 6 12 6a5.995 5.995 0 00-5.36 3.307l1.94 1.506C9.066 9.367 10.413 8.32 12 8.32z"
              fill="#ea4335"
            ></path>
            <path
              d="M17.76 12.133c0-.493-.04-.854-.127-1.227H12v2.227h3.307c-.067.553-.427 1.386-1.227 1.947l1.894 1.467c1.133-1.047 1.786-2.587 1.786-4.414z"
              fill="#4285f4"
            ></path>
            <path
              d="M8.587 13.187a3.687 3.687 0 01-.2-1.188c0-.413.073-.813.193-1.187L6.64 9.308A6 6 0 006 11.999c0 .967.233 1.88.64 2.694l1.947-1.506z"
              fill="#fbbc05"
            ></path>
            <path
              d="M12 18c1.62 0 2.98-.533 3.974-1.453L14.08 15.08c-.507.354-1.186.6-2.08.6-1.587 0-2.933-1.047-3.413-2.493l-1.941 1.506A5.987 5.987 0 0012 18z"
              fill="#34a853"
            ></path></svg
          >구글로 계속하기
        </router-link>
        <router-link to="#" class="api-login-button">
          <svg viewBox="0 0 24 24" class="api-icon">
            <path
              d="M24 21.96c0 1.14-.9 2.04-2.04 2.04H2.04C.96 24 0 23.04 0 21.96V2.04C0 .96.96 0 2.04 0H21.9c1.2 0 2.1.96 2.1 2.04v19.92z"
              fill="#fee500"
            ></path>
            <path
              d="M12.5 6.001c-3.59 0-6.5 2.224-6.5 4.968 0 1.707 1.126 3.21 2.84 4.105l-.723 2.607a.258.258 0 00.105.278.269.269 0 00.302.002l3.161-2.064c.267.025.538.04.814.04 3.59 0 6.5-2.224 6.5-4.968 0-2.743-2.91-4.968-6.5-4.968"
              fill="#000"
            ></path></svg
          >카카오로 계속하기
        </router-link>
        <router-link to="#" class="api-login-button">
          <svg viewBox="0 0 24 24" class="api-icon">
            <path
              d="M24 21.96c0 1.14-.9 2.04-2.04 2.04H2.04C.96 24 0 23.04 0 21.96V2.04C0 .96.96 0 2.04 0H21.9c1.2 0 2.1.96 2.1 2.04v19.92z"
              fill="#000"
            ></path>
            <path
              d="M15.589 11.722a2.873 2.873 0 011.367-2.41 2.94 2.94 0 00-2.316-1.253c-.975-.102-1.92.583-2.416.583-.507 0-1.271-.573-2.095-.556A3.085 3.085 0 007.533 9.67c-1.123 1.943-.285 4.8.79 6.37.538.77 1.167 1.629 1.99 1.599.805-.034 1.105-.514 2.077-.514.963 0 1.245.514 2.085.494.863-.014 1.408-.773 1.927-1.55a6.362 6.362 0 00.881-1.794 2.776 2.776 0 01-1.694-2.553zM14.003 7.026A2.828 2.828 0 0014.65 5c-.72.076-1.384.42-1.861.963a2.691 2.691 0 00-.664 1.951 2.38 2.38 0 001.878-.888z"
              fill="#fff"
            ></path></svg
          >Apple로 계속하기
        </router-link>
        <router-link to="#" class="api-login-button">
          <img
            class="api-icon"
            src="data:image/png;base64,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"
            alt="리디아이콘 리디로그인"
          />
          리디로 계속하기
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
#theApiLogin {
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

.api-login-wrap {
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

.api-login-button-wrap {
  margin-top: 2.25rem;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
}

.api-login-button {
  &:not(:first-child) {
    margin-top: 1rem;
  }
  &:hover {
    background: rgb(238, 238, 238);
  }
  width: 100%;
  height: 3rem;
  color: #121212;
  background: #fff;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: bold;
  line-height: 3rem;
  letter-spacing: -0.05rem;
  text-align: center;
  position: relative;
  cursor: pointer;
  .api-icon {
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
  }
}

// tablet
@media screen and (max-width: 1024px) {
  .api-login-wrap {
    width: 100%;
    margin: 0 1rem;
  }
}
</style>

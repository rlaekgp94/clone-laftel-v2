<template>
  <div id="theEmailJoin">
    <div class="email-join-wrap">
      <VmainLinkLogo />
      <div class="email-join-box">
        <div class="email-join-check-box">
          <div class="text-check">
            다음 약관에 모두 동의
            <label>
              <input type="checkbox" class="check-box" />
              <div class="check-box-icon">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M19 5H5v14h14V5zM5 3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5z"
                  ></path>
                </svg>
              </div>
            </label>
          </div>
        </div>
        <button type="submit" class="btn-next">다음</button>
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

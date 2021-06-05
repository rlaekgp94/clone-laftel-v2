<template>
  <div id="theEmailJoin">
    <div class="email-join-wrap">
      <VmainLinkLogo />
      <div class="email-join-box">
        <div class="email-join-check-box">
          <div>
            <label for="allagree">다음 약관에 모두 동의</label>
            <input
              id="allagree"
              class="check-box"
              type="checkbox"
              v-model="selectAll"
            />
          </div>

          <ul>
            <li class="check-list" v-for="content in check" :key="content">
              <label
                ><router-link to="#" class="agree-link">{{
                  content.agreeLink
                }}</router-link
                >{{ content.agreeText }} ({{ content.Item }})</label
              >
              <input
                type="checkbox"
                v-model="selected"
                :value="content.id"
                number
                class="check-box"
              />
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
          agreeLink: "라프텔 이용약관",
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
  border: 1px solid red;
}

.email-join-box {
  width: 100%;
  height: auto;
  background: #fff;
  border: 1px solid rgb(238, 238, 238);
  border-radius: 0.25rem;
  padding: 2rem;
}

// .email-join-check-box {
//   display: flex;
// }
// .check-list {
//   display: flex;
//   flex-direction: column;
// }
.agree-link {
  color: red;
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

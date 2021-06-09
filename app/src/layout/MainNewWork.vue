<template>
  <div id="MainNewWork">
    <div class="tab-list-wrap">
      <h2 class="mainSlideTitle">요일별 신작</h2>
      <div class="tab-list-button-wrap">
        <ul class="tab-list-button">
          <li class="tab-link current" data-tab="tab-mon">월</li>
          <li class="tab-link" data-tab="tab-tues">화</li>
          <li class="tab-link" data-tab="tab-wednes">수</li>
          <li class="tab-link" data-tab="tab-thurs">목</li>
          <li class="tab-link" data-tab="tab-fri">금</li>
          <li class="tab-link" data-tab="tab-satur">토</li>
          <li class="tab-link" data-tab="tab-sun">일</li>
        </ul>
      </div>

      <div id="tab-mon" class="tab-content current">
        <VnewWorkslide :newWorkItems="newWorkItems" :newWorkDays="'mon'" />
      </div>

      <div id="tab-tues" class="tab-content">
        <VnewWorkslide :newWorkItems="newWorkItems" :newWorkDays="'tues'" />
      </div>

      <div id="tab-wednes" class="tab-content">
        <VnewWorkslide :newWorkItems="newWorkItems" :newWorkDays="'wednes'" />
      </div>

      <div id="tab-thurs" class="tab-content">
        <VnewWorkslide :newWorkItems="newWorkItems" :newWorkDays="'thurs'" />
      </div>

      <div id="tab-fri" class="tab-content">
        <VnewWorkslide :newWorkItems="newWorkItems" :newWorkDays="'fri'" />
      </div>

      <div id="tab-satur" class="tab-content">
        <VnewWorkslide :newWorkItems="newWorkItems" :newWorkDays="'satur'" />
      </div>

      <div id="tab-sun" class="tab-content">
        <VnewWorkslide :newWorkItems="newWorkItems" :newWorkDays="'sun'" />
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import VnewWorkslide from "../components/VnewWorkslide";
import newWorkList from "../assets/data/newWorkList.json";
export default {
  name: "MainNewWork",
  data() {
    return {
      newWorkItems: newWorkList.newWork,
    };
  },
  components: {
    VnewWorkslide,
  },
  mounted() {
    $("ul.tab-list-button li").click(function () {
      let tab_id = $(this).attr("data-tab");

      $("ul.tab-list-button li").removeClass("current");
      $(".tab-content").removeClass("current");

      $(this).addClass("current");
      $("#" + tab_id).addClass("current");
    });
  },
};
</script>

<style lang="scss" scoped>
#MainNewWork {
  width: 100%;
  margin-top: 3rem;
}

.tab-list-wrap {
  width: 100%;
  height: 100%;
}

.mainSlideTitle {
  width: 95vw;
  margin: 0 auto;
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: -0.05rem;
}

.tab-list-button-wrap {
  width: 95vw;
  margin: 1rem auto;
}

.tab-list-button {
  width: 37.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .tab-link {
    font-size: 1.5rem;
    text-align: center;
    font-weight: 600;
    color: #fff;
    width: 3.75rem;
    height: 3.75rem;
    background: #d0d0d0;
    border-radius: 10rem;
    cursor: pointer;
    line-height: 3.75rem;
  }
  .tab-link.current {
    background: #8168ff;
  }
}

.tab-content {
  display: none;
}
.tab-content.current {
  display: inherit;
}

// tablet
@media screen and (max-width: 1024px) {
  #MainNewWork {
    margin: 1.5rem 0;
  }
  .mainSlideTitle {
    font-size: 1.35rem;
  }

  .tab-list-button {
    width: 25rem;
    .tab-link {
      font-size: 1.25rem;
      width: 3rem;
      height: 3rem;
      line-height: 3rem;
    }
  }
}

//mobile 480px기준
@media screen and (max-width: 768px) {
  .tab-list-button {
    width: 28rem;
    .tab-link {
      font-size: 1.25rem;
      width: 3.25rem;
      height: 3.25rem;
      line-height: 3.25rem;
    }
  }

  .tab-list-button-wrap {
    width: 90vw;
  }

  .mainSlideTitle {
    width: 90vw;
  }
}
</style>

<template>
  <section class="section about-us">
    <b-container>
      <b-row class="blob-padding">
        <b-col cols="12" lg="5" class="has-blob about-us-blob blob-primary">
          <p class="supertitle">{{ $t("aboutUs.supertitle") }}</p>
          <h2 class="title section-title">{{ $t("aboutUs.title") }}</h2>
        </b-col>
        <b-col class="lowered">
          <h3>{{ $t("aboutUs.sectionTitle1") }}</h3>
          <p>
            {{ $t("aboutUs.sectionParagraph1") }}
          </p>
          <img
            src="@@/assets/img/aboutus-rocket.svg"
            alt=""
            class="rocket-img d-none d-md-block"
          />
        </b-col>
      </b-row>
      <b-row class="py-5">
        <b-col cols="12" md="6" class="lowered">
          <h3>{{ $t("aboutUs.sectionTitle2") }}</h3>
          <p>
            {{ $t("aboutUs.sectionParagraph2") }}
          </p>
        </b-col>
        <b-col cols="6" class="about-us-ideas d-none d-md-block">
          <img src="@@/assets/img/aboutus-ideas.png" alt="" />
        </b-col>
      </b-row>
    </b-container>
    <div class="about-us-process">
      <b-container>
        <b-row class="about-us-process-title">
          <b-col>
            <h3>{{ $t("aboutUs.processTitle") }}</h3>
            <p>{{ $t("aboutUs.processSubtitle") }}</p>
          </b-col>
        </b-row>
        <VueSlick v-bind="slickSettings" class="row justify-content-between">
          <template #prevArrow>
            <div class="custom-arrow">
              <b-icon-arrow-left />
            </div>
          </template>
          <template #nextArrow>
            <div class="custom-arrow">
              <b-icon-arrow-right />
            </div>
          </template>
          <b-col cols="12" lg="5">
            <div class="process-item">
              <img src="@@/assets/img/discovery.png" alt="" />
              <h4>{{ $t("aboutUs.process1Name") }}</h4>
              <p>
                {{ $t("aboutUs.process1Desc") }}
              </p>
            </div>
          </b-col>
          <b-col cols="12" lg="5" class="lowered-xl">
            <div class="process-item">
              <img src="@@/assets/img/design.png" alt="" />
              <h4>{{ $t("aboutUs.process2Name") }}</h4>
              <p>
                {{ $t("aboutUs.process2Desc") }}
              </p>
            </div>
          </b-col>

          <b-col cols="12" lg="5">
            <div class="process-item">
              <img src="@@/assets/img/creation.png" alt="" class="m-0" />
              <h4>{{ $t("aboutUs.process3Name") }}</h4>
              <p>
                {{ $t("aboutUs.process3Desc") }}
              </p>
            </div>
          </b-col>
          <b-col cols="12" lg="5" class="lowered-xl">
            <div class="process-item">
              <img src="@@/assets/img/implementation.png" alt="" />
              <h4>{{ $t("aboutUs.process4Name") }}</h4>
              <p>
                {{ $t("aboutUs.process4Desc") }}
              </p>
            </div>
          </b-col>
        </VueSlick>
      </b-container>
    </div>
  </section>
</template>

<script>
import VueSlick from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
export default {
  components: {
    VueSlick,
  },

  data() {
    return {
      slickSettings: {
        arrows: true,
        dots: true,
        slidesToShow: 1,
        mobileFirst: true,
        infinite: false,
        responsive: [
          {
            breakpoint: 9999,
            settings: "unslick",
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/_variables.scss";

.blob-padding {
  padding-top: 75px;
}

.about-us {
  &-blob {
    &::after {
      width: 509px;
      height: 339px;
      background: url("@@/assets/img/aboutus-app.png") no-repeat;
      top: 130px;
      left: -100px;
    }
  }

  .rocket-img {
    display: block;
    margin-left: auto;
    position: relative;
    right: -40px;
  }

  &-ideas {
    img {
      max-width: 100%;
      position: relative;
      top: -50px;
    }
  }

  &-process {
    position: relative;
    margin: 213px 0;
    color: white;
    &::before,
    &::after {
      content: "";
      width: 100%;
      height: 213px;
      background: url("@@/assets/img/aboutus-process-border.png") no-repeat
        bottom;
      background-size: 100% 100%;
      position: absolute;
    }

    &::before {
      transform: translateY(-100%);
      top: 0;
    }

    &::after {
      transform: translateY(100%) rotate(180deg);
      bottom: 0;
    }

    &-title {
      position: relative;
      top: -4em;
    }

    h3,
    h4 {
      color: white;
    }
  }
}

.process-item {
  text-align: center;
  & > img {
    margin-bottom: 40px;
  }
}

@include lg-max {
  .about-us {
    &-blob {
      &::after {
        width: 350px;
        background-size: contain;
        left: 0;
        top: 120px;
      }
    }

    &-process {
      padding: 60px 0;
      margin: 150px 0;
      &::before,
      &::after {
        height: 150px;
      }

      .lowered-xl {
        margin-top: 0;
      }
    }
  }

  .process-item {
    padding: 20px 0;
    img {
      margin-left: auto;
      margin-right: auto;
    }
  }
}

@include md-max {
  .about-us {
    &-process {
      margin: 100px 0;
      &::before,
      &::after {
        height: 100px;
      }

      &-title {
        top: 0;
      }
    }
  }
}
</style>

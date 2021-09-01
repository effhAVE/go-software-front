<template>
  <section class="section about-us">
    <b-container>
      <b-row class="blob-padding">
        <b-col
          cols="12"
          lg="5"
          class="has-blob about-us-blob blob-primary"
          data-aos="fade-right"
        >
          <p class="supertitle">{{ $t("aboutUs.supertitle") }}</p>
          <h2 class="title section-title">{{ $t("aboutUs.title") }}</h2>
        </b-col>
        <b-col class="lowered" data-aos="fade-left">
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
        <b-col cols="12" md="6" class="lowered" data-aos="fade-right">
          <h3>{{ $t("aboutUs.sectionTitle2") }}</h3>
          <p>
            {{ $t("aboutUs.sectionParagraph2") }}
          </p>
        </b-col>
        <b-col
          cols="6"
          class="about-us-ideas d-none d-md-block lowered"
          data-aos="fade-left"
        >
          <img src="@@/assets/img/aboutus-ideas.png" alt="" />
        </b-col>
      </b-row>
    </b-container>
    <div class="about-us-process">
      <b-container>
        <b-row class="about-us-process-title">
          <b-col data-aos="fade-right">
            <h3>{{ $t("aboutUs.processTitle") }}</h3>
            <p>{{ $t("aboutUs.processSubtitle") }}</p>
          </b-col>
        </b-row>
        <component
          :is="windowWidth <= 992 ? require('vue-slick-carousel') : 'div'"
          v-bind="slickSettings"
          class="row justify-content-between"
        >
          <template #prevArrow>
            <div class="custom-arrow">
              <BIconArrowLeft />
            </div>
          </template>
          <template #nextArrow>
            <div class="custom-arrow">
              <BIconArrowRight />
            </div>
          </template>
          <b-col cols="12" lg="5">
            <div class="process-item" data-aos="fade-in">
              <img src="@@/assets/img/discovery.png" alt="" />
              <h4>{{ $t("aboutUs.process1Name") }}</h4>
              <p>
                {{ $t("aboutUs.process1Desc") }}
              </p>
            </div>
          </b-col>
          <b-col cols="12" lg="5" class="lowered-xl">
            <div class="process-item" data-aos="fade-in">
              <img src="@@/assets/img/design.png" alt="" />
              <h4>{{ $t("aboutUs.process2Name") }}</h4>
              <p>
                {{ $t("aboutUs.process2Desc") }}
              </p>
            </div>
          </b-col>

          <b-col cols="12" lg="5">
            <div class="process-item" data-aos="fade-in">
              <img src="@@/assets/img/creation.png" alt="" class="mb-0" />
              <h4>{{ $t("aboutUs.process3Name") }}</h4>
              <p>
                {{ $t("aboutUs.process3Desc") }}
              </p>
            </div>
          </b-col>
          <b-col cols="12" lg="5" class="lowered-xl">
            <div class="process-item" data-aos="fade-in">
              <img src="@@/assets/img/implementation.png" alt="" />
              <h4>{{ $t("aboutUs.process4Name") }}</h4>
              <p>
                {{ $t("aboutUs.process4Desc") }}
              </p>
            </div>
          </b-col>
        </component>
      </b-container>
    </div>
  </section>
</template>

<script>
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import { BIconArrowLeft, BIconArrowRight } from "bootstrap-vue";
export default {
  components: {
    BIconArrowLeft,
    BIconArrowRight,
  },
  props: {
    windowWidth: {
      type: Number,
      default: 99999,
    },
  },
  data() {
    return {
      slickSettings: {
        arrows: true,
        dots: true,
        slidesToShow: 1,
        mobileFirst: true,
        infinite: false,
        lazyLoad: "ondemand",
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
      display: block;
      content: "";
      width: 100%;
      height: 213px;
      background: url("@@/assets/img/aboutus-process-border.png") no-repeat
        bottom;
      background-size: 100% 100%;
      position: absolute;
    }

    &::before {
      transform: translateY(calc(-100% + 1px));
      top: 0;
    }

    &::after {
      transform: translateY(calc(100% - 1px)) rotate(180deg);
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

  .process-item {
    & > img {
      max-width: 250px;
      max-height: 250px;
      margin-left: auto;
      margin-right: auto;
    }
  }
}
</style>

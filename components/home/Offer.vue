<template>
  <section class="section offer">
    <b-container>
      <b-row class="justify-content-between">
        <b-col cols="12" lg="6" class="order-lg-0 order-1">
          <h3>{{ $t("offer.solutionsTitle") }}</h3>
          <p>
            {{ $t("offer.solutionsDesc") }}
          </p>
        </b-col>
        <b-col
          cols="12"
          lg="5"
          class="text-right offer-blob has-blob order-lg-1 order-0"
        >
          <p class="supertitle">{{ $t("offer.supertitle") }}</p>
          <h2 class="title section-title">{{ $t("offer.title") }}</h2>
        </b-col>
      </b-row>
      <div class="solutions-list">
        <component
          :is="windowWidth <= 992 ? require('vue-slick-carousel') : 'div'"
          v-bind="slickSettings"
          class="row justify-content-around"
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
          <b-col cols="auto" class="solution-item">
            <OfferCard
              :title="$t('offer.card1Title')"
              :desc="$t('offer.card1Desc')"
              :img-src="require('@@/assets/img/offer-1.png')"
              img-alt=""
            />
          </b-col>
          <b-col cols="auto" class="lowered-xl solution-item">
            <OfferCard
              :title="$t('offer.card2Title')"
              :desc="$t('offer.card2Desc')"
              :img-src="require('@@/assets/img/offer-2.png')"
              img-alt=""
            />
          </b-col>
          <b-col cols="auto" class="solution-item">
            <OfferCard
              :title="$t('offer.card3Title')"
              :desc="$t('offer.card3Desc')"
              :img-src="require('@@/assets/img/offer-3.png')"
              img-alt=""
            />
          </b-col>
          <b-col cols="auto" class="lowered-xl solution-item">
            <OfferCard
              :title="$t('offer.card4Title')"
              :desc="$t('offer.card4Desc')"
              :img-src="require('@@/assets/img/offer-4.png')"
              img-alt=""
            />
          </b-col>
        </component>
      </div>

      <b-row class="about-owners">
        <b-col cols="12" lg="6">
          <h3>{{ $t("owners.title") }}</h3>
          <p>{{ $t("owners.desc") }}</p>
        </b-col>
        <b-col cols="12">
          <div class="about-owners-list">
            <div class="about-owners-list-item">
              <b-img src="@@/assets/img/greg.png" fluid />
              <div class="about-owners-list-item-desc">
                <h4>{{ $t("owners.gkTitle") }}</h4>
                <p class="team-role">{{ $t("owners.gkPosition") }}</p>
                <p>
                  {{ $t("owners.gkDesc") }}
                </p>
              </div>
            </div>
            <div class="about-owners-list-item">
              <b-img src="@@/assets/img/oscar.png" fluid />
              <div class="about-owners-list-item-desc">
                <h4>{{ $t("owners.ocTitle") }}</h4>
                <p class="team-role">{{ $t("owners.ocPosition") }}</p>
                <p>
                  {{ $t("owners.ocDesc") }}
                </p>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import { BIconArrowLeft, BIconArrowRight } from "bootstrap-vue";
import OfferCard from "./OfferCard.vue";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
export default {
  components: {
    OfferCard,
    BIconArrowLeft,
    BIconArrowRight,
  },

  props: {
    windowWidth: {
      type: Number,
      default: 999,
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

.offer {
  padding-top: 140px;
  margin-top: -140px;
  position: relative;
  z-index: 2;
}

.offer-blob {
  margin-top: -70px;
  &::before {
    width: 592px;
    height: 525px;
    background: url("@@/assets/img/offer-blob.png") no-repeat;
    background-size: cover;
    top: -80px;
    right: -120px;
  }

  &::after {
    width: 426px;
    height: 416px;
    background: url("@@/assets/img/offer-thinking.png") no-repeat;
    top: 110px;
    right: -100px;
  }
}

.solutions-list {
  margin-top: -70px;
}

.slick-prev,
.slick-next {
  &:hover {
    background-color: $secondaryColor;
    svg {
      color: $primaryColor;
    }
  }
}

.about-owners {
  margin: 150px 0;
  &-list {
    display: flex;
    margin-top: 100px;
    justify-content: space-around;

    &-item {
      position: relative;
      transition: flex-grow 0.5s;
      &:hover {
        flex-grow: 1;
        img {
          transform: scale(1.3);
        }

        &:first-of-type {
          & > .about-owners-list-item-desc {
            animation: slideInLeft 0.5s forwards;
          }
        }

        &:nth-of-type(2) {
          & > .about-owners-list-item-desc {
            animation: slideInRight 0.5s forwards;
          }
        }

        & > .about-owners-list-item-desc {
          visibility: visible;
        }
      }

      &:nth-of-type(1) {
        & > .about-owners-list-item-desc {
          left: 0;
          padding: 75px 70px 0 130px;
        }
      }

      &:nth-of-type(2) {
        text-align: right;
        & > .about-owners-list-item-desc {
          right: 0;
          padding: 75px 130px 0 70px;
          &::before {
            transform: scaleX(-1);
          }
        }
      }

      img {
        transition: transform 0.5s;
        max-width: 180px;
      }

      &-desc {
        position: absolute;
        visibility: hidden;
        top: 50%;
        width: 575px;
        height: 410px;
        z-index: -1;

        &::before {
          content: "";
          background: url("@@/assets/img/owners-blob.png") 0 0 no-repeat;
          width: inherit;
          height: inherit;
          position: absolute;
          left: 0;
          top: 0;
          z-index: -1;
        }

        & > h4 {
          margin-bottom: 8px;
        }
      }
    }
  }
}

.team-role {
  color: $accentColor;
}

@include lg-max {
  .offer {
    &-blob {
      &::before {
        width: 400px;
        height: 400px;
        background-size: contain;
        top: -30px;
      }

      &::after {
        position: static;
        width: 231px;
        height: 237px;
        background-size: contain;
        margin: 0 auto;
      }
    }
  }

  .solutions-list {
    margin: 50px 0;
    .lowered-xl {
      margin-top: 0;
    }
  }
}

@keyframes slideInLeft {
  0% {
    opacity: 0;
    visibility: visible;
    transform: translate(0, -50%);
  }

  100% {
    opacity: 1;
    transform: translate(140px, -50%);
  }
}

@keyframes slideInRight {
  0% {
    opacity: 0;
    visibility: visible;
    transform: translate(0, -50%);
  }

  100% {
    opacity: 1;
    transform: translate(-125px, -50%);
  }
}
</style>

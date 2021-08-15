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
        </VueSlick>
      </div>
    </b-container>
  </section>
</template>

<script>
import VueSlick from "vue-slick-carousel";
import OfferCard from "./OfferCard.vue";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
export default {
  components: {
    VueSlick,
    OfferCard,
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
</style>

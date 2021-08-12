<template>
  <section class="section offer">
    <b-container>
      <b-row class="justify-content-between">
        <b-col cols="6">
          <h3>{{ $t("offer.solutionsTitle") }}</h3>
          <p>
            {{ $t("offer.solutionsDesc") }}
          </p>
        </b-col>
        <b-col cols="5" class="text-right offer-blob has-blob">
          <p class="supertitle">{{ $t("offer.supertitle") }}</p>
          <h2 class="title section-title">{{ $t("offer.title") }}</h2>
        </b-col>
      </b-row>
      <div class="solutions-list">
        <b-row class="justify-content-around">
          <b-col cols="auto">
            <OfferCard
              :title="$t('offer.card1Title')"
              :desc="$t('offer.card1Desc')"
              :img-src="require('@@/assets/img/offer-1.png')"
              img-alt=""
            />
          </b-col>
          <b-col cols="auto" class="lowered-xl">
            <OfferCard
              :title="$t('offer.card2Title')"
              :desc="$t('offer.card2Desc')"
              :img-src="require('@@/assets/img/offer-2.png')"
              img-alt=""
            />
          </b-col>
        </b-row>
        <b-row class="justify-content-around">
          <b-col cols="auto">
            <OfferCard
              :title="$t('offer.card3Title')"
              :desc="$t('offer.card3Desc')"
              :img-src="require('@@/assets/img/offer-3.png')"
              img-alt=""
            />
          </b-col>
          <b-col cols="auto" class="lowered-xl">
            <OfferCard
              :title="$t('offer.card4Title')"
              :desc="$t('offer.card4Desc')"
              :img-src="require('@@/assets/img/offer-4.png')"
              img-alt=""
            />
          </b-col>
        </b-row>
      </div>
    </b-container>
  </section>
</template>

<script>
import OfferCard from "./OfferCard.vue";
export default {
  components: {
    OfferCard,
  },
};
</script>

<style lang="scss" scoped>
.offer {
  padding-top: 140px;
  margin-top: -140px;
}

.offer-blob {
  z-index: 2;
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
</style>

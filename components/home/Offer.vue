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
              title="Aplikacje i strony internetowe"
              :img-src="require('@@/assets/img/offer-1.png')"
              img-alt=""
              desc="Tworzymy aplikacje i strony internetowe spełniające potrzeby naszych klientów i użytkowników. Sklep, aplikacja lub serwis internetowy? Sprostamy Twoim oczekiwaniom. Lubimy walić wiadro i pisać teksty, które potem będą do zmiany bo tymczasowo są zwykłymi zapchaj kiszke."
            />
          </b-col>
          <b-col cols="auto" class="lowered-xl">
            <OfferCard
              title="Blogi i landing page"
              :img-src="require('@@/assets/img/offer-2.png')"
              img-alt=""
            />
          </b-col>
        </b-row>
        <b-row class="justify-content-around">
          <b-col cols="auto">
            <OfferCard
              title="Projekty graficzne stron i aplikacji"
              :img-src="require('@@/assets/img/offer-3.png')"
              img-alt=""
            />
          </b-col>
          <b-col cols="auto" class="lowered-xl">
            <OfferCard
              title="Audyty stron i marketing"
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
import OfferCard from "./OfferCard.vue"
export default {
  components: {
    OfferCard,
  },
}
</script>

<style lang="scss" scoped>
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
  margin-top: 140px;
}
</style>

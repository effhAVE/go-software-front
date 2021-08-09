<template>
  <div>
    <MainHero />
    <AboutUs />
    <Offer />
  </div>
</template>

<script>
import MainHero from "../components/home/MainHero.vue"
import AboutUs from "../components/home/AboutUs.vue"
import Offer from "../components/home/Offer.vue"
export default {
  components: {
    MainHero,
    AboutUs,
    Offer,
  },
}
</script>

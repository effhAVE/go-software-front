<template>
  <div>
    <MainHero id="intro" />
    <AboutUs id="about-us" :window-width="windowInnerWidth" />
    <Offer id="offer" :window-width="windowInnerWidth" />
    <Contact id="contact" />
  </div>
</template>

<script>
import windowWidthMixin from "@@/mixins/windowWidth";
import MainHero from "../components/home/MainHero.vue";
import AboutUs from "../components/home/AboutUs.vue";
import Offer from "../components/home/Offer.vue";
import Contact from "../components/home/Contact.vue";
export default {
  components: {
    MainHero,
    AboutUs,
    Offer,
    Contact,
  },

  mixins: [windowWidthMixin],
};
</script>

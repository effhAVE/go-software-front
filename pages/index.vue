<template>
  <div>
    <MainHero id="intro" />
    <AboutUs id="about-us" />
    <Offer id="offer" />
    <Contact id="contact" />
  </div>
</template>

<script>
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
};
</script>

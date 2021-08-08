<template>
  <div>
    <MainHero />
    <AboutUs />
  </div>
</template>

<script>
import MainHero from "../components/home/MainHero.vue"
import AboutUs from "../components/home/AboutUs.vue"
export default {
  components: {
    MainHero,
    AboutUs,
  },
}
</script>

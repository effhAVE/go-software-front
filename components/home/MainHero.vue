<template>
  <section class="hero-main">
    <header>
      <Navbar />
    </header>
    <div class="hero-main-wrapper">
      <div class="hero-main-container">
        <div class="hero-main-intro">
          <p class="supertitle">{{ $t("mainHero.supertitle") }}</p>
          <h1 class="title">
            {{ $t("mainHero.title1") }} <br />
            {{ $t("mainHero.title2") }}
          </h1>
          <b-button variant="transparent" class="intro-btn">
            {{ $t("mainHero.beginButton") }}
            <span class="btn-arrow"><b-icon-arrow-right /></span>
          </b-button>
        </div>
      </div>
      <Backgrounds />
    </div>
  </section>
</template>
<script>
import Navbar from "../common/Navbar/Navbar.vue"
import Backgrounds from "./HeroBackgrounds.vue"
export default {
  components: { Navbar, Backgrounds },
}
</script>

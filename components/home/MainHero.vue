<template>
  <section v-b-visible="visibleHandler" class="hero-main">
    <Navbar :fixed="isNavbarFixed" />
    <div class="hero-main-wrapper">
      <div class="hero-main-container">
        <div class="hero-main-intro" data-aos="fade-up">
          <p class="supertitle">{{ $t("mainHero.supertitle") }}</p>
          <h1 class="title">
            {{ $t("mainHero.title1") }} <br />
            {{ $t("mainHero.title2") }}
          </h1>
        </div>
      </div>
      <Backgrounds />
    </div>
  </section>
</template>
<script>
import Navbar from "../common/Navbar/Navbar.vue";
import Backgrounds from "./HeroBackgrounds.vue";
export default {
  components: { Navbar, Backgrounds },
  data() {
    return {
      isNavbarFixed: false,
    };
  },
  methods: {
    visibleHandler(isVisible) {
      this.isNavbarFixed = !isVisible;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/_variables.scss";

.hero-main {
  min-height: 100vh;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  position: relative;
  .navbar {
    padding-top: 0;
    padding-bottom: 0;
  }

  &-wrapper {
    flex: 1 1 auto;
  }

  &-container {
    padding: 0 60px;
    margin-top: 15vh;
    min-height: 640px;
  }

  &-intro {
    max-width: 1400px;
    margin: 0 auto;
  }

  .title {
    align-self: center;
    font-size: 4rem;
    margin-bottom: 100px;
  }

  .supertitle {
    font-size: 1.5rem;
    color: $accentColor;
  }
}

@media (max-width: 1600px) {
  .hero-main {
    &-container {
      margin-top: 10vh;
      min-height: 600px;
    }

    .title {
      font-size: 2.5em;
    }

    .supertitle {
      font-size: 1.1em;
    }
  }
}

@include lg-max {
  .hero-main {
    padding: 20px 0;
    &-wrapper {
      display: flex;
      flex-direction: column-reverse;
    }

    &-container {
      min-height: auto;
      margin-top: 50px;
      padding: 0 15px;
      max-width: 720px;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
    }

    .title {
      margin-bottom: 0;
    }
  }
}

@include md-max {
  .hero-main {
    &-container {
      max-width: 540px;
    }
    .title {
      font-size: 2em;
    }

    .supertitle {
      font-size: 1em;
    }
  }
}
</style>

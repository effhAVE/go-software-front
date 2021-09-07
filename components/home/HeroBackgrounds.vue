<template>
  <div class="scene">
    <div class="hero-main-intro" data-aos="fade-up" data-aos-offset="0">
      <b-button variant="transparent" class="intro-btn" @click="scrollBelow">
        <span class="d-none d-lg-block">
          {{ $t("mainHero.beginButton") }}
          <span class="btn-arrow"><BIconArrowRight /></span>
        </span>
      </b-button>
    </div>
    <img src="@@/assets/img/water.svg" class="water-bg" alt="" />
    <img src="@@/assets/img/lighthouse.svg" class="lighthouse-bg" alt="" />
    <img src="@@/assets/img/light.webp" class="light-bg" alt="" />
    <img src="@@/assets/img/boat.webp" class="boat-bg" alt="" />
    <img src="@@/assets/img/buoy.svg" class="buoy-bg" alt="" />
    <img src="@@/assets/img/sky.svg" class="sky-bg" alt="" />
    <img src="@@/assets/img/birds.svg" class="birds-bg" alt="" />
  </div>
</template>

<script>
import { BIconArrowRight } from "bootstrap-vue";
export default {
  components: {
    BIconArrowRight,
  },
  methods: {
    scrollBelow() {
      window.scrollTo({
        top: document.querySelector("#about-us").offsetTop,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/_variables.scss";

.scene {
  pointer-events: none;
  padding: 0 60px;
}

.intro-btn {
  color: $titleColor;
  position: relative;
  padding-left: 30px;
  padding-top: 30px;
  font-size: 18px;
  position: absolute;
  bottom: 300px;
  z-index: 2;
  &:hover {
    .btn-arrow {
      transform: translateX(10px);
    }
  }

  .btn-arrow {
    display: inline-block;
    margin-left: 5px;
    vertical-align: middle;
    @include smooth;
  }

  &::before {
    content: "";
    height: 58px;
    width: 58px;
    background-color: $secondaryColor;
    border-radius: 50%;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
  }
}

.hero-main-intro {
  pointer-events: all;
}

.lighthouse-bg {
  position: absolute;
  right: 15px;
  bottom: 68px;
  height: 630px;
  z-index: 4;
}

.light-bg {
  position: absolute;
  right: 410px;
  bottom: 428px;
  height: 280px;
  z-index: 3;
}

.water-bg {
  position: absolute;
  right: 60px;
  bottom: 20px;
  z-index: 2;
}

.boat-bg {
  position: absolute;
  left: 25%;
  bottom: 50px;
  z-index: 5;
  animation: float 2.5s infinite alternate ease-in-out;
}

.buoy-bg {
  position: absolute;
  left: 42%;
  bottom: 90px;
  z-index: 4;
  animation: buoyFloat 4s infinite alternate ease-in-out;
}

.sky-bg {
  position: absolute;
  left: 230px;
  bottom: 310px;
  z-index: 2;
}

.birds-bg {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 60%;
  z-index: 3;
}

@media (max-width: 1600px) {
  .lighthouse-bg {
    height: 540px;
    right: 25px;
    bottom: 78px;
  }

  .light-bg {
    right: 370px;
    bottom: 385px;
    height: 240px;
  }
}

@include xxl-max {
  .boat-bg {
    left: 20px;
    bottom: 70px;
  }

  .buoy-bg {
    left: 200px;
    bottom: 100px;
  }

  .sky-bg {
    left: 50px;
  }
}

@include xl-max {
  .water-bg {
    right: 10px;
  }

  .lighthouse-bg {
    right: -25px;
  }

  .light-bg {
    right: 320px;
  }

  .birds-bg {
    left: 300px;
    transform: none;
  }
}

@include lg-max {
  .scene {
    position: relative;
    min-height: 650px;
  }

  .lighthouse-bg {
    min-height: auto;
    height: 450px;
    bottom: 75px;
  }

  .light-bg {
    right: 260px;
    bottom: 336px;
    height: 195px;
  }

  .water-bg {
    right: -150px;
  }

  .buoy-bg {
    display: none;
  }

  .intro-btn {
    top: 200px;
    bottom: auto;
  }

  .sky-bg {
    top: 200px;
    bottom: auto;
  }

  .birds-bg {
    left: 15px;
    top: 300px;
  }
}

@include md-max {
  .lighthouse-bg {
    right: -200px;
  }

  .light-bg {
    right: 85px;
  }

  .water-bg {
    left: -350px;
  }

  .boat-bg {
    width: 100px;
  }
}

@include sm-max {
  .scene {
    min-height: 400px;
  }

  .intro-btn {
    top: 100px;
  }

  .sky-bg {
    top: 100px;
  }

  .birds-bg {
    left: 15px;
    top: 80px;
  }

  .lighthouse-bg {
    height: 260px;
    right: -100px;
  }

  .light-bg {
    right: 65px;
    bottom: 220px;
    height: 120px;
  }
}

@keyframes float {
  from {
    transform: rotate(3deg);
  }

  to {
    transform: rotate(-3deg);
  }
}

@keyframes buoyFloat {
  0% {
    transform: rotate(5deg) translateY(0);
  }

  50% {
    transform: rotate(0) translateY(-5px);
  }

  100% {
    transform: rotate(-5deg) translateY(0);
  }
}
</style>

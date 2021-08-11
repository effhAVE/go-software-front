<template>
  <div class="scene">
    <img src="@@/assets/img/water.svg" class="water-bg" alt="" />
    <img src="@@/assets/img/lighthouse.svg" class="lighthouse-bg" alt="" />
    <img src="@@/assets/img/boat.svg" class="boat-bg" alt="" />
    <img src="@@/assets/img/buoy.svg" class="buoy-bg" alt="" />
    <img src="@@/assets/img/sky.svg" class="sky-bg" alt="" />
    <img src="@@/assets/img/birds.svg" class="birds-bg" alt="" />
  </div>
</template>

<style lang="scss" scoped>
.lighthouse-bg {
  position: absolute;
  right: 15px;
  bottom: 65px;
  height: 650px;
  z-index: -1;
}

.water-bg {
  position: absolute;
  right: 60px;
  bottom: 20px;
  z-index: -1;
}

.boat-bg {
  position: absolute;
  left: 25%;
  bottom: 50px;
  z-index: -1;
  animation: float 2.5s infinite alternate ease-in-out;
}

.buoy-bg {
  position: absolute;
  left: 42%;
  bottom: 90px;
  z-index: -1;
  animation: buoyFloat 4s infinite alternate ease-in-out;
}

.sky-bg {
  position: absolute;
  left: 230px;
  top: 61%;
  z-index: -1;
}

.birds-bg {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 60%;
  z-index: -1;
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

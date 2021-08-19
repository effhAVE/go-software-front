<template>
  <div class="card-item">
    <div class="card">
      <div class="card-body">
        <img :src="imgSrc" :alt="imgAlt" class="card-img-top" />
        <h4 class="card-title">{{ title }}</h4>
      </div>
      <div class="card-back">
        <h4 class="card-title">{{ title }}</h4>
        <p class="mb-0">{{ desc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "img-src", "img-alt", "desc"],
};
</script>

<style lang="scss">
@import "@/assets/css/_variables.scss";
.card-item {
  text-align: center;
  min-height: 390px;
  width: 355px;
  perspective: 800px;
  margin: 0 auto;
  &:hover {
    .card {
      transform: rotateY(180deg);
    }
  }
  .card {
    transition: transform 0.7s;
    padding: 60px 40px;
    transform-style: preserve-3d;
    box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.06),
      0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04);
    border-radius: 20px;
    border: none;

    &-body {
      padding: 0;
      backface-visibility: hidden;
      transform: translateX(0);
    }

    &-img-top {
      height: 150px;
      width: auto;
      margin-bottom: 40px;
      object-fit: contain;
    }

    &-back {
      backface-visibility: hidden;
      position: absolute;
      top: 0;
      left: 0;
      transform: rotateY(180deg) translateX(0);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      padding: 30px;
    }
  }
}

@include lg-max {
  .card-item {
    padding-bottom: 40px;
    perspective: 1100px;
  }
}

@media (max-width: 400px) {
  .card-item {
    width: 100%;
    img {
      height: auto;
      max-width: 100%;
    }
  }
}
</style>

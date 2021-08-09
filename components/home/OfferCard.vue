<template>
  <div class="card-item">
    <b-card v-bind="$props" img-top>
      <div class="card-back">
        <h4 class="card-title">{{ title }}</h4>
        <p>{{ desc }}</p>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  props: ["title", "img-src", "img-alt", "desc"],
}
</script>

<style lang="scss">
.card-item {
  text-align: center;
  min-height: 390px;
  width: 355px;
  perspective: 800px;
  &:hover {
    .card {
      transform: rotateY(180deg);
    }
  }
  .card {
    transition: transform 0.7s;
    transform-style: preserve-3d;
    box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.06),
      0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04);
    border-radius: 20px;
    border: none;
    &-title,
    &-img-top {
      backface-visibility: hidden;
    }
  }

  .card-back {
    backface-visibility: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: rotateY(180deg) translate(50%, -50%);
    width: 100%;
    padding: 5px;
  }
}

.card-item .card-img-top {
  padding: 60px 40px;
}
</style>

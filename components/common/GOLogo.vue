<template>
  <b-img :src="getImgUrl()" alt="Logo GO Software" fluid />
</template>

<script>
export default {
  props: {
    white: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    getImgUrl() {
      const images = require.context("@@/assets/img/", false, /\.svg$/);
      return images(`./GOLogo${this.white ? "-white" : ""}.svg`);
    },
  },
};
</script>

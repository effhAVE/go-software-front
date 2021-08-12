<template>
  <div>
    <Nuxt />
    <Footer id="footer" />
  </div>
</template>

<script>
import Footer from "@@/components/common/Footer/Footer.vue";
export default {
  components: {
    Footer,
  },
  head() {
    return {
      title: this.$t("meta.title"),
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
    };
  },
};
</script>

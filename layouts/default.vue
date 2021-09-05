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
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return {
      title: this.$t("meta.title"),
      htmlAttrs: {
        ...i18nHead.htmlAttrs,
      },
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("meta.description"),
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.$t("meta.keywords"),
        },
        ...i18nHead.meta,
      ],
    };
  },
};
</script>

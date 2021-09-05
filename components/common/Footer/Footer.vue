<template>
  <footer class="footer">
    <b-container class="footer-inner">
      <b-row no-gutters>
        <b-col cols="12" md="auto" class="mr-5 mb-md-0 mb-5">
          <GOLogo white />
        </b-col>
        <b-col>
          <p class="mb-sm-3 mb-5">
            {{ $t("footer.cookiesInfo") }}
            <br />
            <nuxt-link to="/cookies">
              {{ $t("footer.cookiesReadMore") }}
            </nuxt-link>
          </p>
          <p>{{ $t("footer.copy") }}</p>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
import GOLogo from "../GOLogo.vue";
export default {
  components: {
    GOLogo,
  },
};
</script>

<style lang="scss" scoped>
.footer {
  background: #070032;
  min-height: 175px;
  display: flex;
  align-items: center;
  color: white;
  padding: 50px 0;
  &-inner {
    flex: 1 1 auto;
    margin: 0 auto;
  }

  p {
    line-height: 1.2em;
  }
}
</style>

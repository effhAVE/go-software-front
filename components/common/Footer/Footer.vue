<template>
  <footer class="footer">
    <b-container class="footer-inner">
      <b-row no-gutters>
        <b-col cols="12" md="auto" class="mr-5 mb-sm-0 mb-5">
          <GOLogo white />
        </b-col>
        <b-col>
          <p class="mb-sm-0 mb-5">
            Na naszej stronie stosujemy pliki cookies. Korzystanie ze strony bez
            zmiany ustawień przeglądarki oznacza, że pliki cookies będą
            zamieszczane w Twoim urządzeniu.
            <br />
            <nuxt-link to="/cookies"> Więcej informacji. </nuxt-link>
          </p>
          <p>Wszystkie prawa zastrzeżone. GO Software © 2021</p>
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

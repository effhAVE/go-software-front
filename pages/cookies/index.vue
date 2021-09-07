<template>
  <div class="has-navbar-fixed">
    <Navbar fixed />
    <section class="section cookies">
      <b-container>
        <b-row class="blob-padding">
          <b-col cols="12" lg="5" class="has-blob cookies-blob blob-primary">
            <p class="supertitle">{{ $t("cookies.supertitle") }}</p>
            <h2 class="title section-title">{{ $t("cookies.title") }}</h2>
          </b-col>
          <b-col class="lowered">
            <h3>{{ $t("cookies.sectionTitle1") }}</h3>
            <p>
              {{ $t("cookies.sectionParagraph1") }}
            </p>
          </b-col>
        </b-row>
        <ul class="list-unstyled">
          <b-row tag="li">
            <b-col cols="12" md="5">
              <h4>01</h4>
              <p>
                {{ $t("cookies.point01") }}
              </p>
            </b-col>
          </b-row>
          <b-row align-h="end" tag="li">
            <b-col cols="12" md="5">
              <h4>02</h4>
              <p>
                {{ $t("cookies.point02") }}
              </p>
            </b-col>
          </b-row>
          <b-row tag="li">
            <b-col cols="12" md="5">
              <h4>03</h4>
              <p>
                {{ $t("cookies.point03") }}
              </p>
            </b-col>
          </b-row>
          <b-row align-h="end" tag="li">
            <b-col cols="12" md="5">
              <h4>04</h4>
              <p>
                {{ $t("cookies.point04") }}
              </p>
            </b-col>
          </b-row>
          <b-row tag="li">
            <b-col cols="12" md="5">
              <h4>05</h4>
              <p>
                {{ $t("cookies.point05") }}
              </p>
            </b-col>
          </b-row>
        </ul>
      </b-container>
    </section>
  </div>
</template>

<script>
import Navbar from "@@/components/common/Navbar/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/_variables.scss";
.cookies {
  margin-bottom: 105px;
  &-blob {
    &::after {
      width: 509px;
      height: 309px;
      background: url("@@/assets/img/cookies.webp") no-repeat;
      background-size: contain;
      top: 160px;
      left: 0;
    }
  }

  ul {
    & > li {
      margin-bottom: -45px;
    }
  }
}

@include lg-max {
  .cookies {
    &-blob {
      &::after {
        width: 280px;
        top: 140px;
      }
    }

    ul {
      & > li {
        margin: 0;
      }
    }
  }
}
</style>

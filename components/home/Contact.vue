<template>
  <section class="section contact">
    <b-container>
      <b-row class="blob-padding">
        <b-col cols="12" lg="5" class="has-blob contact-blob blob-primary">
          <p class="supertitle">{{ $t("contact.supertitle") }}</p>
          <h2 class="title section-title">{{ $t("contact.title") }}</h2>
        </b-col>
        <b-col class="lowered">
          <h3>
            {{ $t("contact.sectionTitle1") }} <br />
            {{ $t("contact.sectionTitle2") }}
          </h3>
          <p>
            {{ $t("contact.sectionDesc") }}
          </p>
          <a href="mailto:contact@go-software.dev" target="_blank">
            <b-btn variant="primary" class="contact-btn">
              {{ $t("contact.sendButton") }}
            </b-btn>
          </a>
          <b-row>
            <b-col cols="12" md="auto">
              <p class="contact-email">contact@go-software.dev</p>
            </b-col>
            <b-col cols="12" md="auto">
              <p class="contact-tel d-inline-block">+48 {{ phoneNumber }}</p>
              <b-btn
                variant="outline-primary"
                class="contact-tel-button"
                :class="isPhoneVisible ? 'd-none' : ''"
                :disabled="isPhoneVisible"
                @click="showPhoneNumber"
              >
                {{ $t("contact.showNumber") }}
              </b-btn>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isPhoneVisible: false,
      phoneNumber: "XXX XXX XXX",
    };
  },
  methods: {
    showPhoneNumber() {
      this.isPhoneVisible = true;
      this.phoneNumber = "573 125 424";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/_variables.scss";

.contact {
  &-blob {
    &::after {
      width: 486px;
      height: 393px;
      background: url("@@/assets/img/contact.png") no-repeat;
      top: 220px;
      left: -110px;
    }
  }

  &-btn {
    margin: 85px 0;
  }

  &-email {
    &::before {
      content: "";
      display: inline-block;
      vertical-align: middle;
      background: url("@@/assets/img/contact-mails.png");
      width: 58px;
      height: 65px;
      margin-right: 10px;
    }
  }

  &-tel {
    &::before {
      content: "";
      display: inline-block;
      vertical-align: middle;
      background: url("@@/assets/img/contact-phone.png") no-repeat center;
      width: 54px;
      height: 65px;
      margin-right: 10px;
    }

    &-button {
      text-decoration: underline;
      color: #8ba0b2;
      padding: 1em;
      margin: 0 10px;
      &:not(:disabled) {
        &:hover,
        &:focus,
        &:active {
          background: none;
        }
      }
    }
  }
}

@include lg-max {
  .contact {
    &-blob {
      &::after {
        width: 250px;
        background-size: contain;
        left: 50px;
        top: 150px;
      }
    }

    .lowered {
      margin-top: 0;
    }

    &-btn {
      margin: 75px 0;
    }
  }
}

@include sm-max {
  .contact {
    &-btn {
      width: 100%;
    }

    &-tel-button {
      padding: 0.7em;
      margin: 0;
    }
  }
}
</style>

<template>
  <section class="section contact">
    <b-container>
      <b-row class="blob-padding">
        <b-col cols="5" class="has-blob contact-blob blob-primary">
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
          <b-btn variant="primary" class="contact-btn">
            {{ $t("contact.sendButton") }}
          </b-btn>
          <b-row>
            <b-col>contact@go-software.dev</b-col>
            <b-col>+48 XXX XXX XXX</b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<style lang="scss" scoped>
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
}
</style>

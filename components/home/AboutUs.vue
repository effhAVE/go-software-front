<template>
  <section class="section about-us">
    <b-container>
      <b-row class="blob-padding">
        <b-col cols="5" class="about-us-blob blob-primary">
          <p class="supertitle">{{ $t("aboutUs.supertitle") }}</p>
          <h2 class="title section-title">{{ $t("aboutUs.title") }}</h2>
        </b-col>
        <b-col class="lowered">
          <h3>{{ $t("aboutUs.sectionTitle1") }}</h3>
          <p>
            {{ $t("aboutUs.sectionParagraph1") }}
          </p>
          <img
            src="@@/assets/img/aboutus-rocket.svg"
            alt=""
            class="rocket-img"
          />
        </b-col>
      </b-row>
      <b-row class="blob-padding">
        <b-col cols="6" class="lowered">
          <h3>{{ $t("aboutUs.sectionTitle2") }}</h3>
          <p>
            {{ $t("aboutUs.sectionParagraph2") }}
          </p>
        </b-col>
        <b-col cols="6" class="about-us-ideas">
          <img src="@@/assets/img/aboutus-ideas.png" alt="" />
        </b-col>
      </b-row>
    </b-container>
    <div class="about-us-process">
      <b-container>
        <b-row class="about-us-process-title">
          <b-col>
            <h3>{{ $t("aboutUs.processTitle") }}</h3>
            <p>{{ $t("aboutUs.processSubtitle") }}</p>
          </b-col>
        </b-row>
        <b-row class="justify-content-between">
          <b-col cols="5">
            <div class="process-item">
              <img src="@@/assets/img/discovery.png" alt="" />
              <h4>{{ $t("aboutUs.process1Name") }}</h4>
              <p>
                {{ $t("aboutUs.process1Desc") }}
              </p>
            </div>
          </b-col>
          <b-col cols="5" class="lowered-xl">
            <div class="process-item">
              <img src="@@/assets/img/design.png" alt="" />
              <h4>{{ $t("aboutUs.process2Name") }}</h4>
              <p>
                {{ $t("aboutUs.process2Desc") }}
              </p>
            </div>
          </b-col>
        </b-row>
        <b-row class="justify-content-between">
          <b-col cols="5">
            <div class="process-item">
              <img src="@@/assets/img/creation.png" alt="" class="m-0" />
              <h4>{{ $t("aboutUs.process3Name") }}</h4>
              <p>
                {{ $t("aboutUs.process3Desc") }}
              </p>
            </div>
          </b-col>
          <b-col cols="5" class="lowered-xl">
            <div class="process-item">
              <img src="@@/assets/img/implementation.png" alt="" />
              <h4>{{ $t("aboutUs.process4Name") }}</h4>
              <p>
                {{ $t("aboutUs.process4Desc") }}
              </p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.blob-padding {
  padding-top: 75px;
}

.about-us {
  &-blob {
    &::before {
      content: "";
      position: absolute;
      display: block;
      width: 500px;
      height: 500px;
      background: url("@@/assets/img/aboutus-blob.svg") no-repeat;
      z-index: -1;
      top: -75px;
      left: -130px;
    }

    &::after {
      content: "";
      position: absolute;
      display: block;
      width: 459px;
      height: 289px;
      background: url("@@/assets/img/aboutus-app.svg") no-repeat;
      background-size: cover;
      z-index: -1;
      top: 160px;
      left: -100px;
    }
  }

  .rocket-img {
    display: block;
    margin-left: auto;
    position: relative;
    right: -40px;
  }

  &-ideas {
    img {
      max-width: 100%;
      position: relative;
      top: -50px;
    }
  }

  &-process {
    position: relative;
    margin: 213px 0;
    color: white;
    &::before,
    &::after {
      content: "";
      width: 100%;
      height: 213px;
      background: url("@@/assets/img/aboutus-process-border.png") no-repeat
        bottom;
      background-size: 100% 100%;
      position: absolute;
    }

    &::before {
      transform: translateY(-100%);
    }

    &::after {
      transform: rotate(180deg);
    }

    &-title {
      position: relative;
      top: -4em;
    }

    h3,
    h4 {
      color: white;
    }
  }
}

.process-item {
  text-align: center;
  & > img {
    margin-bottom: 40px;
  }
}
</style>

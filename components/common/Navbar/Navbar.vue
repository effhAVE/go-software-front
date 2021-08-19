<template>
  <header class="navbar-container">
    <b-navbar toggleable="lg" :class="fixed && 'is-fixed'">
      <b-navbar-brand to="/">
        <GOLogo class="navbar-logo" />
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse">
        <span></span>
        <span></span>
        <span></span>
      </b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav v-b-scrollspy="0" class="ml-lg-auto">
          <nuxt-link
            class="nav-link"
            :to="localePath({ path: '/' })"
            @click.native="scrollToSection('#intro', $event)"
          >
            {{ $t("navbar.start") }}
          </nuxt-link>
          <nuxt-link
            class="nav-link"
            :to="localePath({ path: '/', hash: 'about-us' })"
            @click.native="scrollToSection('#about-us', $event)"
          >
            {{ $t("navbar.aboutus") }}
          </nuxt-link>
          <nuxt-link
            class="nav-link"
            :to="localePath({ path: '/', hash: 'offer' })"
            @click.native="scrollToSection('#offer', $event)"
          >
            {{ $t("navbar.offer") }}
          </nuxt-link>
          <nuxt-link
            class="nav-link"
            :to="localePath({ path: '/', hash: 'contact' })"
            @click.native="scrollToSection('#contact', $event)"
          >
            {{ $t("navbar.contact") }}
          </nuxt-link>
          <b-nav-item-dropdown :text="`${$i18n.locale}`" right>
            <b-dropdown-item
              v-for="(lang, index) in ['pl', 'en'].filter(
                (locale) => locale !== $i18n.locale
              )"
              :key="index"
              @click.prevent.stop="$i18n.setLocale(lang)"
            >
              {{ lang.toUpperCase() }}
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>
<script>
import GOLogo from "../GOLogo.vue";
export default {
  components: {
    GOLogo,
  },

  props: {
    fixed: {
      type: Boolean,
      default: false,
      required: true,
    },
  },

  methods: {
    scrollToSection(section, event) {
      if (this.$nuxt.$route.name.includes("index")) {
        event.preventDefault();
        window.scrollTo({
          top: document.querySelector(section)?.offsetTop,
          behavior: "smooth",
        });
      }
    },
  },
};
</script>

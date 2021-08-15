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
        <b-navbar-nav v-b-scrollspy class="ml-lg-auto">
          <b-nav-item to="/">Start</b-nav-item>
          <b-nav-item :to="{ path: '/', hash: '#about-us' }">O nas</b-nav-item>
          <b-nav-item :to="{ path: '/', hash: '#offer' }">Oferta</b-nav-item>
          <b-nav-item :to="{ path: '/', hash: '#contact' }">Kontakt</b-nav-item>
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
};
</script>

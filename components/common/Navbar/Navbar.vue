<template>
  <b-navbar toggleable="lg" :class="fixed && 'is-fixed'">
    <b-navbar-brand href="#">
      <GOLogo />
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav v-b-scrollspy class="ml-auto">
        <b-nav-item to="/">Start</b-nav-item>
        <b-nav-item :to="{ path: '/', hash: '#about-us' }">O nas</b-nav-item>
        <b-nav-item :to="{ path: '/', hash: '#offer' }">Oferta</b-nav-item>
        <b-nav-item :to="{ path: '/', hash: '#contact' }">Kontakt</b-nav-item>
        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">PL</b-dropdown-item>
          <b-dropdown-item href="#">EN</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
import GOLogo from "../GOLogo.vue"
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
}
</script>

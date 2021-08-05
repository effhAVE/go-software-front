<template>
  <b-navbar toggleable="lg">
    <b-navbar-brand href="#">
      <GOLogo />
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item>Start</b-nav-item>
        <b-nav-item>O nas</b-nav-item>
        <b-nav-item>Oferta</b-nav-item>
        <b-nav-item>Kontakt</b-nav-item>
        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
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
}
</script>

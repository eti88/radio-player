<template>
  <v-row class="px-2">
    <router-link
      to="/"
      aria-label="BitSong"
      class="d-flex align-center"
      title="BitSong"
    >
      <img
        alt="BitSong"
        min-width="135"
        width="135"
        src="/bitsong_logo_red.svg"
      />
    </router-link>

    <v-spacer />

    <v-btn
      v-if="$vuetify.breakpoint.mdAndUp && !isLoggedIn"
      active-class="no-active"
      class="mr-2"
      to="/wallet/create"
      color="primary"
      dark
      >Connect Wallet</v-btn
    >
    <v-btn
      v-if="$vuetify.breakpoint.smAndDown && !isLoggedIn"
      icon
      to="/wallet/import"
    >
      <v-icon size="28">mdi-account-circle</v-icon>
    </v-btn>

    <toolbar-user-menu v-if="isLoggedIn" />
  </v-row>
</template>

<script>
import ToolbarUserMenu from "@/components/ToolbarUserMenu";

export default {
  components: {
    ToolbarUserMenu
  },

  computed: {
    isLoggedIn() {
      return this.$store.getters[`wallet/isLoggedIn`];
    }
  }
};
</script>

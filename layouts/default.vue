<template>
  <v-app>
    <toolbar />
    <v-content>
      <nuxt />
    </v-content>
    <bitsong-player />
  </v-app>
</template>

<script>
import Toolbar from "@/components/ui/Toolbar";
import BitsongPlayer from "@/components/ui/BitsongPlayer";

export default {
  components: {
    Toolbar,
    BitsongPlayer,
  },
};
</script>

<style lang="sass">
a
  text-decoration: none !important

.v-application
  .text-h2
    font-size: 2.5rem!important
    font-weight: 600
    line-height: 3.75rem
    letter-spacing: -.03em!important
    font-family: "Poppins", sans-serif !important

.theme--light.v-card > .v-card__text,
.theme--light.v-card .v-card__subtitle
  color: rgba(0, 0, 0, 1)

.theme--light > .v-application--wrap
  background-color: #eeeeee

.theme--dark.v-application
  background-color: #000
</style>

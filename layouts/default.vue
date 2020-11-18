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
    BitsongPlayer
  }
};
</script>

<style>
.theme--light.v-card > .v-card__text,
.theme--light.v-card .v-card__subtitle {
  color: rgba(0, 0, 0, 1);
}

.theme--light > .v-application--wrap {
  background-color: #eeeeee;
}

.theme--dark.v-application {
  background-color: #000;
}
</style>

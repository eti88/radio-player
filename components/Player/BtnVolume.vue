<template>
  <v-list-item-icon>
    <v-btn icon @click="onDestroy">
      <v-icon v-if="$vuetify.breakpoint.mdAndUp" size="30">mdi-close</v-icon>
      <v-icon v-else size="30">mdi-stop</v-icon>
    </v-btn>
  </v-list-item-icon>
</template>

<script>
export default {
  methods: {
    onDestroy() {
      console.log("--- destroy ---");
      this.$store.dispatch("player/destroy");
    }
  }
};
</script>

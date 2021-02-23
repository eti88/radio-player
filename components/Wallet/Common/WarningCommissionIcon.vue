<template>
  <v-tooltip
    bottom
  >
    <template v-slot:activator="{ on }">
      <v-btn
        :ripple="false"
        class="no-background-hover"
        depressed
        text
        small
        icon
        v-on="on"
      >
        <v-icon small color="red lighten-1" class="mr-2">mdi-alert-octagram</v-icon>
      </v-btn>
    </template>
    <span>Commission is more than 50%</span>
  </v-tooltip>
</template>

<script>
export default {
}
</script>

<style>
.no-background-hover::before {
  background-color: transparent !important;
}
</style>
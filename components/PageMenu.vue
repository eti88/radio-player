<template>
  <v-row justify="space-around">
    <v-col cols="12" class="pt-0 mb-4">
      <v-chip-group mandatory active-class="white--text font-weight-bold">
        <v-chip
          class="subtitle-1 px-6font-weight-medium"
          outlined
          :color="createRandomColor()"
          >Near you</v-chip
        >
        <v-chip
          class="subtitle-1 px-6font-weight-medium"
          outlined
          :color="createRandomColor()"
          >Trending</v-chip
        >
        <v-chip
          class="subtitle-1 px-6 font-weight-medium"
          outlined
          :color="createRandomColor()"
          to="/radio"
          >Genre</v-chip
        >
        <v-chip
          class="subtitle-1 px-6  font-weight-medium"
          outlined
          :color="createRandomColor()"
          >Location</v-chip
        >
        <v-chip
          class="subtitle-1 px-6 font-weight-medium"
          outlined
          :color="createRandomColor()"
          >Language</v-chip
        >
      </v-chip-group>
    </v-col>
  </v-row>
</template>

<script>
export default {
  methods: {
    createRandomColor() {
      return "hsla(" + Math.random() * 360 + ", 70%, 65%, 1)";
    }
  }
};
</script>

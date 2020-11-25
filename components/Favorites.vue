<template>
  <track-grid-featured
    class="mb-8"
    v-if="favorites.length > 0"
    :items="favorites"
  >
    <template v-slot:title>
      Favorites <v-icon color="red darken-1" right>mdi-heart</v-icon>
    </template>
  </track-grid-featured>
</template>

<script>
export default {
  computed: {
    favorites() {
      return this.$store.getters["favorites/radios"];
    },
  },
};
</script>

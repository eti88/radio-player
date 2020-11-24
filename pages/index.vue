<template>
  <page-template>
    <page-menu></page-menu>

    <recently-listened></recently-listened>

    <template v-for="country in countries">
      <track-grid-featured
        :key="country.country"
        class="mb-8"
        :items="country.radios"
      >
        <template v-slot:title>
          Top Radio in
          <nuxt-link :to="`/radio/${country.radios[0].country.slug}`">
            {{ country.country }}
          </nuxt-link>
        </template>
      </track-grid-featured>
    </template>
    <h2 class="text-h2 mb-1" v-if="genres.length">
      Mood & Genres
      <v-btn :to="`/radio`" icon>
        <v-icon color="red darken-1"> mdi-arrow-right </v-icon>
      </v-btn>
    </h2>

    <template v-for="genre in genres">
      <h3 :key="`h-${genre.genre}`" class="text-h3 grey--text text--darken-2">
        {{ genre.genre }} Radio
      </h3>
      <track-list :key="genre.genre" class="mb-8" :items="genre.radios" />
    </template>
  </page-template>
</template>

<script>
import PageTemplate from "@/components/PageTemplate";
import TrackGridFeatured from "@/components/TrackGridFeatured";
import Genres from "@/components/Genres";
import PageMenu from "@/components/PageMenu";

export default {
  components: {
    PageTemplate,
    TrackGridFeatured,
    Genres,
    PageMenu,
  },

  data() {
    return {
      countries: [],
      genres: [],
    };
  },

  async created() {
    const explore = await this.$api.getByExplore();

    this.countries = explore.countries;
    this.genres = explore.genres;
  },

  computed: {
    recents() {
      return this.$store.getters["recent/radios"];
    },
  },
};
</script>

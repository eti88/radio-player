<template>
  <page-template>
    <genres class="mb-8"></genres>
    <template v-for="country in countries">
      <track-grid-featured
        :key="country.country"
        class="mb-8"
        :title="`Top Radio in ${country.country}`"
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
  </page-template>
</template>

<script>
import PageTemplate from "@/components/PageTemplate";
import TrackGridFeatured from "@/components/TrackGridFeatured";
import Genres from "@/components/Genres";

export default {
  components: {
    PageTemplate,
    TrackGridFeatured,
    Genres
  },

  data() {
    return {
      countries: [],
      genres: []
    };
  },

  async created() {
    const explore = await this.$api.getByExplore();

    this.countries = explore.countries;
    this.genres = explore.genres;
  }
};
</script>

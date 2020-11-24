<template>
  <page-template>
    <page-menu></page-menu>
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
import PageMenu from "@/components/PageMenu";

export default {
  head() {
    const title = `Mood & Genres`;
    return {
      title: title,
      meta: [{ hid: "og-title", name: "og:title", content: title }]
    };
  },

  components: {
    PageTemplate,
    TrackGridFeatured,
    Genres,
    PageMenu
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

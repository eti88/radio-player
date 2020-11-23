<template>
  <page-template>
    <div class="d-flex">
      <v-btn icon to="/" exact class="ml-n3 mt-1" color="red darken-1">
        <v-icon>
          mdi-chevron-left
        </v-icon>
      </v-btn>
      <h3 class="text-h3 mb-2">Radio in {{ name }}</h3>
    </div>
    <template v-for="genre in genres">
      <track-grid-featured
        :key="genre.genre"
        class="mb-8"
        :items="genre.radios"
      >
        <template v-slot:title> {{ genre.genre }} </template>
      </track-grid-featured>
    </template>
  </page-template>
</template>

<script>
import PageTemplate from "@/components/PageTemplate";
import TrackGridFeatured from "@/components/TrackGridFeatured";

export default {
  components: {
    PageTemplate,
    TrackGridFeatured
  },

  asyncData({ params }) {
    return {
      slug: params.country
    };
  },

  data() {
    return {
      name: null,
      genres: []
    };
  },

  async created() {
    const radios = await this.$api.getRadiosByCountry(this.slug);
    this.name = radios.country;
    this.genres = radios.genres;
  }
};
</script>

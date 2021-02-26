<template>
  <page-template>
    <page-menu></page-menu>
    <div class="d-flex mb-4">
      <v-btn
        icon
        to="/radio/by-location"
        exact
        class="ml-n3 mt-1"
        color="red darken-1"
      >
        <v-icon> mdi-chevron-left </v-icon>
      </v-btn>
      <h3 class="text-h3 mb-2">
        Radio in <span class="red--text text--darken-1">{{ name }}</span>
      </h3>
    </div>

    <cities :country="slug" class="mb-8"></cities>

    <template v-for="genre in genres">
      <track-grid-featured
        :key="genre.genre.slug"
        class="mb-8"
        :items="genre.radios"
      >
        <template v-slot:title>
          <span class="text-h3 grey--text text--darken-1">{{
            genre.genre.name
          }}</span>
        </template>
      </track-grid-featured>
    </template>
  </page-template>
</template>

<script>
import PageTemplate from "@/components/PageTemplate";
import PageMenu from "@/components/PageMenu";
import TrackGridFeatured from "@/components/TrackGridFeatured";
import Cities from "@/components/Cities";

export default {
  head() {
    const title = `Radio in ${this.name}`;
    return {
      title: title,
      meta: [{ hid: "og-title", name: "og:title", content: title }]
    };
  },

  components: {
    PageTemplate,
    PageMenu,
    TrackGridFeatured,
    Cities
  },

  asyncData({ params }) {
    return {
      slug: params.country
    };
  },

  data() {
    return {
      name: "",
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

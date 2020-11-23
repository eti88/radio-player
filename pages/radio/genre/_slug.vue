<template>
  <page-template>
    <div class="d-flex">
      <v-btn icon to="/" exact class="ml-n3 mt-1">
        <v-icon>
          mdi-chevron-left
        </v-icon>
      </v-btn>
      <h3 class="text-h3 mb-2">{{ name }} Radio</h3>
    </div>
    <template v-for="country in countries">
      <track-grid-featured
        :key="country.country"
        class="mb-8"
        :items="country.radios"
      >
        <template v-slot:title>
          Top in
          {{ country.country }}
        </template>
        <template v-slot:action>
          <v-btn
            :to="`/radio/genre/${slug}/${country.radios[0].country.slug}`"
            icon
          >
            <v-icon>
              mdi-arrow-right
            </v-icon>
          </v-btn>
        </template>
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
      slug: params.slug
    };
  },

  data() {
    return {
      name: null,
      countries: []
    };
  },

  async created() {
    const radios = await this.$api.getRadiosByGenre(this.slug);
    this.name = radios.genre;
    this.countries = radios.countries;
  }
};
</script>

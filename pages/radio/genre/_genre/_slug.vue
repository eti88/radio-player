<template>
  <page-template>
    <div class="d-flex">
      <v-btn icon :to="`/radio/genre/${genre_slug}`" exact class="ml-n3 mt-1">
        <v-icon>
          mdi-chevron-left
        </v-icon>
      </v-btn>
      <h3 class="text-h3 mb-2">{{ genre }} Radio in {{ country }}</h3>
    </div>
    <v-container>
      <v-row>
        <template v-for="radio in radios">
          <track-grid-item
            :key="radio.slug"
            :picture="radio.picture"
            :name="radio.name"
            :country="radio.country.name"
            :city="radio.city.name"
            :stream_url="radio.stream_url"
            :isHls="radio.stream_type === 'hls'"
          ></track-grid-item>
        </template>
      </v-row>
    </v-container>
  </page-template>
</template>

<script>
import PageTemplate from "@/components/PageTemplate";
import TrackGridItem from "@/components/TrackGridItem";

export default {
  components: {
    PageTemplate,
    TrackGridItem
  },

  async asyncData({ app, params }) {
    const radios = await app.$api.getRadiosByGenreAndCountry(
      params.genre,
      params.slug
    );

    return {
      genre: radios.genre,
      genre_slug: params.genre,
      country: radios.country,
      radios: radios.radios
    };
  }
};
</script>

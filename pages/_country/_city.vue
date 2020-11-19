<template>
  <page-template>
    <track-grid-featured
      class="mb-8"
      :title="`Top Radio in ${city}`"
      :items="radios"
    />
    <h2 class="text-h2 mb-1">Radio in {{ city }}</h2>
    <track-list class="mb-8" :items="radios" />
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

  async asyncData({ app, params }) {
    const radios = await app.$api.getByCountryAndCity(
      params.country,
      params.city,
      20
    );
    return {
      radios: radios.docs,
      country: params.country,
      city: params.city
    };
  },

  data() {
    return {
      radios: []
    };
  }
};
</script>

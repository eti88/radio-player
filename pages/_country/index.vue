<template>
  <page-template>
    <track-grid-featured
      class="mb-8"
      :title="`Top Radio in ${country}`"
      :items="radios"
    />
    <track-grid-featured class="mb-8" :title="`Pop Radio`" :items="radio_pop" />
    <track-grid-featured
      class="mb-8"
      :title="`Rock Radio`"
      :items="radio_rock"
    />
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
    const radios = await app.$api.getByCountry(params.country, 20);
    const pop = await app.$api.getByGenreAndCountry("Pop", params.country, 20);
    const rock = await app.$api.getByGenreAndCountry(
      "Rock",
      params.country,
      20
    );

    return {
      radios: radios.docs,
      radio_pop: pop.docs,
      radio_rock: rock.docs,
      country: params.country
    };
  },

  data() {
    return {
      radios: []
    };
  }
};
</script>

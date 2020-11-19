<template>
  <page-template>
    <track-grid-featured
      class="mb-8"
      title="Top Radio in Italy"
      :items="italy_radios"
    />
    <track-grid-featured
      class="mb-8"
      title="Top Radio in Spain"
      :items="spain_radios"
    />
    <h2 class="text-h2 mb-1">
      Pop Radio
    </h2>
    <track-list class="mb-8" :items="pop" />
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

  async created() {
    const italy_radios = await this.$api.getByCountry("Italy", 20);
    this.italy_radios = italy_radios.docs;

    const pop = await this.$api.getByGenre("Pop", 20);
    this.pop = pop.docs;

    const spain_radios = await this.$api.getByCountry("Spain", 20);
    this.spain_radios = spain_radios.docs;
  },

  data() {
    return {
      italy_radios: [],
      spain_radios: [],
      pop: []
    };
  }
};
</script>

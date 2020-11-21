<template>
  <page-template>
    <track-grid-featured
      v-if="italy_radios.length"
      class="mb-8"
      title="Top Radio in Italy"
      :items="italy_radios"
    />
    <track-grid-featured
      v-if="spain_radios.length"
      class="mb-8"
      title="Top Radio in Spain"
      :items="spain_radios"
    />
    <h2 class="text-h2 mb-1" v-if="chillout.length">Chillout Radio</h2>
    <track-list class="mb-8" v-if="chillout.length" :items="chillout" />
    <h2 class="text-h2 mb-1" v-if="pop.length">Pop Radio</h2>
    <track-list class="mb-8" v-if="pop.length" :items="pop" />
    <h2 class="text-h2 mb-1" v-if="electro.length">Electro Radio</h2>
    <track-list class="mb-8" v-if="electro.length" :items="electro" />
  </page-template>
</template>

<script>
import PageTemplate from "@/components/PageTemplate";
import TrackGridFeatured from "@/components/TrackGridFeatured";

export default {
  components: {
    PageTemplate,
    TrackGridFeatured,
  },

  async created() {
    const italy_radios = await this.$api.getByCountry("Italy", 20);
    this.italy_radios = italy_radios.docs;

    const spain_radios = await this.$api.getByCountry("Spain", 20);
    this.spain_radios = spain_radios.docs;

    const chillout = await this.$api.getByGenre("Ambient Chillout", 20);
    this.chillout = chillout.docs;

    const pop = await this.$api.getByGenre("Pop", 20);
    this.pop = pop.docs;

    const electro = await this.$api.getByGenre("Electro", 20);
    this.electro = electro.docs;
  },

  data() {
    return {
      italy_radios: [],
      spain_radios: [],
      chillout: [],
      pop: [],
      electro: [],
    };
  },
};
</script>

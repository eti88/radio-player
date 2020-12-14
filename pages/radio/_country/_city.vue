<template>
  <page-template>
    <page-menu></page-menu>
    <div class="d-flex mb-4">
      <v-btn
        icon
        :to="`/radio/${country}`"
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
    <track-list class="mb-8" :items="radios" />
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
      slug: params.city,
      country: params.country
    };
  },

  data() {
    return {
      name: "",
      radios: []
    };
  },

  async created() {
    const response = await this.$api.getRadiosByCity(this.slug);
    this.name = response.city.name;
    this.radios = response.radios;
  }
};
</script>

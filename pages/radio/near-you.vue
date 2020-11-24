<template>
  <page-template>
    <page-menu></page-menu>

    <div class="d-flex mb-4">
      <v-btn icon to="/" exact class="ml-n3 mt-3" color="red darken-1">
        <v-icon> mdi-chevron-left </v-icon>
      </v-btn>
      <h2 class="text-h2 mb-1">
        Radio <span class="red--text text--darken-1">near you</span>
      </h2>
    </div>
    <track-list class="mb-8" :items="radios" />
  </page-template>
</template>

<script>
import PageTemplate from "@/components/PageTemplate";
import TrackList from "@/components/TrackList";
import PageMenu from "@/components/PageMenu";

export default {
  components: {
    PageTemplate,
    PageMenu,
    TrackList,
  },

  data() {
    return {
      radios: [],
    };
  },

  async created() {
    try {
      this.radios = await this.$api.getRadiosNearYou();
    } catch (e) {
      console.error(e);
    }
  },
};
</script>

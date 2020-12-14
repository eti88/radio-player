<template>
  <track-grid-featured class="mb-8" v-if="recents.length > 0" :items="recents">
    <template v-slot:title>
      Recently <span class="red--text text--darken-1">listened</span>
      <v-btn small outlined rounded class="ml-2" @click.stop="clearAll"
        >Clear All</v-btn
      >
    </template>
  </track-grid-featured>
</template>

<script>
export default {
  computed: {
    recents() {
      return this.$store.getters["recent/radios"];
    }
  },
  methods: {
    clearAll() {
      this.$store.dispatch("recent/clear");
    }
  }
};
</script>

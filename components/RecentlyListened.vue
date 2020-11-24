<template>
  <track-grid-featured class="mb-8" v-if="recents.length > 0" :items="recents">
    <template v-slot:title>
      Recently <span class="red--text text--darken-1">listened</span>
    </template>
  </track-grid-featured>
</template>

<script>
export default {
  computed: {
    recents() {
      return this.$store.getters["recent/radios"];
    },
  },
};
</script>

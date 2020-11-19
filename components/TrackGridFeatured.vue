<template>
  <div>
    <h2 class="text-h2 mb-4">
      {{ title }}
    </h2>
    <v-sheet elevation="0" color="transparent">
      <v-slide-group show-arrows center-active class="ml-n2">
        <v-slide-item v-for="(track, i) in tracks" :key="i">
          <track-grid-item
            :cover="track.cover"
            :title="track.title"
            :subtitle="track.subtitle"
            :source="track.source"
            :isHls="track.isHls"
          ></track-grid-item>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script>
import TrackGridItem from "@/components/TrackGridItem";

export default {
  props: {
    title: {
      type: String,
      default: "Nuove uscite"
    },
    tracks: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    TrackGridItem
  }
};
</script>

<style lang="sass">
.v-slide-group__prev--disabled
  display: none !important

.v-slide-group__next, .v-slide-group__prev
  min-width:22px !important
</style>
